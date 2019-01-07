import FormField from 'uxcore-form-field';
import Constants from 'uxcore-const';
import CheckboxGroup from 'uxcore-checkbox-group';
import React from 'react';

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
    const splitter = ', \u00a0';
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
      const children = me.props.children instanceof Array ? me.props.children : [me.props.children];
      let textArr = children.filter(
        child => me.state.value.indexOf(child.props.value) !== -1
      ).map(item => item.props.text);
      if (textArr.length === 0) {
        textArr = me.state.value;
      }
      return <span>{textArr.join(splitter)}</span>;
    }
    return null;
  }
}

CheckboxGroupFormField.Item = Item;
CheckboxGroupFormField.propTypes = FormField.propTypes;
CheckboxGroupFormField.defaultProps = FormField.defaultProps;
CheckboxGroupFormField.displayName = 'CheckboxGroupFormField';

export default CheckboxGroupFormField;
