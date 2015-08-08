/**
 *  1:  每个field需要单独的validate, 这样才能保证单个的field输入时候的validate, 使用state.error来决定验证是否通过，是否显示
 *      error信息
 *  2:  Form的save Action，需要对每个field做validate, 如果验证通过，保存成功后，mode 还需要改变
 *  3:  刚开始的纠结点在，item2 会重新render所有form field, 感觉是要render 2次，一次在validate的时候，一次在save后，改变mode
 *      但仔细想，这两个不可能同时发生
 */
import React from 'react';
import Constants from "./constants";
import ValidatorType from "./customValidatorType";
import classNames from 'classnames';

class FormField extends React.Component {

    constructor(props) {
        super(props);
        props=this.props;
        this.state= {
            value: props.jsxvalue,
            error: false,
            required: props.jsxrule && props.jsxrule.required? props.jsxrule.required:false,
            errorMsg: props.jsxrule && props.jsxrule.message? props.jsxrule.message:props.errorMsg
        };
    }

    getName() {
        return this.props.jsxname;
    }

    componentDidMount() {
        this.props.attachFormField(this);
    }

    componentDidUpdate() {
        this.props.attachFormField(this);
    }
    
    //field data change callback, will change the form cache data , at same time.
    handleDataChange(target,value) {
        this.state.value=value;  
        this.props.handleDataChange(target, value);
        this.doValidate();
    }

    getValue()  {
        return this.state.value;
    }
    componentWillUnmount () {
        this.props.detachFormField(this);
    }

    /**
     *@return {boolean} whether this field has error, if validate pass, no error,pls note the reverse logic
     */
    doValidate () {
        if(this.props.jsxrule) {
            let rules=this.props.jsxrule;
            let validator=rules.validator;
            let _pass= ValidatorType(rules,this.getValue());
            this.setState({value:this.getValue(), error:!_pass});
            return !_pass;
        }else {
            this.setState({value:this.getValue()});
            return false;
        }
    }

    renderTips() {
        if(!!this.props.jsxtips) {
            return <li className="kuma-form-tips">
                        <i className="kuma-icon kuma-icon-information"></i>
                        {this.props.jsxtips}
                    </li>
        }
    }
    renderField() {

        let me=this,props=this.props,child=this.props.children;
        if(child ) {
            if(!child.slice || child.length==0) {
                child= [child];
            }
            let _mode=<div>
                {child.map(function(child) {
                      return React.cloneElement(child, {
                            jsxmode:me.props.jsxmode,
                            jsxvalue: props.data[props.jsxname] || props.jsxvalue ,
                            handleDataChange: me.handleDataChange,
                            context: me
                        });
                })}
            </div>
            return _mode;
        }
    }
    renderErrorMsg() {
        return  <li className="kuma-form-errormsg">{this.state.errorMsg}</li>
    }

    renderLabel() {
        return   <label className="kuma-label">{this.props.jsxtext}<i>{this.state.required?"*":""}</i></label>
    }
    /**
    * base formfiled, just like container, could including table, other component
    */
    render() {

        let _body,className = classNames(this.props.jsxprefixCls, this.props.className);
        if (this.props.jsxmode==Constants.MODE.edit) {
            if(!!this.state.error) {
                _body=<ul className="kuma-form-field">
                        <li>{this.renderField()}</li>
                        {this.renderTips()}
                        {this.renderErrorMsg()}
                       </ul>
            }else {
                _body=<ul className="kuma-form-field">
                    {this.renderField()}
                    {this.renderTips()}
                </ul>
            }
        }else{
            _body=<ul className="kuma-form-field">
                        {this.renderField()}
                  </ul>
        }
        return (
            <div className={className}>
                {this.renderLabel()}
                {_body}
            </div>
        );
    }

};

FormField.propTypes= {
    jsxmode: React.PropTypes.oneOf([Constants.MODE.view, Constants.MODE.edit]),
    required: React.PropTypes.boolean
};

FormField.defaultProps = {
    jsxprefixCls: "kuma-form-item",
    required: false,
    error:false,
    animation: true,
    jsxtips:"",
    errorMsg:"ERROE Message"
};

export default FormField;