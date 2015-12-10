/**
 * TableFormField Component for uxcore
 * @author zhouquan.yezq
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */


let FormField = require('./FormField');
let Constants = require("uxcore-const");
let classnames = require('classnames');
let assign = require('object-assign');
let Table = require("uxcore-table");

/**
 * extend FormField, rewrite renderField method
 **/
class TableFormField extends FormField {
    constructor(props) {
        super(props);
    }

    getValue()  {
        return this.refs.table.getData();
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-table-uxform-field" ;
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
        let arr = [],renderTableProp={
            // mode: this.props.mode,
            jsxdata: this.state.value
        };

        let {className, jsxprefixCls, ...passedProps} = me.props;
        let mode = me.props.jsxmode || me.props.mode;
        $.extend(renderTableProp, passedProps);
        if (mode == Constants.MODE.EDIT) {
             arr.push(<div key="table" onBlur={this.onBlur.bind(this)}><Table {...renderTableProp} ref="table" /></div>);
        }else if (mode == Constants.MODE.VIEW) {
             arr.push(<Table key="table" {...renderTableProp} />);
        }
        // arr.push(<Table key="table" {...renderTableProp} />);
        return arr;
    }
}

TableFormField.propTypes = FormField.propTypes;
TableFormField.defaultProps = assign({}, FormField.defaultProps, {
    width: "100%"
});
TableFormField.displayName = "TableFormField";
module.exports = TableFormField;
