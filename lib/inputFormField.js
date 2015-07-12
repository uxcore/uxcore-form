import React from 'react';
import FormField from './formField';
import Constants from "./constants";
import classNames from 'classnames';


/**
 *  1:  每个field需要单独的validate, 这样才能保证单个的field输入时候的validate, 使用state.error来决定验证是否通过，是否显示
 *      error信息
 *  2:  Form的save Action，需要对每个field做validate, 如果验证通过，保存成功后，mode 还需要改变
 *  3:  刚开始的纠结点在，item2 会重新render所有form field, 感觉是要render 2次，一次在validate的时候，一次在save后，改变mode
 *      但仔细想，这两个不可能同时发生
 **/
export default class InputFormField extends FormField{
    constructor(props) {
        super(props);
    }
    getInitialState() {
        return {
            value: this.props.value,
            error: false,
            required: this.props.rules && this.props.rules.required? this.props.rules.required:false,
            errorMsg: this.props.rules && this.props.rules.message? this.props.rules.message:this.props.errorMsg
        };
    }
    handleChange(e) {
        var value = e.target ? e.target.value : e;
        this.props.handleInputChange(this, value);
        this.doValidate();
    }
    
    render() {
        let _mode;
        let className = classNames(this.props.bsStyle, this.props.className);

        if (this.props.mode==Constants.MODE.edit) {
            if(!!this.state.error) {
                _mode=<ul className="kuma-form-field"><li><input className="kuma-input" name={this.props.key} type="text" ref="el" value={this.state.value} onChange={this.handleChange.bind(this)}/></li><li className="kuma-form-tips">{this.props.tips}</li><li className="kuma-form-errormsg">{this.state.errorMsg}</li></ul>
            }else {
                _mode=<ul className="kuma-form-field"><li><input  className="kuma-input" name={this.props.key} type="text" ref="el" value={this.state.value} onChange={this.handleChange.bind(this)}/></li><li className="kuma-form-tips">{this.props.tips}</li></ul>
            }
        }else{
            _mode=<ul className="kuma-form-field"><li><span>{this.state.value}</span></li></ul>
        }
        return (
            <div className={className}>
                <label className="kuma-label">{this.props.label}<i>{this.state.required?"*":""}</i></label>
                {_mode}
            </div>
        );
    }
}