/**
 * Created by xy on 15/4/13.
 */
let FormField = require('./FormField');
let Constants = require("./Constants");

export default class TextAreaFormField extends FormField{
    
    constructor(props) {
        super(props);
    }
    
    renderField() {
    	if(this.props.jsxdisabled) {
            this.props.jsxdisabled='disabled';
        }else {
            this.props.jsxdisabled="";
        }
        return  <textarea disabled={this.props.jsxdisabled} className="kuma-textarea" ref="el">{this.state.value}</textarea>
    }
}