let InputFormField = require('./InputFormField');
let Formatter = require("uxcore-formatter");
let assign = require('object-assign');

class NumberInputFormField extends InputFormField {
    constructor(props) {
        super(props);
    }

    formatValue(value) {
        if (value === undefined || value === null) return "";
        let me = this;
        value = value + "";
        if (me.props.jsxtype == "money") {
            if (value.match(/\.(\d+)/) && value.match(/\.(\d+)/)[1].length > me.props.fixedNum) {
                return Formatter.money(value, me.props.delimiter, me.props.fixedNum)
            }
            else {
                return Formatter.money(value, me.props.delimiter)
            }
        }
        else if (me.props.jsxtype == "cnmobile") {
            return Formatter.cnmobile(value, me.props.delimiter);
        }
        else if (me.props.jsxtype == "card") {
            return Formatter.card(value, me.props.delimiter);
        }
        else {
            return value;
        }
    }

    deFormatValue(value) {
        let me = this;
        if (me.props.jsxtype == "money" || me.props.jsxtype == "cnmobile" || me.props.jsxtype == "card") {
            return value.split(me.props.delimiter).join("");
        }
        else {
            return value;
        }
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-number-input-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

}

NumberInputFormField.displayName = "NumberInputFormField";
NumberInputFormField.propTypes = assign({}, InputFormField.propTypes, {
    jsxtype: React.PropTypes.string,
    delimiter: React.PropTypes.string,
    fixedNum: React.PropTypes.number
});
NumberInputFormField.defaultProps = assign({}, InputFormField.defaultProps, {
    jsxtype: '',
    delimiter: ' '
});

module.exports = NumberInputFormField;