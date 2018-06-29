import InputFormField from 'uxcore-input-form-field';
import Formatter from 'uxcore-formatter';
import assign from 'object-assign';
import PropTypes from 'prop-types';

const trim = str => str.replace(/(^\s+|\s+$)/g, '');

class NumberInputFormField extends InputFormField {
  handleChange(e) {
    const me = this;
    const { autoTrim } = me.props;
    let value = e.currentTarget.value;
    value = value.replace(/[^\d.-]/g, '');

    if (autoTrim) {
      me.clearTimer();
      me.timer = setTimeout(() => {
        value = trim(value);
        me.handleDataChange(me.deFormatValue(value));
      }, 500);
    }
    me.handleDataChange(me.deFormatValue(value));
  }

  handleBlur(e) {
    super.handleBlur(e);
    const { formatOnBlur } = this.props;
    if (formatOnBlur) {
      const value = e.currentTarget.value;
      const formatedVale = this.deFormatValue(this.formatValueOnBlur(this.deFormatValue(value)));
      this.handleDataChange(formatedVale);
    }
  }

  formatValueOnBlur(value) {
    if (value === undefined || value === null || value === '') return '';
    const me = this;
    const newValue = `${value}`;
    if (me.props.jsxtype === 'money') {
      return Formatter.money(newValue, me.props.delimiter, me.props.fixedNum);
    } else if (me.props.jsxtype === 'cnmobile') {
      return Formatter.cnmobile(newValue, me.props.delimiter);
    } else if (me.props.jsxtype === 'card') {
      return Formatter.card(newValue, me.props.delimiter);
    }
    return newValue;
  }

  formatValue(value) {
    if (value === undefined || value === null || value === '') return '';
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

  /* eslint-disable class-methods-use-this */
  addSpecificClass() {
    return 'kuma-number-input-uxform-field';
  }
  /* eslint-disable class-methods-use-this */
}

NumberInputFormField.displayName = 'NumberInputFormField';
NumberInputFormField.propTypes = assign({}, InputFormField.propTypes, {
  jsxtype: PropTypes.string,
  delimiter: PropTypes.string,
  fixedNum: PropTypes.number,
  formatOnBlur: PropTypes.bool,
});
NumberInputFormField.defaultProps = assign({}, InputFormField.defaultProps, {
  jsxtype: '',
  delimiter: ' ',
  formatOnBlur: false,
});

export default NumberInputFormField;
