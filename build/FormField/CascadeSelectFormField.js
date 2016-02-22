'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = require('./FormField');
var Constants = require("uxcore-const");
var Select = require('uxcore-select2');
var Option = Select.Option;

var assign = require('object-assign');
var update = React.addons.update;

var CascadeSelectFormField = function (_FormField) {
    _inherits(CascadeSelectFormField, _FormField);

    function CascadeSelectFormField(props) {
        _classCallCheck(this, CascadeSelectFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CascadeSelectFormField).call(this, props));
    }

    _createClass(CascadeSelectFormField, [{
        key: 'getDataLength',
        value: function getDataLength() {
            var me = this;
            return me.props.jsxdata.length;
        }
    }, {
        key: 'handleChange',
        value: function handleChange(i, value) {
            var me = this;
            var values = update(me.state.value, {}) || [];
            if (!!values[i]) {
                values = values.slice(0, i);
                values.push(value);
            } else {
                values[i] = value;
            }
            me.handleDataChange(values);
        }
    }, {
        key: 'addSpecificClass',
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-cascade-select-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: 'renderField',
        value: function renderField() {
            var me = this;
            var length = me.getDataLength();
            var arr = [];
            var data = {};
            var mode = me.props.jsxmode || me.props.mode;
            if (mode == Constants.MODE.EDIT) {
                var _ret = function () {
                    try {
                        data = me.props.jsxdata.contents;
                    } catch (e) {
                        console.warn(e.message);
                        return {
                            v: undefined
                        };
                    }

                    /*
                     * 如果 value 存在相应的值，则填充下一级的选择，
                     * 如果 value 不存在，则填充空数组，
                     * 如果 data 中不包含 contents，则证明级联选择生成已结束，则跳出循环
                     */
                    var stateValue = me.state.value || []; // 预防 value 是 undefined 的情况

                    var _loop = function _loop(i) {
                        var options = data.map(function (item, index) {
                            return React.createElement(
                                Option,
                                { key: index, value: item.value },
                                item.text
                            );
                        });

                        var selectOptions = {
                            ref: "el",
                            key: "select",
                            optionLabelProp: "children",
                            style: me.props.jsxstyle,
                            showSearch: me.props.jsxshowSearch,
                            placeholder: me.props.jsxplaceholder
                        };
                        selectOptions.onChange = me.handleChange.bind(me, i);
                        selectOptions.value = stateValue[i] || null;
                        if (i != 0) {
                            arr.push(React.createElement(
                                'span',
                                { key: "split" + i, className: 'kuma-uxform-split' },
                                '-'
                            ));
                        }
                        arr.push(React.createElement(
                            Select,
                            _extends({}, selectOptions, { key: i }),
                            options
                        ));
                        if (!!stateValue[i]) {
                            data = data.filter(function (item) {
                                return item.value == stateValue[i];
                            })[0];
                            data = data.contents;
                            if (!data) return 'break';
                        } else {
                            data = [];
                        }
                    };

                    for (var i = 0; i < length; i++) {
                        var _ret2 = _loop(i);

                        if (_ret2 === 'break') break;
                    }
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            } else if (mode == Constants.MODE.VIEW) {
                if (me.state.value instanceof Array) {
                    (function () {
                        var data = me.props.jsxdata;
                        var textArr = me.state.value.map(function (item, index) {
                            data = data.contents.filter(function (ele, i) {
                                return ele.value == item;
                            })[0];
                            return data.text;
                        });
                        arr.push(React.createElement(
                            'span',
                            { key: 'cascade' },
                            textArr.join(" ")
                        ));
                    })();
                }
            }

            return arr;
        }
    }]);

    return CascadeSelectFormField;
}(FormField);

CascadeSelectFormField.propTypes = assign({}, FormField.propTypes, {
    jsxstyle: React.PropTypes.object,
    jsxshowSearch: React.PropTypes.bool,
    jsxplaceholder: React.PropTypes.string,
    jsxdata: React.PropTypes.object
});
CascadeSelectFormField.defaultProps = assign({}, FormField.defaultProps, {
    jsxshowSearch: false,
    jsxplaceholder: "请下拉选择"
});
CascadeSelectFormField.displayName = "CascadeSelectFormField";

module.exports = CascadeSelectFormField;