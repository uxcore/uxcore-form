let FormField = require('./FormField');
let Constants = require('./Constants');
let classnames = require('classnames');
let Calendar = require('uxcore-calendar');
let assign = require('object-assign');

class DateFormField extends FormField {
    constructor(props) {
        super(props);
    }

    handleChange(value) {
        let me = this;
        me.handleDataChange(new Date(value).toJSON());
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-date-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        let {onSelect, style, prefixCls, value, ...others} = me.props;
        if (me.props.mode == Constants.MODE.EDIT) {
            return <Calendar 
                    value={me.state.value}
                    onSelect={me.handleChange.bind(me)}
                    {...others}/>
        }
        else if (me.props.mode == Constants.MODE.VIEW) {
            return <span>{me.state.value}</span>
        }
    }
}

DateFormField.displayName = "DateFormField";
DateFormField.propTypes = assign(FormField.propTypes, {
});
DateFormField.defaultProps = assign(FormField.defaultProps, {
    locale: 'zh-cn',
    hasTrigger: true
});
module.exports = DateFormField;