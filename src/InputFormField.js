let FormField = require('./FormField');
let Constants = require("./Constants");
let classnames = require('classnames');

/**
 * extend FormField, rewrite renderField method
 **/
class InputFormField extends FormField {
    constructor(props) {
        super(props);
    }

    getValue()  {
        return this.refs.root.getDOMNode().value
    }

    handleChange(e) {
        let me = this;
        let value = e.currentTarget.value;
        me.handleDataChange(me.deFormatValue(value));
    }

    deFormatValue(value) {
        return value;
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-input-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }
    
    renderField() {
        let me = this;
        let arr = [];
        if (me.props.mode == Constants.MODE.EDIT) {
            arr.push(<input 
                    className="kuma-input"  
                    ref="root"
                    type="text" 
                    key="input"
                    placeholder={me.props.jsxplaceholder}
                    disabled={me.props.jsxdisabled == "disabled" ? "disabled" : ""} 
                    name={me.props.key} 
                    value={me.state.formatValue} 
                    onChange={me.handleChange.bind(me)} />);
        }
        else if (me.props.mode == Constants.MODE.VIEW) {
            arr.push(<span key="text">{me.state.formatValue}</span>)
        }
        return arr;
    }
}

InputFormField.propTypes = FormField.propTypes;
InputFormField.defaultProps = FormField.defaultProps;
InputFormField.displayName = "InputFormField";
module.exports = InputFormField;
