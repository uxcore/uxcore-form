const React = require('react');
const InputFormField = require('uxcore-input-form-field');
const Formatter = require('uxcore-formatter');
const assign = require('object-assign');

class NumberInputFormField extends InputFormField {
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
});
NumberInputFormField.defaultProps = assign({}, InputFormField.defaultProps, {
  jsxtype: '',
  delimiter: ' ',
});

module.exports = NumberInputFormField;
