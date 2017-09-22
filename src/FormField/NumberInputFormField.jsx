import React from 'react';
import InputFormField from 'uxcore-input-form-field';
import Formatter from 'uxcore-formatter';
import assign from 'object-assign';

const trim = str => str.replace(/(^\s+|\s+$)/g, '');

class NumberInputFormField extends InputFormField {

  handleChange(e) {
    const me = this;
    const { autoTrim } = me.props;
    let value = e.currentTarget.value;
    if (autoTrim) {
      value = trim(value);
    }
    value = value.replace(/[^\d\.\-]/g, '');
    me.handleDataChange(me.deFormatValue(value));
  }

  handleBlur(e) {
    const me = this;
    me.setState({
      focus: false,
    });
    let pass = true;
    if (me.props.validateOnBlur) {
      pass = me.doValidate();
    }
    me.props.onBlur(e, pass);
  }

  formatValue(value) {
    if (value === undefined || value === null) return '';
    const me = this;
    const newValue = `${value}`;
    if (me.props.jsxtype === 'money') {
      if (newValue.match(/\.(\d+)/) && newValue.match(/\.(\d+)/)[1].length > me.props.fixedNum) {
        return Formatter.money(newValue, me.props.delimiter, me.props.fixedNum);
      }
      return Formatter.money(newValue, me.props.delimiter);
    } else if (me.props.jsxtype === 'cnmobile') {
      return Formatter.cnmobile(newValue, me.props.delimiter);
    } else if (me.props.jsxtype === 'card') {
      return Formatter.card(newValue, me.props.delimiter);
    }
    return newValue;
  }

  deFormatValue(value) {
    const me = this;
    if (me.props.jsxtype === 'money' || me.props.jsxtype === 'cnmobile' || me.props.jsxtype === 'card') {
      return value.split(me.props.delimiter).join('');
    }
    return value;
  }

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-number-input-uxform-field`;
    }
    return me.props.jsxprefixCls;
  }

}

NumberInputFormField.displayName = 'NumberInputFormField';
NumberInputFormField.propTypes = assign({}, InputFormField.propTypes, {
  jsxtype: React.PropTypes.string,
  delimiter: React.PropTypes.string,
  fixedNum: React.PropTypes.number,
  formatValueOnBlur: React.PropTypes.bool,
});
NumberInputFormField.defaultProps = assign({}, InputFormField.defaultProps, {
  jsxtype: '',
  delimiter: ' ',
  formatValueOnBlur: false,
});

export default NumberInputFormField;
