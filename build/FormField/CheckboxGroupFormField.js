"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = require('./FormField');
var Constants = require("uxcore-const");
var CheckboxGroup = require("uxcore-checkbox-group");
var Item = CheckboxGroup.Item;

var CheckboxGroupFormField = function (_FormField) {
    _inherits(CheckboxGroupFormField, _FormField);

    function CheckboxGroupFormField(props) {
        _classCallCheck(this, CheckboxGroupFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxGroupFormField).call(this, props));
    }

    _createClass(CheckboxGroupFormField, [{
        key: "handleChange",
        value: function handleChange(value) {
            var me = this;
            me.handleDataChange(value);
        }
    }, {
        key: "addSpecificClass",
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-checkbox-group-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: "renderField",
        value: function renderField() {
            var me = this;
            var mode = me.props.jsxmode || me.props.mode;
            if (mode == Constants.MODE.EDIT) {
                return React.createElement(
                    CheckboxGroup,
                    { disabled: !!me.props.jsxdisabled, onChange: me.handleChange.bind(me), value: me.state.value || [] },
                    me.props.children
                );
            } else {
                if (me.state.value instanceof Array) {
                    var textArr = me.props.children.filter(function (child, index) {
                        return me.state.value.indexOf(child.props.value) != -1;
                    }).map(function (item, index) {
                        return item.props.text;
                    });
                    return React.createElement(
                        "span",
                        null,
                        textArr.join(" ")
                    );
                }
            }
        }
    }]);

    return CheckboxGroupFormField;
}(FormField);

CheckboxGroupFormField.Item = Item;
CheckboxGroupFormField.propTypes = FormField.propTypes;
CheckboxGroupFormField.defaultProps = FormField.defaultProps;
CheckboxGroupFormField.displayName = "CheckboxGroupFormField";

module.exports = CheckboxGroupFormField;