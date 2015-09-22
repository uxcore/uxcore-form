/**
 * Created by xy on 15/4/13.
 */
let FormField = require('./FormField');
let Constants = require("./Constants");
let RadioGroup = require('uxcore-radiogroup');
let Item = RadioGroup.Item;


class RadioGroupFormField extends FormField {
    constructor(props) {
        super(props);
    }
    handleChange(value) {
        let me = this;
        me.handleDataChange(value);
    }
    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-radio-group-form-field" ;
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
                    ref="el" 
                    key="radiogroup"
                    value={me.state.value} 
                    onChange={me.handleChange.bind(me)}>
                        {me.props.children}
                    </RadioGroup>);
        }
        else {
            arr.push(<span key="radiogroup">{me.state.value}</span>);
        }
        return arr;
    }
}

RadioGroupFormField.displayName = "RadioGroupFormField";
RadioGroupFormField.propTypes = FormField.propTypes;
RadioGroupFormField.defaultProps = FormField.defaultProps;
RadioGroupFormField.Item = Item;
module.exports = RadioGroupFormField;
