'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by xy on 15/4/13.
 */
var FormField = require('./FormField');
var Constants = require("uxcore-const");
var RadioGroup = require('uxcore-radiogroup');
var Item = RadioGroup.Item;

var RadioGroupFormField = function (_FormField) {
    _inherits(RadioGroupFormField, _FormField);

    function RadioGroupFormField(props) {
        _classCallCheck(this, RadioGroupFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioGroupFormField).call(this, props));
    }

    _createClass(RadioGroupFormField, [{
        key: 'handleChange',
        value: function handleChange(value) {
            var me = this;
            me.handleDataChange(value);
        }
    }, {
        key: 'addSpecificClass',
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-radio-group-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: 'renderField',
        value: function renderField() {
            var me = this;
            var arr = [];
            var mode = me.props.jsxmode || me.props.mode;
            if (mode == Constants.MODE.EDIT) {
                arr.push(React.createElement(
                    RadioGroup,
                    {
                        ref: 'el',
                        key: 'radiogroup',
                        value: me.state.value,
                        onChange: me.handleChange.bind(me) },
                    me.props.children
                ));
            } else {
                var text = me.props.children.filter(function (child, index) {
                    return child.props.value == me.state.value;
                });

                if (text.length) {
                    arr.push(React.createElement(
                        'span',
                        { key: 'radiogroup' },
                        text[0].props.text
                    ));
                }
            }
            return arr;
        }
    }]);

    return RadioGroupFormField;
}(FormField);

RadioGroupFormField.displayName = "RadioGroupFormField";
RadioGroupFormField.propTypes = FormField.propTypes;
RadioGroupFormField.defaultProps = FormField.defaultProps;
RadioGroupFormField.Item = Item;
module.exports = RadioGroupFormField;