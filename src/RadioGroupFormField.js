/**
 * Created by xy on 15/4/13.
 */
let FormField = require('./FormField');
let Constants = require("./Constants");
let RadioGroup = require('uxcore-radiogroup');


class RadioGroupFormField extends FormField {
    constructor(props) {
        super(props);
    }
    getValue() {
        return this.refs.el.getCheckedValue();
    }
    handleChange() {
        let me = this;
        let value = me.getValue();
        me.props.handleDataChange(this, value);
    }
    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-radiogroup-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }
    renderField() {
        let me = this;
        let arr = [];
        if (me.props.mode == Constants.MODE.EDIT) {
            arr.push(<RadioGroup 
                    jsxname={me.props.jsxname} 
                    ref="el" 
                    key="radiogroup"
                    jsxvalue={me.props.value} 
                    onChange={me.handleChange.bind(me)}>
                        {me.props.children}
                    </RadioGroup>);
        }
        else {
            arr.push(<span>{this.state.value}</span>);
        }
        return arr;
    }
}

RadioGroupFormField.displayName = "RadioGroupFormField";
module.exports = RadioGroupFormField;
