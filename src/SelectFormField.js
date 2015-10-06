/**
 * Created by xy on 15/4/13.
 */
let FormField = require('./FormField');
let Constants = require("./Constants");
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
    fetchData(value) {
        let me = this;
        $.ajax({
            url: me.props.jsxfetchUrl,
            dataType: "jsonp",
            data: me.props.beforeFetch({q: value}),
            success: (data) => {
                me.setState({
                    data: me.props.afterFetch(data)
                });
            },
            fail: () => {
                console.log("Fetch Data failed");
            }
        })
    }
    handleChange(value) {
        let me = this;
        me.handleDataChange(value);
    }
    handleSearch(value) {
        let me = this;
        if (me.props.jsxfetchUrl) {
            me.fetchData(value);
        }
    }
    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-select-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    _processData() {
        let me = this;
        let values = Object.keys(me.state.data);
        if (!values.length) {
            // console.warn("You need to pass data to initialize Select.");
        }
        else {
            let arr = values.map(function(value, index) {
                return <Option key={index} value={value}>{me.state.data[value]}</Option>
            });
            return arr;
        }

    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-select-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        let arr = [];
        if (me.props.mode == Constants.MODE.EDIT) {
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
                value: me.state.value,
                showSearch: me.props.jsxshowSearch,
                placeholder: me.props.jsxplaceholder,
                onChange: me.handleChange.bind(me),
                onSearch: me.handleSearch.bind(me)
            };
            if (!!me.props.jsxfetchUrl) {
                options.filterOption = false;
            }
            arr.push(<Select
                     {...options}>
                        {me._processData()}
                    </Select>);
        }
        else if (me.props.mode == Constants.MODE.VIEW){
            arr.push(<span key="select">{me.state.data[me.state.value]}</span>);
        }
        return arr;
    }
}

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
    jsxsearchPlaceholder: React.PropTypes.string
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
    jsxsearchPlaceholder: ""
});

module.exports = SelectFormField;
