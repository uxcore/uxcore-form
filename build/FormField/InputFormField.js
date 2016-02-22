'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = require('./FormField');
var Constants = require("uxcore-const");
var classnames = require('classnames');
var assign = require('object-assign');

var FormCount = function (_React$Component) {
    _inherits(FormCount, _React$Component);

    function FormCount(props) {
        _classCallCheck(this, FormCount);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FormCount).call(this, props));
    }

    _createClass(FormCount, [{
        key: 'render',
        value: function render() {
            var me = this;
            return React.createElement(
                'div',
                { className: 'kuma-uxform-count' },
                me.props.length + "/" + me.props.total
            );
        }
    }]);

    return FormCount;
}(React.Component);

FormCount.defaultProps = {};
FormCount.propTypes = {
    length: React.PropTypes.number,
    total: React.PropTypes.number
};

FormCount.displayName = "FormCount";

var LeftAddon = function (_React$Component2) {
    _inherits(LeftAddon, _React$Component2);

    function LeftAddon(props) {
        _classCallCheck(this, LeftAddon);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftAddon).call(this, props));
    }

    _createClass(LeftAddon, [{
        key: 'render',
        value: function render() {
            var me = this;
            return React.createElement(
                'div',
                { className: classnames({
                        "kuma-uxform-left-icon": true,
                        "kuma-uxform-left-icon-focus": !!me.props.focus
                    }) },
                me.props.children
            );
        }
    }]);

    return LeftAddon;
}(React.Component);

LeftAddon.defaultProps = {};
LeftAddon.propTypes = {};
LeftAddon.displayName = "LeftAddon";

var RightAddon = function (_React$Component3) {
    _inherits(RightAddon, _React$Component3);

    function RightAddon(props) {
        _classCallCheck(this, RightAddon);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RightAddon).call(this, props));
    }

    _createClass(RightAddon, [{
        key: 'render',
        value: function render() {
            var me = this;
            return React.createElement(
                'div',
                { className: 'kuma-uxform-right-icon ' },
                me.props.children
            );
        }
    }]);

    return RightAddon;
}(React.Component);

RightAddon.defaultProps = {};
RightAddon.propTypes = {};
RightAddon.displayName = "RightAddon";

/**
 * extend FormField, rewrite renderField method
 */

var InputFormField = function (_FormField) {
    _inherits(InputFormField, _FormField);

    function InputFormField(props) {
        _classCallCheck(this, InputFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(InputFormField).call(this, props));
    }

    _createClass(InputFormField, [{
        key: 'getValue',
        value: function getValue() {
            return this.refs.root.getDOMNode().value;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var me = this;
            var autoTrim = me.props.autoTrim;

            var value = e.currentTarget.value;
            if (autoTrim) {
                value = me.trim(value);
            }
            me.handleDataChange(me.deFormatValue(value));
        }
    }, {
        key: 'trim',
        value: function trim(str) {
            return str.replace(/(^\s+|\s+$)/g, "");
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(e) {
            this.setState({
                focus: true
            });
            this.props.onFocus(e);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(e) {
            var me = this;
            me.setState({
                focus: false
            });
            var pass = true;
            if (me.props.validateOnBlur) {
                pass = me.doValidate();
            }
            me.props.onBlur(e, pass);
        }
    }, {
        key: 'deFormatValue',
        value: function deFormatValue(value) {
            return value;
        }
    }, {
        key: 'addSpecificClass',
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-input-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: 'getCount',
        value: function getCount() {
            var me = this;
            var children = me.props.children;
            var element = undefined;
            React.Children.map(children, function (child) {
                if (child && typeof child.type == 'function' && child.type.displayName == 'FormCount') {
                    element = child;
                }
            });
            if (!!element) {
                var total = element.props.total;
                var Count = React.cloneElement(element, {
                    length: !!me.state.value ? me.state.value.length : 0,
                    key: "count"
                });

                return {
                    element: Count,
                    total: total
                };
            }
        }
    }, {
        key: 'renderLeftAddon',
        value: function renderLeftAddon() {
            var me = this;
            var children = me.props.children;
            var element = undefined;
            React.Children.map(children, function (child) {
                if (child && typeof child.type == 'function' && child.type.displayName == 'LeftAddon') {
                    element = child;
                }
            });
            if (!!element) {
                return React.cloneElement(element, {
                    focus: !!me.state.focus,
                    key: "left"
                });
            }
        }
    }, {
        key: 'renderRightAddon',
        value: function renderRightAddon() {
            var me = this;
            var children = me.props.children;
            var element = undefined;
            React.Children.map(children, function (child) {
                if (child && typeof child.type == 'function' && child.type.displayName == 'RightAddon') {
                    element = child;
                }
            });

            if (!!element) {
                return React.cloneElement(element, {
                    key: "right"
                });
            }
        }
    }, {
        key: 'renderField',
        value: function renderField() {
            var me = this;
            var arr = [];
            var mode = me.props.jsxmode || me.props.mode;
            var count = me.getCount();
            var leftAddon = me.renderLeftAddon();
            var rightAddon = me.renderRightAddon();
            var children = me.props.children;
            if (mode == Constants.MODE.EDIT) {
                var otherOptions = {};
                // if (!!count) {
                //     otherOptions.maxLength = count.total + "";
                // }
                if (!!leftAddon) {
                    arr.push(leftAddon);
                }
                arr.push(React.createElement('input', _extends({
                    className: classnames({
                        "kuma-input": true,
                        'kuma-uxform-input-has-right': !!count || !!rightAddon,
                        "kuma-uxform-input-has-left": !!leftAddon
                    }),
                    ref: 'root',
                    type: 'text',
                    key: 'input',
                    placeholder: me.props.jsxplaceholder,
                    disabled: me.props.jsxdisabled == "disabled" || me.props.jsxdisabled == true ? "disabled" : "",
                    name: me.props.key,
                    value: me.state.formatValue,
                    onFocus: me.handleFocus.bind(me),
                    onBlur: me.handleBlur.bind(me),
                    onChange: me.handleChange.bind(me)
                }, otherOptions)));

                if (!!rightAddon) {
                    arr.push(rightAddon);
                } else if (!!count) {
                    arr.push(count.element);
                }
            } else if (mode == Constants.MODE.VIEW) {
                arr.push(React.createElement(
                    'span',
                    { key: 'text' },
                    me.state.formatValue
                ));
            }
            return arr;
        }
    }]);

    return InputFormField;
}(FormField);

InputFormField.Count = FormCount;
InputFormField.LeftAddon = LeftAddon;
InputFormField.RightAddon = RightAddon;
InputFormField.propTypes = assign({}, FormField.propTypes, {
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    validateOnBlur: React.PropTypes.bool,
    autoTrim: React.PropTypes.bool
});
InputFormField.defaultProps = assign({}, FormField.defaultProps, {
    onBlur: function onBlur() {},
    onFocus: function onFocus() {},
    validateOnBlur: false
});
InputFormField.displayName = "InputFormField";
module.exports = InputFormField;