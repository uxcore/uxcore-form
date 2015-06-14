import React from 'react';
import Constants from "./constants"
import classNames from 'classnames';


/**
 * React.Component vs React.createClass
 * 1: getInitialState method, React.Component没有，直接在constructor方法里面初始化
 * 2: getDefaultProps 方法没有，propTypes and defaultProps可以直接定义在constructor上，instead of in the class body.
 */
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.fields = {};
        this.errors={};
        this.state= {
            data: this.props.jsxdata,
            dirty:false,
            mode: this.props.jsxmode
        };
        ['attachFormField', 'detachFormField', 'handleInputChange'].forEach((m)=> {
            this[m] = this[m].bind(this);
        });
    }
    render() {
        let children = this.props.children;
        let self=this;
        let className = classNames(this.props.jsxprefixCls, this.props.className);

        return (
            <div className={className} >
                {children.map(function(child) {
                    //if (child.type === Validator) {
                    return React.cloneElement(child, {
                        mode:self.state.mode,
                        form:self,
                        value: self.state.data[child.props.keyMap],
                        attachFormField: self.attachFormField,
                        detachFormField: self.detachFormField,
                        handleInputChange: self.handleInputChange
                    });

                   /* } else if (child.props && child.props.children) {
                        return React.cloneElement(child, {}, self.attachValidators(child.props.children));
                    }*/

                    return child;
                })}
            </div>
        );
    }
    componentDidMount () {
    }
    attachFormField(field) {
        var name = field.getName();
        name?(this.fields[name] = field):"";
    }
    detachFormField(field) {
        delete this.fields[field.getName()];
    }
    handleInputChange(field, value, fn){
        console.info(field);
        console.info(field.props.keyMap);
        console.info(value);
        this.props.jsxdata[field.props.keyMap]=value;
    }
    /**
     * check all the field, and store the error state, use error state
     */
    doSave() {
        let flag=true;
        Object.keys(this.fields).map(function(key){
            let _flag=this.fields[key].doValidate();
            this.errors[key]=_flag;
            flag=flag && !_flag;
        }.bind(this));
        console.info("flag:",flag);
        var _mode=flag?Constants.MODE.view:Constants.MODE.edit;
        console.info("flag:",flag);
        console.info("_mode:",_mode);
        this.setState({mode:_mode});
        console.info(this.props.jsxdata);
    }
}

Form.defaultProps = {
    jsxprefixCls: "kuma-form",
    jsxmode:Constants.MODE.edit,
    jsxdata:{}
};