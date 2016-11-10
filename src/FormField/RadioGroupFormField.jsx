/**
 * Created by xy on 15/4/13.
 */
const React = require('react');
const FormField = require('uxcore-form-field');
const Constants = require('uxcore-const');
const RadioGroup = require('uxcore-radiogroup');

const Item = RadioGroup.Item;


class RadioGroupFormField extends FormField {
  handleChange(value) {
    const me = this;
    me.handleDataChange(value);
  }
  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-radio-group-uxform-field`;
    }
    else {
      return me.props.jsxprefixCls;
    }
  }
  renderField() {
    const me = this;
    const arr = [];
    const mode = me.props.jsxmode || me.props.mode;
    if (mode === Constants.MODE.EDIT) {
      arr.push(<RadioGroup
        ref="el"
        key="radiogroup"
        value={me.state.value}
        onChange={me.handleChange.bind(me)}
      >
        {me.props.children}
      </RadioGroup>);
    }
    else {
      const text = me.props.children.filter((child) => {
        return child.props.value == me.state.value;
      });

      if (text.length) {
        arr.push(<span key="radiogroup">{text[0].props.text}</span>);
      }
    }
    return arr;
  }
}

RadioGroupFormField.displayName = 'RadioGroupFormField';
RadioGroupFormField.propTypes = FormField.propTypes;
RadioGroupFormField.defaultProps = FormField.defaultProps;
RadioGroupFormField.Item = Item;
module.exports = RadioGroupFormField;
