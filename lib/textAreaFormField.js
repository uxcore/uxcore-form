/**
 * Created by xy on 15/4/13.
 */
import React from 'react';
import FormField from './formField';
import Constants from "./constants";
import classNames from 'classnames';

export default class TextAreaFormField extends FormField{
    
    constructor(props) {
        super(props);
    }

    renderField() {
        return  <textarea className="kuma-textarea" ref="el">{this.state.value}</textarea>
    }
}