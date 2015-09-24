let FormField = require('./FormField');
let Constants = require("./Constants");
let classnames = require('classnames');
let Grid = require("uxcore-grid");

/**
 * extend FormField, rewrite renderField method
 **/
class GridFormField extends FormField {
    constructor(props) {
        super(props);
    }

    getValue()  {
        return this.refs.grid.getData();
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

    onBlur() {
        console.log("+++onblur+++");
        this.handleDataChange(this.getValue());
    }

    renderField() {
        let me = this;
        let arr = [];
        if (me.props.mode == Constants.MODE.EDIT) {
             arr.push(<div onBlur={this.onBlur.bind(this)}><Grid {...this.props} ref="grid" /></div>);
        }else if (me.props.mode == Constants.MODE.VIEW) {
            // arr.push(<Grid {...this.props} />);
        }
        return arr;
    }
}

GridFormField.propTypes = FormField.propTypes;
GridFormField.defaultProps = FormField.defaultProps;
GridFormField.displayName = "GridFormField";
module.exports = GridFormField;
