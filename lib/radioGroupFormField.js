/**
 * Created by xy on 15/4/13.
 */
import React from 'react';
import FormField from './formField';
import Constants from "./constants";
import classNames from 'classnames';
import RadioGroup from 'uxcore-radiogroup';


export default class RadioGroupFormField extends FormField{
    constructor(props) {
        super(props);
    }
    getValue() {
        return this.refs.el.getCheckedValue()
    }
    handleChange(objAux) {
        var value = objAux.context.getValue();
        this.props.handleDataChange(this, value);
        this.doValidate();
    }
    renderField() {
        return <RadioGroup jsxname={this.props.jsxname} ref="el" jsxvalue={this.props.jsxvalue} onChange={this.handleChange.bind(this,{context:this})}>{this.props.children}</RadioGroup>
    }
}