'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputFormField = require('./InputFormField');
var Formatter = require("uxcore-formatter");
var assign = require('object-assign');

var NumberInputFormField = function (_InputFormField) {
    _inherits(NumberInputFormField, _InputFormField);

    function NumberInputFormField(props) {
        _classCallCheck(this, NumberInputFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberInputFormField).call(this, props));
    }

    _createClass(NumberInputFormField, [{
        key: 'formatValue',
        value: function formatValue(value) {
            if (value === undefined || value === null) return "";
            var me = this;
            value = value + "";
            if (me.props.jsxtype == "money") {
                if (value.match(/\.(\d+)/) && value.match(/\.(\d+)/)[1].length > me.props.fixedNum) {
                    return Formatter.money(value, me.props.delimiter, me.props.fixedNum);
                } else {
                    return Formatter.money(value, me.props.delimiter);
                }
            } else if (me.props.jsxtype == "cnmobile") {
                return Formatter.cnmobile(value, me.props.delimiter);
            } else if (me.props.jsxtype == "card") {
                return Formatter.card(value, me.props.delimiter);
            } else {
                return value;
            }
        }
    }, {
        key: 'deFormatValue',
        value: function deFormatValue(value) {
            var me = this;
            if (me.props.jsxtype == "money" || me.props.jsxtype == "cnmobile" || me.props.jsxtype == "card") {
                return value.split(me.props.delimiter).join("");
            } else {
                return value;
            }
        }
    }, {
        key: 'addSpecificClass',
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-number-input-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }]);

    return NumberInputFormField;
}(InputFormField);

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