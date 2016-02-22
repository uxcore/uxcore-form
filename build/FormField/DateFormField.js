'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormField = require('./FormField');
var Constants = require('uxcore-const');
var classnames = require('classnames');
var Calendar = require('uxcore-calendar');
var assign = require('object-assign');
var update = React.addons.update;
var deepcopy = require('deepcopy');

var DateFormField = function (_FormField) {
    _inherits(DateFormField, _FormField);

    function DateFormField(props) {
        _classCallCheck(this, DateFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DateFormField).call(this, props));
    }

    _createClass(DateFormField, [{
        key: 'handleChange',
        value: function handleChange(value) {
            var me = this;
            me.handleDataChange(new Date(value).toJSON());
        }
    }, {
        key: 'handleCascadeChange',
        value: function handleCascadeChange(i, value) {
            var me = this;
            var values = deepcopy(me.state.value) || [];
            values[i] = new Date(value).toJSON();
            if (i == 0 && !!values[1] && new Date(value).getTime() > new Date(values[1]).getTime()) {
                values.pop();
            }
            if (i == 1 && !!values[0] && new Date(value).getTime() < new Date(values[0]).getTime()) {
                values[0] = undefined;
            }
            me.handleDataChange(values);
        }
    }, {
        key: 'addSpecificClass',
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                var str = me.props.jsxprefixCls + " kuma-date-uxform-field";
                if (me.props.jsxtype == "cascade") {
                    str += " kuma-cascade-date-uxform-field";
                }
                return str;
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: 'renderField',
        value: function renderField() {
            var me = this;
            var _me$props = me.props;
            var onSelect = _me$props.onSelect;
            var style = _me$props.style;
            var prefixCls = _me$props.prefixCls;
            var value = _me$props.value;
            var jsxtype = _me$props.jsxtype;
            var jsxfrom = _me$props.jsxfrom;
            var jsxto = _me$props.jsxto;
            var disabledDate = _me$props.disabledDate;

            var others = _objectWithoutProperties(_me$props, ['onSelect', 'style', 'prefixCls', 'value', 'jsxtype', 'jsxfrom', 'jsxto', 'disabledDate']);

            var from = !!jsxfrom ? new Date(jsxfrom).getTime() : 0;
            var to = !!jsxto ? new Date(jsxto).getTime() : Infinity;
            var mode = me.props.jsxmode || me.props.mode;
            if (mode == Constants.MODE.EDIT) {
                if (jsxtype == "single") {
                    return React.createElement(Calendar, _extends({
                        value: me.state.value,
                        onSelect: me.handleChange.bind(me),
                        disabledDate: function disabledDate(current, value) {
                            return current.getTime() < from || current.getTime() > to;
                        }
                    }, others));
                } else if (jsxtype == "cascade") {
                    var arr = [];
                    var others1 = assign({}, others);
                    var others2 = assign({}, others);
                    if (me.state.value && me.state.value[0]) {
                        others1 = assign({}, others, {
                            value: me.state.value[0]
                        });
                    } else {
                        others1 = assign({}, others, {
                            value: null
                        });
                    }
                    if (me.state.value && me.state.value[1]) {
                        others2 = assign({}, others, {
                            value: me.state.value[1]
                        });
                    } else {
                        others2 = assign({}, others, {
                            value: null
                        });
                    }
                    arr.push(React.createElement(Calendar, _extends({
                        key: 'calendar1',
                        onSelect: me.handleCascadeChange.bind(me, 0),
                        disabledDate: function disabledDate(current, value) {
                            return current.getTime() < from || current.getTime() > to;
                        }
                    }, others1)));
                    arr.push(React.createElement(
                        'span',
                        { key: 'split', className: 'kuma-uxform-split' },
                        '-'
                    ));

                    arr.push(React.createElement(Calendar, _extends({
                        key: 'calendar2',
                        onSelect: me.handleCascadeChange.bind(me, 1),
                        disabledDate: function disabledDate(current, value) {
                            var now = current.getTime();
                            var first = me.state.value ? me.state.value[0] : 0;
                            first = new Date(first).getTime();
                            return now < from || now > to || now < first;
                        }
                    }, others2)));
                    return arr;
                }
            } else if (mode == Constants.MODE.VIEW) {
                if (jsxtype == "single") {
                    return React.createElement(
                        'span',
                        null,
                        me.state.value
                    );
                } else {
                    return React.createElement(
                        'span',
                        null,
                        !!me.state.value ? me.state.value.join(" - ") : ""
                    );
                }
            }
        }
    }]);

    return DateFormField;
}(FormField);

DateFormField.displayName = "DateFormField";
DateFormField.propTypes = assign(FormField.propTypes, {
    jsxtype: React.PropTypes.string
});
DateFormField.defaultProps = assign(FormField.defaultProps, {
    locale: 'zh-cn',
    hasTrigger: true,
    jsxtype: "single"
});
module.exports = DateFormField;