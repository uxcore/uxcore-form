/**
 * Created by xy on 15/4/13.
 */
import React from 'react';
import FormField from './formField';
import Constants from "./constants";
import classNames from 'classnames';
import SelectField from 'uxcore-select';


export default class SelectFormField extends FormField{
    constructor(props) {
        super(props);
    }
    getValue() {
        return this.refs.el.getValue()
    }
    handleChange(objAux) {
        var value = objAux.context.getValue();
        this.props.handleDataChange(this, value);
        this.doValidate();
    }
    renderField() {
        return  <SelectField jsxname={this.props.jsxname} ref="el" jsxvalue={this.props.jsxvalue} onChange={this.handleChange.bind(this,{context:this})}>{this.props.children}</SelectField>
    }
}