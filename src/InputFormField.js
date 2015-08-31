let FormField = require('./FormField');
let Constants = require("./Constants");
let classnames = require('classnames');

/**
 * extend FormField, rewrite renderField method
 **/
export default class InputFormField extends FormField {
    constructor(props) {
        super(props);
    }

    getValue()  {
        return this.refs.root.getDOMNode().value
    }

    handleChange(e) {
        let me = this;
        let value = e.currentTarget.value;
        me.handleDataChange(value);
    }

    // formatValue(value) {
    //     if (!value) return "";
    //     value = value + "";
    //     return value.replace(/(\d{3})(?!$)/g, function(match, $1) {
    //         return $1 + " ";
    //     });
    // }

    // deFormatValue(value) {
    //     return value.split(" ").join("");
    // }

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
                    disabled={this.props.jsxdisabled == "disabled" ? "disabled" : ""} 
                    name={this.props.key} 
                    value={this.state.formatValue} 
                    onChange={this.handleChange.bind(this)} />);
        }
        else if (me.props.mode == Constants.MODE.VIEW) {
            arr.push(<span>{me.state.formatValue}</span>)
        }
        return arr;
    }
}

InputFormField.displayName = "InputFormField";
