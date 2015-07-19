/**
 * Created by xy on 15/4/13.
 */
import React from 'react';
import Constants from "./constants";
import ValidatorType from "./customValidatorType";
import classNames from 'classnames';

class FormField extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            value: this.props.jsxvalue,
            error: false,
            required: this.props.jsxrule && this.props.jsxrule.required? this.props.jsxrule.required:false,
            errorMsg: this.props.jsxrule && this.props.jsxrule.message? this.props.jsxrule.message:this.props.errorMsg
        };
    }

    getForm() {
        return this.props.form;
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
    
    handleChange() {

    }

    setValue(value) {
        this.setProps('value',value);
        this.refs.el.value=value;
    }
    getValue()  {
        return this.refs.el.getDOMNode().value
    }
    componentWillUnmount () {
        this.props.detachFormField(this);
        this.props.form=null;
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

    render() {

        let _mode;
        let className = classNames(this.props.jsxprefixCls, this.props.className);

        if (this.props.jsxmode==Constants.MODE.edit) {
            let children = this.props.children.length>0?this.props.children:[this.props.children];
            let self=this;

            _mode=<div className={className}>
            {children.map(function(child) {
                child.props.form=self.props.form;
                return child;
            })}
            </div>
        }else {
            _mode=<div></div>;
        }
        return _mode;
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