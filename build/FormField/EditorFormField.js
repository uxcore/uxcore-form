"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = require('./FormField');
var Constants = require("uxcore-const");
var Tinymce = require("uxcore-tinymce");
var assign = require('object-assign');

var EditorFormField = function (_FormField) {
    _inherits(EditorFormField, _FormField);

    function EditorFormField(props) {
        _classCallCheck(this, EditorFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(EditorFormField).call(this, props));
    }

    _createClass(EditorFormField, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var me = this;
            if (!me._isEqual(nextProps.value, me.props.value)) {
                me.handleDataChange(nextProps.value, true);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var me = this;
            var prevMode = prevProps.jsxmode || prevProps.mode;
            var mode = me.props.jsxmode || me.props.mode;
            if (prevMode == Constants.MODE.VIEW && mode == Constants.MODE.EDIT) {
                me.refs.tinymce.resetValue(me.state.value);
            }
        }
    }, {
        key: "_isEqual",
        value: function _isEqual(a, b) {
            return JSON.stringify(a) == JSON.stringify(b);
        }
    }, {
        key: "handleChange",
        value: function handleChange(e, editor) {
            var me = this;
            me.handleDataChange(editor.getContent());
        }
    }, {
        key: "handleKeyup",
        value: function handleKeyup(e, editor) {
            var me = this;
            me.handleDataChange(editor.getContent());
        }
    }, {
        key: "addSpecificClass",
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-editor-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: "renderField",
        value: function renderField() {
            var me = this;
            var mode = me.props.jsxmode || me.props.mode;
            if (me.state.fromReset && mode == Constants.MODE.EDIT) {
                me.refs.tinymce.resetValue(me.props.jsxcontent);
            }
            if (mode == Constants.MODE.EDIT) {
                return React.createElement(Tinymce, { ref: "tinymce",
                    config: me.props.jsxconfig,
                    content: me.state.value,
                    onChange: me.handleChange.bind(me),
                    onKeyup: me.handleKeyup.bind(me) });
            } else {
                return React.createElement("span", { key: "text", dangerouslySetInnerHTML: { __html: me.state.value } });
            }
        }
    }]);

    return EditorFormField;
}(FormField);

EditorFormField.propTypes = assign({}, FormField.propTypes);
EditorFormField.defaultProps = assign({}, FormField.defaultProps, {
    jsxconfig: {},
    jsxcontent: ""
});
EditorFormField.displayName = "EditorFormField";

module.exports = EditorFormField;