let FormField = require('./FormField');
let Constants = require("./Constants");
let Select = require('uxcore-select2');
let {Option} = Select;
let assign = require('object-assign');
let update = React.addons.update;

class CascadeSelectFormField extends FormField {
    constructor(props) {
        super(props);
    }

    getDataLength() {
        let me = this;
        return me.props.jsxdata.length;
    }

    handleChange(i, value) {
        let me = this;
        let values = update(me.state.value, {}) || [];
        if (!!values[i]) {
            values = values.slice(0, i);
            values.push(value);
        }
        else {
            values[i] = value;
        }
        me.handleDataChange(values)
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-cascade-select-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;  
        let length = me.getDataLength();
        let arr = [];
        let data = {};
        if (me.props.mode == Constants.MODE.EDIT) {
            try {
                data = me.props.jsxdata.contents;
            }
            catch(e) {
                console.warn(e.message)
                return;
            }
            
            /*
             * 如果 value 存在相应的值，则填充下一级的选择，
             * 如果 value 不存在，则填充空数组，
             * 如果 data 中不包含 contents，则证明级联选择生成已结束，则跳出循环
             */
            let stateValue = me.state.value || []; // 预防 value 是 undefined 的情况
            for (let i = 0; i < length; i++) {
                let options = data.map((item, index) => {
                    return <Option key={index} value={item.value}>{item.text}</Option>
                });

                let selectOptions = {
                    ref: "el", 
                    key: "select",
                    optionLabelProp: "children",
                    style: me.props.jsxstyle,
                    showSearch: me.props.jsxshowSearch,
                    placeholder: me.props.jsxplaceholder
                };
                selectOptions.onChange = me.handleChange.bind(me, i);
                if (!!stateValue[i]) { 
                    // 虽然有两个地方判断了 stateValue[i] 是否存在，但这样显得逻辑更加清晰，因此保留。
                    selectOptions.value = stateValue[i];
                }
                arr.push(<Select {...selectOptions} key={i}>
                            {options}
                        </Select>);
                if (!!stateValue[i]) {
                    data = data.filter((item) => {
                        return item.value == stateValue[i]
                    })[0];
                    data = data.contents;
                    if (!data) break;
                }
                else {
                     data = [];
                }
            }
        }
        else if (me.props.mode == Constants.MODE.VIEW) {
            arr.push(<span key="cascade">{(me.state.value instanceof Array) && me.state.value.join(" ")}</span>)
        }

        return arr;


    }
}

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
CascadeSelectFormField.displayName = "CascadeSelectFormField"

module.exports = CascadeSelectFormField;