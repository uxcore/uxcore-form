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
    test() {
        console.info("222test");
    }
    getValue() {
        console.log("222");
        return this.refs.el.getCheckedValue()
    }
    render() {
        console.log("222 render");
        let _mode;
        let className = classNames(this.props.bsStyle, this.props.className);
        if (this.props.mode==Constants.MODE.edit) {
            if(!!this.state.error) {
                _mode=<ul className="kuma-formfield-columns">
                        <li><RadioGroup jsxname={this.props.jsxname} ref="el" jsxvalue={this.props.jsxvalue}>{this.props.children}</RadioGroup></li>
                        <li className="kuma-formfield-tips">{this.props.tips}</li>
                        <li className="kuma-formfield-errorMsg">{this.state.errorMsg}</li>
                    </ul>
            }else {
                _mode=<ul className="kuma-formfield-columns"><li><RadioGroup jsxname={this.props.jsxname} ref="el" jsxvalue={this.props.jsxvalue}>{this.props.children}</RadioGroup></li></ul>
            }
        }else{
            _mode=<ul className="kuma-formfield-columns"><li><p>{this.props.value}</p></li></ul>
        }
        return (
            <div className={className}>
                <label className="kuma-formfield-label">{this.props.label}<i>{this.props.isRequire?"*":""}</i></label>
                {_mode}
            </div>
        );
    }
}