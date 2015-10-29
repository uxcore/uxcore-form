let FormField = require('./FormField');
let Constants = require('uxcore-const');
let classnames = require('classnames');
let Calendar = require('uxcore-calendar');
let assign = require('object-assign');
let update = React.addons.update;

class DateFormField extends FormField {
    constructor(props) {
        super(props);
    }

    handleChange(value) {
        let me = this;
        me.handleDataChange(new Date(value).toJSON());
    }

    handleCascadeChange(i, value) {
        let me = this;
        let values = update(me.state.value, {}) || [];
        if (!!values[i]) {
            values = values.slice(0, i);
            values.push(new Date(value).toJSON());
        }
        else {
            values[i] = new Date(value).toJSON();
        }
        me.handleDataChange(values);
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            let str = me.props.jsxprefixCls + " kuma-date-uxform-field" ;
            if (me.props.jsxtype == "cascade") {
                str += " kuma-cascade-date-uxform-field"
            }
            return str;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        let {onSelect, style, prefixCls, value, jsxtype, jsxfrom, jsxto, disabledDate, ...others} = me.props;
        let from = !!jsxfrom ? new Date(jsxfrom).getTime() : 0;
        let to = !!jsxto ? new Date(jsxto).getTime() : Infinity;
        let mode = me.props.jsxmode || me.props.mode;
        if (mode == Constants.MODE.EDIT) {
            if (jsxtype == "single") {
                return <Calendar
                        value={me.state.value}
                        onSelect={me.handleChange.bind(me)}
                        disabledDate={(current, value) => {
                            return (current.getTime() < from || current.getTime() > to)
                        }}
                        {...others}/>
            }
            else if (jsxtype == "cascade") {
                let arr = [];
                let others1 = assign({}, others);
                let others2 = assign({}, others);
                if (me.state.value && me.state.value[0]) {
                    others1 = assign({}, others, {
                        value: me.state.value[0]
                    });
                }
                else {
                    others1 = assign({}, others, {
                        value: null
                    });
                }
                if (me.state.value && me.state.value[1]) {
                    others2 = assign({}, others, {
                        value: me.state.value[1]
                    });
                }
                else {
                    others2 = assign({}, others, {
                        value: null
                    });
                }
                arr.push(<Calendar
                        key="calendar1"
                        onSelect={me.handleCascadeChange.bind(me, 0)}
                        disabledDate={(current, value) => {
                            return (current.getTime() < from || current.getTime() > to)
                        }}
                        {...others1}/>);
                arr.push(<span key="split" className="kuma-uxform-split">-</span>)

                arr.push(<Calendar
                        key="calendar2"
                        onSelect={me.handleCascadeChange.bind(me, 1)}
                        disabledDate={(current, value) => {
                            let now = current.getTime();
                            let first = me.state.value ? me.state.value[0] : 0;
                            first = new Date(first).getTime();
                            return (now < from || now > to || now < first);
                        }}
                        {...others2}/>);
                return arr;
            }
        }
        else if (mode == Constants.MODE.VIEW) {
            if (jsxtype == "single") {
                return <span>{me.state.value}</span>
            }
            else {
                return <span>{me.state.value.join(" - ")}</span>
            }
        }
    }
}

DateFormField.displayName = "DateFormField";
DateFormField.propTypes = assign(FormField.propTypes, {
    jsxtype: React.PropTypes.string,
    jsxfrom: React.PropTypes.string,
    jsxto: React.PropTypes.string
});
DateFormField.defaultProps = assign(FormField.defaultProps, {
    locale: 'zh-cn',
    hasTrigger: true,
    jsxtype: "single"
});
module.exports = DateFormField;
