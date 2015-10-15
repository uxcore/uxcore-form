let InputFormField = require('./InputFormField');
let assign = require('object-assign');

class NumberInputFormField extends InputFormField {
    constructor(props) {
        super(props);
    }

    formatValue(value) {
        if (!value) return "";
        let me = this;
        value = value + "";
        if (me.props.jsxtype == "money") {
            return value.replace(/(\d{3})(?!$)/g, function(match, $1) {
                return $1 + " ";
            });
        }
        else if (me.props.jsxtype == "cnmobile") {
            return value.replace(/^(\+?0?86)(?!$)/, "$1 ").replace(/(\d{4})(?!$)/g, "$1 ");
        }
        else if (me.props.jsxtype == "card") {
            return value.replace(/(\d{4})(?!$)/g, "$1 ");
        }
        else {
            return value;
        }
    }

    deFormatValue(value) {
        let me = this;
        if (me.props.jsxtype == "money" || me.props.jsxtype == "cnmobile" || me.props.jsxtype == "card") {
            return value.split(" ").join("");
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
    jsxtype: React.PropTypes.string
});
NumberInputFormField.defaultProps = assign({}, InputFormField.defaultProps, {
    jsxtype: ''
});

module.exports = NumberInputFormField;