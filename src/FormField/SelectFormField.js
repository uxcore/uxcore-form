/**
 * Created by xy on 15/4/13.
 */
let FormField = require('./FormField');
let Constants = require("uxcore-const");
let Select = require('uxcore-select2');
let assign = require('object-assign');
let {Option} = Select;

class SelectFormField extends FormField {
    constructor(props) {
        super(props);
        let me = this;
        assign(me.state, {
            data: props.jsxdata
        })
    }

    componentWillReceiveProps(nextProps) {
        let me = this;
        if (!me._isEqual(nextProps.value, me.props.value)) {
            me.handleDataChange(nextProps.value, true);
        }
        if (!me._isEqual(nextProps.jsxdata, me.props.jsxdata)) {
            me.setState({
                data: nextProps.jsxdata
            });
        }
    }

    fetchData(value) {
        let me = this;
        let ajaxOptions = {
            url: me.props.jsxfetchUrl,
            dataType: me.props.dataType || 'json',
            data: me.props.beforeFetch({q: value}),
            success: (data) => {
                me.setState({
                    data: me.props.afterFetch(data)
                });
            },
            fail: () => {
                console.log("Fetch Data failed");
            }
        }
        if (/\.jsonp/.test(me.props.jsxfetchUrl)) {
            ajaxOptions.dataType = "jsonp"
        }
        $.ajax(ajaxOptions);
    }

    handleChange(value) {
        let me = this;
        me.handleDataChange(value);
    }
    handleSearch(value, label) {
        let me = this;
        if (me.props.jsxfetchUrl) {
            me.fetchData(value);
        }
    }
    _processData() {
        let me = this;
        let values = Object.keys(me.state.data);
        let children = me.props.children;
        if (!values.length) {
            // console.warn("You need to pass data to initialize Select.");
            if (!!children) {
                return children;
            }
        }
        else {
            let arr = values.map(function(value, index) {
                return <Option key={value}>{me.state.data[value]}</Option>
            });
            return arr;
        }

    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-select-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    hasDeprecatedProps() {
        let arr = ['jsxstyle', 'jsxmultiple', 'jsxallowClear', 'jsxcombobox', 'jsxsearchPlaceholder', 'jsxtags', 'jsxdisabled', 'jsxshowSearch', 'jsxplaceholder'];
        let me = this;
        let keys = Object.keys(me.props);
        let hasDeprecated = keys.some((item, index) => {
            return arr.indexOf(item) != -1
        });
        if (hasDeprecated) {
            // console.warn("SelectFormField: props same as uxcore-select2 can be passed without prefix 'jsx' now (exclude style). we will remove the support of the props mentioned above with prefix 'jsx' at uxcore-form@1.3.0 .");
        }
    }

    renderField() {
        let me = this;
        let arr = [];
        let mode = me.props.jsxmode || me.props.mode;
        me.hasDeprecatedProps();
        if (mode == Constants.MODE.EDIT) {
            let options = {
                ref: "el",
                key: "select",
                optionLabelProp: "children",
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

            ['multiple', 'filterOption', 'allowClear', 'combobox', 'searchPlaceholder', 'tags', 'disabled', 'showSearch', 'placeholder', 'optionLabelProp'].forEach((item, index) => {
                if (item in me.props) {
                    options[item] = me.props[item];
                }
            });

            if (!me.props.jsxmultiple || me.state.fromReset) {
                options.value = me.state.value || [];
            }

            if (!!me.props.jsxfetchUrl) {
                options.filterOption = false;
            }
            arr.push(<Select
                     {...options}>
                        {me._processData()}
                    </Select>);
        }
        else if (mode == Constants.MODE.VIEW){
            arr.push(<span key="select">{me.state.data[me.state.value]}</span>);
        }
        return arr;
    }
}

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
    optionFilterProp: React.PropTypes.string
});
SelectFormField.defaultProps = assign({}, FormField.defaultProps, {
    jsxstyle: {},
    jsxplaceholder: "请下拉选择",
    jsxcombobox: false,
    jsxdata: {},
    beforeFetch: (obj) => {return obj},
    afterFetch: (obj) => {return obj},
    jsxshowSearch: true,
    jsxallowClear: false,
    jsxtags: false,
    jsxmultiple: false,
    jsxsearchPlaceholder: "",
    optionFilterProp: "children"
});

module.exports = SelectFormField;
