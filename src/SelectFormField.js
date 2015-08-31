/**
 * Created by xy on 15/4/13.
 */
let FormField = require('./FormField');
let Constants = require("./Constants");
let SelectField = require('uxcore-select');

class SelectFormField extends FormField{
    constructor(props) {
        super(props);
    }
    getValue() {
        return this.refs.el.getValue()
    }
    handleChange() {
        let me = this;
        let value = me.getValue();
        me.props.handleDataChange(this, value);
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
            arr.push(<SelectField 
                     jsxname={this.props.jsxname} 
                     ref="el" 
                     key="select"
                     jsxvalue={this.props.jsxvalue} 
                     onChange={this.handleChange.bind(this)}>
                        {this.props.children}
                    </SelectField>)
        }
        else if (me.props.mode == Constants.MODE.VIEW){
            arr.push(<span>{this.state.value}</span>);
        }
        return arr;
    }
}

SelectFormField.displayName = "SelectFormField";
module.exports = SelectFormField;