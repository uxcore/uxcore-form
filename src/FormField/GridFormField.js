let FormField = require('./FormField');
let Constants = require("../Constants");
let classnames = require('classnames');
let assign = require('object-assign');
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
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-grid-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    onBlur() {
        this.handleDataChange(this.getValue());
    }

    renderField() {
        let me = this;
        let arr = [],renderGridProp={
            mode: this.props.mode,
            jsxdata: this.state.value
        };
        let {className, jsxprefixCls, ...passedProps} = me.props;
        $.extend(renderGridProp, passedProps);
        if (me.props.mode == Constants.MODE.EDIT) {
             arr.push(<div onBlur={this.onBlur.bind(this)}><Grid {...renderGridProp} ref="grid" /></div>);
        }else if (me.props.mode == Constants.MODE.VIEW) {
             arr.push(<Grid {...renderGridProp} />);
        }
        return arr;
    }
}

GridFormField.propTypes = FormField.propTypes;
GridFormField.defaultProps = assign({}, FormField.defaultProps, {
    width: "100%"
});
GridFormField.displayName = "GridFormField";
module.exports = GridFormField;
