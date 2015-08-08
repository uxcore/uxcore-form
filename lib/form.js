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
            jsxmode: this.props.jsxmode
        };
        ['attachFormField', 'detachFormField', 'handleDataChange'].forEach((m)=> {
            this[m] = this[m].bind(this);
        });
    }
    render() {
        let children = this.props.children;
        let self=this;
        let className = classNames(this.props.jsxprefixCls, this.props.className);

        if(!children.map) {
            children= [children];
        }
        return (
            <div className={className} >
                {children.map(function(child) {
                    
                    return React.cloneElement(child, {
                        jsxmode:self.state.jsxmode,
                        data: self.state.data,
                        jsxvalue: self.state.data[child.props.jsxname] || child.props.jsxvalue ,
                        attachFormField: self.attachFormField,
                        detachFormField: self.detachFormField,
                        handleDataChange: self.handleDataChange
                    });

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
    handleDataChange(field, value, fn){
        this.props.jsxdata[field.props.jsxname]=value;
    }
    doValidate() {
        let flag=true;
        Object.keys(this.fields).map(function(key){
            let _flag=this.fields[key].doValidate();
            this.errors[key]=_flag;
            flag=flag && !_flag;
        }.bind(this));
        return flag;
    }
    isDirty() {
        return !this.doValidate();
    }
    /**
     * check all the field, and store the error state, use error state
     */
    doSave() {
        let flag=this.doValidate();
        var _mode=flag?Constants.MODE.view:Constants.MODE.edit;
        this.setState({jsxmode:_mode});
    }
}

Form.defaultProps = {
    jsxprefixCls: "kuma-form",
    jsxmode:Constants.MODE.edit,
    jsxdata:{}
};