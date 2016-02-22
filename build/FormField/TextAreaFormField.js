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
var assign = require('object-assign');

var TextAreaFormField = function (_FormField) {
    _inherits(TextAreaFormField, _FormField);

    function TextAreaFormField(props) {
        _classCallCheck(this, TextAreaFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TextAreaFormField).call(this, props));
    }

    _createClass(TextAreaFormField, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var me = this;
            var autoTrim = me.props.autoTrim;

            var value = e.currentTarget.value;
            if (autoTrim) {
                value = me.trim(value);
            }
            me.handleDataChange(value);
        }
    }, {
        key: 'trim',
        value: function trim(str) {
            return str.replace(/(^\s+|\s+$)/g, "");
        }
    }, {
        key: 'addSpecificClass',
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-textarea-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(e) {
            this.props.onFocus(e);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(e) {
            var me = this;
            var pass = true;
            if (me.props.validateOnBlur) {
                pass = me.doValidate();
            }
            me.props.onBlur(e, pass);
        }
    }, {
        key: 'renderField',
        value: function renderField() {
            var me = this;
            var mode = me.props.jsxmode || me.props.mode;
            if (mode == Constants.MODE.EDIT) {
                return React.createElement('textarea', {
                    disabled: me.props.jsxdisabled,
                    placeholder: me.props.jsxplaceholder,
                    className: 'kuma-textarea',
                    ref: 'root',
                    value: me.state.value || "",
                    onChange: me.handleChange.bind(me),
                    onFocus: me.handleFocus.bind(me),
                    onBlur: me.handleBlur.bind(me) });
            } else if (mode == Constants.MODE.VIEW) {
                return React.createElement(
                    'span',
                    null,
                    me.state.value
                );
            }
        }
    }]);

    return TextAreaFormField;
}(FormField);

TextAreaFormField.displayName = "TextAreaFormField";
TextAreaFormField.propTypes = assign({}, FormField.propTypes, {
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    validateOnBlur: React.PropTypes.bool,
    autoTrim: React.PropTypes.bool
});
TextAreaFormField.defaultProps = assign({}, FormField.defaultProps, {
    onBlur: function onBlur() {},
    onFocus: function onFocus() {},
    validateOnBlur: false
});
module.exports = TextAreaFormField;