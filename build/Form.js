"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Form Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

var FormRow = require("./FormRow");
var FormRowTitle = require("./FormRowTitle");
var FormField = require("./FormField/FormField");
var TextAreaFormField = require("./FormField/TextAreaFormField");
var InputFormField = require("./FormField/InputFormField");
var RadioGroupFormField = require("./FormField/RadioGroupFormField");
var SelectFormField = require("./FormField/SelectFormField");
var NumberInputFormField = require('./FormField/NumberInputFormField');
var DateFormField = require('./FormField/DateFormField');
var CheckboxGroupFormField = require("./FormField/CheckboxGroupFormField");
var CascadeSelectFormField = require("./FormField/CascadeSelectFormField");
var OtherFormField = require("./FormField/OtherFormField");
var ButtonGroupFormField = require("./FormField/ButtonGroupFormField");
var EditorFormField = require("./FormField/EditorFormField");
// let MentionFormField = require("./FormField/MentionFormField");
var Constants = require("uxcore-const");
var Validators = require("./Validators");

var classnames = require('classnames');
var assign = require('object-assign');
var deepcopy = require('deepcopy');

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

        _this.fields = {};
        _this.errors = {};
        _this.data = {};
        _this.state = {};
        return _this;
    }

    _createClass(Form, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var me = this;
        }
    }, {
        key: "_copy",
        value: function _copy(a) {
            return deepcopy(a);
        }
    }, {
        key: "attachFormField",
        value: function attachFormField(field) {
            var name = field.getName();
            if (!name) {
                console.warn("Each field needs a name to identify itself");
            } else {
                this.fields[name] = field;
            }
        }
    }, {
        key: "detachFormField",
        value: function detachFormField(field) {
            var name = field.getName();
            delete this.fields[name];
            delete this.data[name];
        }
    }, {
        key: "handleDataChange",
        value: function handleDataChange(field, fieldData, fromMount) {
            var me = this;
            me.data[field.props.jsxname] = fieldData.value;
            if (!fromMount) {
                me.props.jsxonChange(me._copy(me.data), field.props.jsxname, fieldData.pass);
            }
        }
    }, {
        key: "getValues",
        value: function getValues(force) {
            var me = this;
            var _flag = me.doValidate(force);
            return {
                values: me._copy(me.data),
                pass: _flag
            };
        }
    }, {
        key: "resetValues",
        value: function resetValues() {
            var me = this;
            var keys = Object.keys(me.fields);
            var data = me.props.jsxvalues || me.props.passedData || {};
            for (var i = 0; i < keys.length; i++) {
                me.fields[keys[i]].handleDataChange(data[keys[i]] == undefined ? null : data[keys[i]], true);
            }
        }

        /*
         * set Form values manually
         */

    }, {
        key: "setValues",
        value: function setValues(data) {
            if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != 'object') return;
            var me = this;
            var keys = Object.keys(data);
            for (var i = 0; i < keys.length; i++) {
                me.fields[keys[i]].handleDataChange(data[keys[i]] == undefined ? null : data[keys[i]], true);
            }
        }
    }, {
        key: "doValidate",
        value: function doValidate(force) {
            var me = this;
            var pass = true;
            var keys = Object.keys(me.fields);
            for (var i = 0; i < keys.length; i++) {
                var itemPass = me.fields[keys[i]].doValidate(force);
                me.errors[keys[i]] = !itemPass;
                if (!itemPass) {
                    pass = false;
                }
            }
            return pass;
        }
    }, {
        key: "isDirty",
        value: function isDirty() {
            return !this.doValidate();
        }

        /*
         * 统一数据流，所有的 props，通过 Form -> FormRow -> FormField 向下传递，如果有的
         * 子元素是 FormField，则自动在他的外面包一层 FormRow。
         * @param {React Elements Array} children this.props.children
         */

    }, {
        key: "_processChild",
        value: function _processChild(children) {
            var length = React.Children.count(children);
            var elements = [];
            if (length == 0) {
                console.warn("FORM: You must pass children to the form component");
                return false;
            }

            React.Children.forEach(children, function (child, index) {
                // 如果是自己添加的 DOM 直接抛弃
                if (typeof child.type == 'function') {
                    if (/FormField/.test(child.type.displayName)) {
                        elements.push(React.createElement(
                            FormRow,
                            null,
                            child
                        ));
                    } else if (/FormRow/.test(child.type.displayName)) {
                        elements.push(child);
                    }
                }
            });

            return elements;
        }
    }, {
        key: "render",
        value: function render() {
            var _classnames;

            var me = this;
            var elements = me._processChild(me.props.children);

            return React.createElement(
                "div",
                { className: classnames((_classnames = {}, _defineProperty(_classnames, me.props.jsxprefixCls, true), _defineProperty(_classnames, me.props.className, !!me.props.className), _defineProperty(_classnames, "kuma-uxform-edit-mode", me.props.jsxmode == Constants.MODE.EDIT), _defineProperty(_classnames, "kuma-uxform-view-mode", me.props.jsxmode == Constants.MODE.VIEW), _classnames)) },
                !!elements && elements.map(function (child, index) {
                    return React.cloneElement(child, {
                        mode: me.props.jsxmode,
                        instantValidate: me.props.instantValidate,
                        data: deepcopy(me.props.jsxvalues || me.props.passedData || {}),
                        key: index,
                        attachFormField: me.attachFormField.bind(me),
                        detachFormField: me.detachFormField.bind(me),
                        handleDataChange: me.handleDataChange.bind(me),
                        getValues: me.getValues.bind(me),
                        resetValues: me.resetValues.bind(me)
                    });
                })
            );
        }
    }]);

    return Form;
}(React.Component);

// 以 Form 的插件的形式给出


Form.FormRow = FormRow;
Form.FormRowTitle = FormRowTitle;
Form.FormField = FormField;
Form.TextAreaFormField = TextAreaFormField;
Form.InputFormField = InputFormField;
Form.RadioGroupFormField = RadioGroupFormField;
Form.SelectFormField = SelectFormField;
Form.NumberInputFormField = NumberInputFormField;
Form.DateFormField = DateFormField;
Form.CheckboxGroupFormField = CheckboxGroupFormField;
Form.CascadeSelectFormField = CascadeSelectFormField;
Form.OtherFormField = OtherFormField;
Form.ButtonGroupFormField = ButtonGroupFormField;
Form.EditorFormField = EditorFormField;
// Form.MentionFormField = MentionFormField;
Form.Constants = Constants;
Form.Validators = Validators;

Form.defaultProps = {
    jsxprefixCls: "kuma-uxform",
    jsxmode: Constants.MODE.EDIT,
    instantValidate: true,
    jsxonChange: function jsxonChange() {}
};

// http://facebook.github.io/react/docs/reusable-components.html
Form.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxmode: React.PropTypes.string,
    jsxvalues: React.PropTypes.object,
    instantValidate: React.PropTypes.bool,
    jsxonChange: React.PropTypes.func
};

Form.displayName = Form;

module.exports = Form;