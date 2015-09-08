let FormField = require('./FormField');
let Constants = require("./Constants");
let CheckboxGroup = require("uxcore-checkbox-group");
let Item = CheckboxGroup.Item;

class CheckboxGroupFormField extends FormField {
    constructor(props) {
        super(props);
    }

    handleChange(value) {
        let me = this;
        me.setState({
            value: value
        });
        me.handleDataChange(value);
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-checkbox-group-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        return <CheckboxGroup onChange={me.handleChange.bind(me)} value={me.state.value}>
                    {me.props.children}
               </CheckboxGroup>
    }
}

CheckboxGroupFormField.Item = Item;
CheckboxGroupFormField.propTypes = FormField.propTypes;
CheckboxGroupFormField.defaultProps = FormField.defaultProps;
CheckboxGroupFormField.displayName = "CheckboxGroupFormField";

module.exports = CheckboxGroupFormField;