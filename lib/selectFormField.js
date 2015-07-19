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
    render() {
        let _mode, self=this;
        let className = classNames(this.props.jsxprefixCls, this.props.className);
        if (this.props.jsxmode==Constants.MODE.edit) {
            if(!!this.state.error) {
                _mode=<ul className="kuma-form-field">
                        <li><SelectField jsxname={this.props.jsxname} ref="el" jsxvalue={this.props.jsxvalue} onChange={this.handleChange.bind(this,{context:this})}>{this.props.children}</SelectField></li>
                        <li className="kuma-form-tips">{this.props.jsxtips}</li>
                        <li className="kuma-form-errormsg">{this.state.errorMsg}</li>
                    </ul>
            }else {
                _mode=<ul className="kuma-form-field"><li><SelectField jsxname={this.props.jsxname} ref="el" jsxvalue={this.props.jsxvalue} onChange={this.handleChange.bind(this,{context:this})}>{this.props.children}</SelectField></li></ul>
            }
        }else{
            this.props.jsxvalue=this.getValue();
            _mode=<ul className="kuma-form-field"><li><p>{this.props.jsxvalue}</p></li></ul>
        }
        return (
            <div className={className}>
                <label className="kuma-label">{this.props.jsxtext}<i>{this.props.isRequire?"*":""}</i></label>
                {_mode}
            </div>
        );
    }
}