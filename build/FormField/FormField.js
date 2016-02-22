"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Constants = require("uxcore-const");
var classnames = require("classnames");
var assign = require("object-assign");
var deepequal = require("deep-equal");

var FormField = function (_React$Component) {
    _inherits(FormField, _React$Component);

    function FormField(props) {
        _classCallCheck(this, FormField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormField).call(this, props));

        _this.state = {
            value: props.value,
            formatValue: _this.formatValue(props.value),
            error: false,
            errMsg: ''
        };
        return _this;
    }

    _createClass(FormField, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var me = this;
            if (!me.props.standalone) {
                me.props.attachFormField(me);
                me.props.handleDataChange(me, {
                    value: me.props.value,
                    pass: true
                }, true);
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var me = this;
            if (!me._isEqual(nextProps.value, me.props.value)) {
                me.handleDataChange(nextProps.value, true);
            }
        }
    }, {
        key: "_isEqual",
        value: function _isEqual(a, b) {
            return deepequal(a, b);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            var me = this;
            if (!me.props.standalone) {
                this.props.detachFormField(this);
            }
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.props.jsxname;
        }

        /*
         * Fired when field value changes，update form's state and then trigger re-render.
         * @param fromReset {boolean} if handleDataChange is invoked by form's resetValues,
         * doValidate should not be invoked.
         */

    }, {
        key: "handleDataChange",
        value: function handleDataChange(value, fromReset) {
            var me = this;
            me.setState({
                value: value,
                formatValue: me.formatValue(value),
                error: !!fromReset ? false : me.state.error,
                /*
                 * why set state fromReset? some field like editor cannot be reset in the common way
                 * so set this state to tell the field that you need to reset by yourself.
                 */
                fromReset: !!fromReset
            }, function () {
                var pass = true;
                // validateOnBlur only support InputFormField & TextAraeFormField now
                if (!fromReset && !me.props.standalone && !me.props.validateOnBlur) {
                    pass = me.doValidate();
                }
                !!me.props.handleDataChange && me.props.handleDataChange(me, {
                    value: value,
                    pass: pass
                });
            });
        }

        /**
         * @return {boolean} if validate pass, return true, or, return false
         * if no rule, it means validate pass.
         */

    }, {
        key: "doValidate",
        value: function doValidate(force) {
            var me = this;
            var instant = true;
            if ('instantValidate' in me.props) {
                instant = me.props.instantValidate;
            } else {
                instant = me.props.jsxinstant;
            }
            // if force or instant, validate should be done, but if there are not
            // jsxrules, validate cannot be done.
            if ((!!force || instant) && me.props.jsxrules) {
                var error = me.isDirty();
                me.setState({ error: error.isDirty, errMsg: error.errMsg });
                return !error.isDirty;
            } else {
                return true;
            }
        }

        /*
         * rule can be an object, containing errMsg & validator,
         * and rule can also be an array containing such objects.
         * this func will check them one by one, and return false
         * unless all rules pass
         */

    }, {
        key: "isDirty",
        value: function isDirty() {
            var me = this;
            var rules = me.props.jsxrules;
            var isDirty = false;
            var errMsg = "";
            if ((typeof rules === "undefined" ? "undefined" : _typeof(rules)) == "object" && !Array.isArray(rules)) {
                isDirty = !rules.validator(me.state.value);
                errMsg = rules.errMsg;
            } else if (Array.isArray(rules)) {
                for (var i = 0; i < rules.length; i++) {
                    isDirty = !rules[i].validator(me.state.value);
                    if (isDirty) {
                        errMsg = rules[i].errMsg;
                        break;
                    }
                }
            }
            return {
                isDirty: isDirty,
                errMsg: errMsg
            };
        }
    }, {
        key: "renderTips",
        value: function renderTips() {
            var me = this;
            var mode = me.props.jsxmode || me.props.mode;
            if (mode != Constants.MODE.EDIT) return;
            if (me.props.standalone && me.props.message && me.props.message.type == "tip") {
                return React.createElement(
                    "li",
                    { className: "kuma-uxform-tips" },
                    React.createElement("i", { className: "kuma-icon kuma-icon-information" }),
                    me.props.message.message
                );
            }
            if (!!this.props.jsxtips && !me.state.error) {
                return React.createElement(
                    "li",
                    { className: "kuma-uxform-tips" },
                    React.createElement("i", { className: "kuma-icon kuma-icon-information" }),
                    this.props.jsxtips
                );
            }
        }

        /*
         * You should rewrite this method，when you need to format the value as you concern.
         */

    }, {
        key: "formatValue",
        value: function formatValue(value) {
            return value;
        }

        /*
         * You should rewrite this method, when you are developing a new type of form field.
         */

    }, {
        key: "renderField",
        value: function renderField() {}
    }, {
        key: "renderErrorMsg",
        value: function renderErrorMsg() {
            var me = this;
            var mode = me.props.jsxmode || me.props.mode;
            if (mode != Constants.MODE.EDIT) return;
            if (me.props.standalone && me.props.message && me.props.message.type == "error") {
                return React.createElement(
                    "li",
                    { className: "kuma-uxform-errormsg" },
                    React.createElement("i", { className: "kuma-icon kuma-icon-error" }),
                    me.props.message.message
                );
            }
            if (!!me.state.error) {
                return React.createElement(
                    "li",
                    { className: "kuma-uxform-errormsg" },
                    React.createElement("i", { className: "kuma-icon kuma-icon-error" }),
                    me.state.errMsg
                );
            }
        }
    }, {
        key: "renderLabel",
        value: function renderLabel() {
            var me = this;
            var mode = me.props.jsxmode || me.props.mode;
            if (me.props.jsxshowLabel) {
                return React.createElement(
                    "label",
                    { className: "kuma-label" },
                    React.createElement(
                        "span",
                        { className: "required" },
                        me.props.required && mode == Constants.MODE.EDIT ? "* " : ""
                    ),
                    React.createElement("span", { className: "label-content", dangerouslySetInnerHTML: { __html: me.props.jsxlabel } })
                );
            }
        }
    }, {
        key: "addSpecificClass",
        value: function addSpecificClass(classname) {
            return this.props.jsxprefixCls;
        }
    }, {
        key: "render",
        value: function render() {
            var _classnames;

            var me = this;
            var specificCls = me.addSpecificClass();
            var mode = me.props.jsxmode || me.props.mode;

            return React.createElement(
                "div",
                { className: classnames((_classnames = {}, _defineProperty(_classnames, specificCls, true), _defineProperty(_classnames, me.props.className, !!me.props.className), _classnames)), style: assign({}, me.props.style, {
                        display: me.props.jsxshow ? "table" : "none"
                    }) },
                me.renderLabel(),
                React.createElement(
                    "ul",
                    { className: classnames({
                            "kuma-uxform-field-content": true,
                            "view-mode": mode == Constants.MODE.VIEW,
                            "edit-mode": mode == Constants.MODE.EDIT,
                            "has-error": !!me.state.error
                        }) },
                    React.createElement(
                        "li",
                        { className: "kuma-uxform-field-core" },
                        me.renderField()
                    ),
                    me.renderTips(),
                    me.renderErrorMsg()
                )
            );
        }
    }]);

    return FormField;
}(React.Component);

;

FormField.propTypes = {
    instantValidate: React.PropTypes.bool, // 是否立即校验
    jsxshow: React.PropTypes.bool,
    jsxmode: React.PropTypes.string,
    jsxshowLabel: React.PropTypes.bool,
    jsxprefixCls: React.PropTypes.string,
    jsxflex: React.PropTypes.number,
    jsxname: React.PropTypes.string.isRequired,
    jsxplaceholder: React.PropTypes.string,
    jsxlabel: React.PropTypes.string,
    jsxtips: React.PropTypes.string,
    jsxrules: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    standalone: React.PropTypes.bool,
    required: React.PropTypes.bool
};

FormField.defaultProps = {
    jsxshow: true, // 是否显示该块
    jsxshowLabel: true, // 是否展示 label
    jsxprefixCls: "kuma-uxform-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxname: "", // 表单字段
    jsxplaceholder: "", // 在未选值之前的占位符
    jsxlabel: "", // 左侧表单域标题
    jsxtips: "", // 提醒
    standalone: false, // 是否处于独立使用模式
    mode: Constants.MODE.EDIT,
    required: false
};

FormField.displayName = "FormField";

module.exports = FormField;