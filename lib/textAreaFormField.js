/**
 * Created by xy on 15/4/13.
 */
import React from 'react';
import FormField from './formField';
import Constants from "./constants";

export default class TextAreaFormField extends FormField{
    constructor(props) {
        super(props);
    }
    render() {
        let _mode;
        if (this.props.mode==Constants.MODE.edit) {
            _mode=<li><textarea  ref="el">{this.props.value}</textarea></li>
        }else{
            _mode=<li><p>{this.props.value}</p></li>
        }
        return (
            <li className={this.props.bsStyle}>
                <dl>
                <dt><label>{this.props.label}<i>{this.props.isRequire?"*":""}</i></label></dt>
                <dd><ul>{_mode} </ul></dd>
                </dl>
            </li>
        );
    }
}