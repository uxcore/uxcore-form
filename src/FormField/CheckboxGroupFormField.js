let FormField = require('./FormField');
let Constants = require("../Constants");
let CheckboxGroup = require("uxcore-checkbox-group");
let Item = CheckboxGroup.Item;

class CheckboxGroupFormField extends FormField {
    constructor(props) {
        super(props);
    }

    handleChange(value) {
        let me = this;
        me.handleDataChange(value);
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-checkbox-group-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        if (me.props.mode == Constants.MODE.EDIT) {
            return <CheckboxGroup onChange={me.handleChange.bind(me)} value={me.state.value || []}>
                        {me.props.children}
                   </CheckboxGroup>
        }
        else {
            if (me.state.value instanceof Array) {
                let textArr = me.props.children.filter((child, index) => {
                    return me.state.value.indexOf(child.props.value) != -1
                }).map((item, index) => {
                    return item.props.text;
                });
                return <span>{textArr.join(" ")}</span>
            }
        }
    }
}

CheckboxGroupFormField.Item = Item;
CheckboxGroupFormField.propTypes = FormField.propTypes;
CheckboxGroupFormField.defaultProps = FormField.defaultProps;
CheckboxGroupFormField.displayName = "CheckboxGroupFormField";

module.exports = CheckboxGroupFormField;