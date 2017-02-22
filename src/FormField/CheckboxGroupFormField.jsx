const FormField = require('uxcore-form-field');
const Constants = require('uxcore-const');
const CheckboxGroup = require('uxcore-checkbox-group');
const React = require('react');

const Item = CheckboxGroup.Item;

class CheckboxGroupFormField extends FormField {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    const me = this;
    me.handleDataChange(value);
  }

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-checkbox-group-uxform-field`;
    }
    return me.props.jsxprefixCls;
  }

  renderField() {
    const me = this;
    const mode = me.props.jsxmode || me.props.mode;
    if (mode === Constants.MODE.EDIT) {
      return (
        <CheckboxGroup
          disabled={!!me.props.jsxdisabled}
          onChange={me.handleChange}
          value={me.state.value || []}
        >
          {me.props.children}
        </CheckboxGroup>
      );
    } else if (me.state.value instanceof Array) {
      let textArr = me.props.children.filter(
        child => me.state.value.indexOf(child.props.value) !== -1
      ).map(item => item.props.text);
      if (textArr.length === 0) {
        textArr = me.state.value;
      }
      return <span>{textArr.join(' ')}</span>;
    }
    return null;
  }
}

CheckboxGroupFormField.Item = Item;
CheckboxGroupFormField.propTypes = FormField.propTypes;
CheckboxGroupFormField.defaultProps = FormField.defaultProps;
CheckboxGroupFormField.displayName = 'CheckboxGroupFormField';

module.exports = CheckboxGroupFormField;
