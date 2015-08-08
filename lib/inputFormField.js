import React from 'react';
import FormField from './formField';
import Constants from "./constants";
import classNames from 'classnames';


/**
 * extend FormField, rewrite getValue/ handleChange/renderField method
 **/
export default class InputFormField extends FormField{
    constructor(props) {
        super(props);
    }

    getValue()  {
        return this.refs.el.getDOMNode().value
    }

    handleChange(e) {
        var value = e.target ? e.target.value : e;
        this.props.handleDataChange(this, value);
        this.doValidate();
    }
    renderField() {
        
        if(this.props.jsxdisabled) {
            this.props.jsxdisabled='disabled';
        }else {
            this.props.jsxdisabled="";
        }
        return <input className="kuma-input"  disabled={this.props.jsxdisabled} name={this.props.key} type="text" ref="el" value={this.state.value} onChange={this.handleChange.bind(this)}/>
    }
}