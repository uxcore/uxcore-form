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
    render() {
        let _mode;
        let className = classNames(this.props.jsxprefixCls, this.props.className);

        if (this.props.jsxmode==Constants.MODE.edit) {
            _mode=<li><textarea className="kuma-textarea" ref="el">{this.state.value}</textarea></li>
        }else{
            _mode=<li><p>{this.state.value}</p></li>
        }
        return (
            <div className={className}>
                <label className="kuma-label">{this.props.jsxtext}<i>{this.props.isRequire?"*":""}</i></label>
                <ul className="kuma-form-field">{_mode} </ul>
            </div>
        );
    }
}