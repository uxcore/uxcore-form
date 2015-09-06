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

    renderField() {
        let me = this;
        let {onSelect, style, prefixCls, value, ...others} = me.props;
        if (me.props.mode == Constants.MODE.EDIT) {
            return <Calendar 
                    value={me.state.value}
                    onSelect={me.handleChange.bind(me)}
                    {...others}/>
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