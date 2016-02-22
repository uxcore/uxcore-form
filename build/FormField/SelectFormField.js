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
var Select = require('uxcore-select2');
var assign = require('object-assign');
var Option = Select.Option;

var selectOptions = ['getPopupContainer', 'multiple', 'filterOption', 'allowClear', 'combobox', 'searchPlaceholder', 'tags', 'disabled', 'showSearch', 'placeholder', 'optionLabelProp', 'maxTagTextLength', 'dropdownMatchSelectWidth', 'dropdownClassName', 'notFoundContent'];

var SelectFormField = function (_FormField) {
    _inherits(SelectFormField, _FormField);

    function SelectFormField(props) {
        _classCallCheck(this, SelectFormField);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectFormField).call(this, props));

        var me = _this;
        assign(me.state, {
            data: props.jsxdata
        });
        return _this;
    }

    _createClass(SelectFormField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var me = this;
            if (!me._isEqual(nextProps.value, me.props.value)) {
                me.handleDataChange(nextProps.value, true);
            }
            if (!me._isEqual(nextProps.jsxdata, me.props.jsxdata)) {
                me.setState({
                    data: nextProps.jsxdata
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var me = this;
            if (me.props.jsxfetchUrl) {
                me.fetchData();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var me = this;
            if (!me.props.standalone) {
                me.props.attachFormField(me);
                me.props.handleDataChange(me, {
                    value: me.props.value,
                    pass: true
                }, true);
            }
            me.hasDeprecatedProps();
        }
    }, {
        key: 'handleDataChange',
        value: function handleDataChange(value, fromReset, label) {
            var me = this;
            me.setState({
                value: value,
                label: label || [],
                formatValue: me.formatValue(value),
                error: !!fromReset ? false : me.state.error,
                /*
                 * why set state fromReset? some field like editor cannot be reset in the common way
                 * so set this state to tell the field that you need to reset by yourself.
                 */
                fromReset: fromReset
            }, function () {
                var pass = true;
                if (!fromReset) {
                    pass = me.doValidate();
                }
                me.props.handleDataChange(me, {
                    value: value,
                    pass: pass
                });
            });
        }
    }, {
        key: 'fetchData',
        value: function fetchData(value) {
            var me = this;
            var ajaxOptions = {
                url: me.props.jsxfetchUrl,
                dataType: me.props.dataType,
                data: me.props.beforeFetch({ q: value }),
                success: function success(data) {
                    var fetchData = me.props.afterFetch(data);
                    if (!!me.props.jsxdata) {
                        fetchData = assign({}, fetchData, me.props.jsxdata);
                    }
                    me.setState({
                        data: fetchData
                    });
                },
                fail: function fail() {
                    console.log("Fetch Data failed");
                }
            };
            if (/\.jsonp/.test(me.props.jsxfetchUrl)) {
                ajaxOptions.dataType = "jsonp";
            }
            $.ajax(ajaxOptions);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value, label) {
            var me = this;
            me.handleDataChange(value, false, label);
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch(value) {
            var me = this;
            if (me.props.jsxfetchUrl) {
                me.fetchData(value);
            } else {
                me.props.onSearch(value);
            }
        }
    }, {
        key: '_processData',
        value: function _processData() {
            var me = this;
            var values = Object.keys(me.state.data);
            var children = me.props.children;
            if (!values.length) {
                // console.warn("You need to pass data to initialize Select.");
                if (!!children) {
                    return children;
                }
            } else {
                var arr = values.map(function (value, index) {
                    return React.createElement(
                        Option,
                        { key: value, title: me.state.data[value] },
                        me.state.data[value]
                    );
                });
                return arr;
            }
        }
    }, {
        key: 'addSpecificClass',
        value: function addSpecificClass() {
            var me = this;
            if (me.props.jsxprefixCls == "kuma-uxform-field") {
                return me.props.jsxprefixCls + " kuma-select-uxform-field";
            } else {
                return me.props.jsxprefixCls;
            }
        }
    }, {
        key: 'hasDeprecatedProps',
        value: function hasDeprecatedProps() {
            var arr = ['jsxstyle', 'jsxmultiple', 'jsxallowClear', 'jsxcombobox', 'jsxsearchPlaceholder', 'jsxtags', 'jsxdisabled', 'jsxshowSearch', 'jsxplaceholder'];
            var me = this;
            var keys = Object.keys(me.props);
            var hasDeprecated = keys.some(function (item, index) {
                return arr.indexOf(item) != -1;
            });
            if (hasDeprecated) {
                console.warn("SelectFormField: props same as uxcore-select2 can be passed without prefix 'jsx' now (exclude style). we will remove the support of the props mentioned above with prefix 'jsx' at uxcore-form@1.3.0 .");
            }
        }
    }, {
        key: 'getValuePropValue',
        value: function getValuePropValue(child) {
            var key = "";
            if ('value' in child.props) {
                key = child.props.value;
            } else {
                key = child.key;
            }
            return key;
        }
    }, {
        key: 'renderField',
        value: function renderField() {
            var me = this;
            var arr = [];
            var mode = me.props.jsxmode || me.props.mode;

            if (mode == Constants.MODE.EDIT) {
                (function () {
                    var options = {
                        ref: "el",
                        key: "select",
                        optionLabelProp: me.props.optionLabelProp,
                        style: me.props.jsxstyle,
                        multiple: me.props.jsxmultiple,
                        allowClear: me.props.jsxallowClear,
                        combobox: me.props.jsxcombobox,
                        searchPlaceholder: me.props.jsxsearchPlaceholder,
                        tags: me.props.jsxtags,
                        optionFilterProp: me.props.optionFilterProp,
                        disabled: !!me.props.jsxdisabled,
                        // value: me.state.value || [],
                        showSearch: me.props.jsxshowSearch,
                        placeholder: me.props.jsxplaceholder,
                        onChange: me.handleChange.bind(me),
                        onSearch: me.handleSearch.bind(me)
                    };

                    selectOptions.forEach(function (item, index) {
                        if (item in me.props) {
                            options[item] = me.props[item];
                        }
                    });

                    // only jsxfetchUrl mode need pass label, for the options always change.
                    // when mount, state.label is undefined, which cause defalutValue cannot be used.
                    if (!!me.props.jsxfetchUrl && !!me.state.label && me.state.label.length !== 0) {
                        options.label = me.state.label || [];
                    }

                    if (!me.props.combobox || me.state.fromReset) {
                        options.value = me.state.value || [];
                    }

                    if (!!me.props.jsxfetchUrl) {
                        options.filterOption = false;
                    }
                    arr.push(React.createElement(
                        Select,
                        options,
                        me._processData()
                    ));
                })();
            } else if (mode == Constants.MODE.VIEW) {
                (function () {
                    var str = '';
                    var values = typeof me.state.value == 'string' ? [me.state.value] : me.state.value;

                    if (me.state.label && me.state.label.length > 0) {
                        str = me.state.label;
                    } else {
                        // if in jsxdata or jsxfetchUrl mode
                        if (Object.keys(me.state.data).length > 0) {
                            values.forEach(function (value, index) {
                                str += me.state.data[value] + " ";
                            });
                        }
                        // else in <Option> Mode
                        else {
                                me.props.children && me.props.children.forEach(function (child, index) {
                                    var valuePropValue = me.getValuePropValue(child);
                                    if (values.indexOf(valuePropValue) !== -1) {
                                        str += child.props[me.props.optionLabelProp] + " ";
                                    }
                                });
                            }
                    }

                    arr.push(React.createElement(
                        'span',
                        { key: 'select' },
                        str
                    ));
                })();
            }
            return arr;
        }
    }]);

    return SelectFormField;
}(FormField);

SelectFormField.Option = Option;
SelectFormField.displayName = "SelectFormField";
SelectFormField.propTypes = assign({}, FormField.propTypes, {
    jsxstyle: React.PropTypes.object,
    jsxplaceholder: React.PropTypes.string,
    jsxcombobox: React.PropTypes.bool,
    jsxdata: React.PropTypes.object,
    beforeFetch: React.PropTypes.func,
    afterFetch: React.PropTypes.func,
    jsxshowSearch: React.PropTypes.bool,
    jsxtags: React.PropTypes.bool,
    jsxmultiple: React.PropTypes.bool,
    jsxallowClear: React.PropTypes.bool,
    jsxsearchPlaceholder: React.PropTypes.string,
    optionFilterProp: React.PropTypes.string,
    dataType: React.PropTypes.string
});
SelectFormField.defaultProps = assign({}, FormField.defaultProps, {
    jsxstyle: {},
    jsxplaceholder: "请下拉选择",
    jsxcombobox: false,
    jsxdata: {},
    beforeFetch: function beforeFetch(obj) {
        return obj;
    },
    afterFetch: function afterFetch(obj) {
        return obj;
    },
    onSearch: function onSearch() {},
    jsxshowSearch: true,
    jsxallowClear: false,
    jsxtags: false,
    jsxmultiple: false,
    jsxsearchPlaceholder: "",
    optionFilterProp: "children",
    optionLabelProp: "children",
    dataType: 'json'
});

module.exports = SelectFormField;