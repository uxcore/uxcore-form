/**
 * Created by xy on 15/4/13.
 */
import React from 'react';

import FormField from 'uxcore-form-field';
import Constants from 'uxcore-const';
import RadioGroup from 'uxcore-radiogroup';

const Item = RadioGroup.Item;


class RadioGroupFormField extends FormField {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const me = this;
    me.handleDataChange(value);
  }
  /* eslint-disable class-methods-use-this */
  addSpecificClass() {
    return 'kuma-radio-group-uxform-field';
  }
  /* eslint-enable class-methods-use-this */


  renderField() {
    const me = this;
    const arr = [];
    const mode = me.props.jsxmode || me.props.mode;
    const viewModePlaceholder = me.props.viewModePlaceholder || '--';
    if (mode === Constants.MODE.EDIT) {
      arr.push(<RadioGroup
        disabled={me.props.jsxdisabled}
        key="radiogroup"
        value={me.state.value}
        onChange={me.handleChange}
      >
        {me.props.children}
      </RadioGroup>);
    } else {
      const children = me.props.children instanceof Array ? me.props.children : [me.props.children];
      const text = children.filter(child => child.props.value === me.state.value);
      if (text.length) {
        arr.push(<span key="radiogroup">{text[0].props.text || viewModePlaceholder}</span>);
      } else {
        arr.push(<span key="radiogroup">{me.state.value || viewModePlaceholder}</span>);
      }
    }
    return arr;
  }
}

RadioGroupFormField.displayName = 'RadioGroupFormField';
RadioGroupFormField.propTypes = FormField.propTypes;
RadioGroupFormField.defaultProps = FormField.defaultProps;
RadioGroupFormField.Item = Item;
export default RadioGroupFormField;
