/**
 * Created by xy on 15/4/13.
 */
let FormField = require('./FormField');
let Constants = require("../Constants");

class TextAreaFormField extends FormField {
    
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        let me = this;
        let value = e.currentTarget.value;
        me.handleDataChange(value);
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-textarea-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    
    renderField() {
        let me = this;
        if (me.props.mode == Constants.MODE.EDIT) {
            return  <textarea 
                     disabled={me.props.jsxdisabled}
                     placeholder={me.props.jsxplaceholder} 
                     className="kuma-textarea" 
                     ref="root" 
                     value={me.state.value}
                     onChange={me.handleChange.bind(me)}/>
        }
        else if (me.props.mode == Constants.MODE.VIEW) {
            return <span>{me.state.value}</span>
        }
    }
}

TextAreaFormField.displayName = "TextAreaFormField";
TextAreaFormField.propTypes = FormField.propTypes;
TextAreaFormField.defaultProps = FormField.defaultProps;
module.exports = TextAreaFormField;