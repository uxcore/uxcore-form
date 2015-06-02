import React from 'react';
import FormFieldMixin from './formfieldMixin.js';
import Constants from "./constants";

const Button = React.createClass({
    propTypes: {
        mode: React.PropTypes.oneOf([Constants.MODE.view, Constants.MODE.edit]),
        isRequire: React.PropTypes.boolean
    },
    getDefaultProps() {
        return {
            bsStyle: "kuma-formbutton"
        };
    },
    getParent: function() {
        return this.props.form;
    },
    doClick: function() {
        var _form=this.getParent();
        _form.doSave();
    },
    componentWillUnmount: function() {
        this.props.parent=null;
    },
    render() {
        return <div className={this.props.bsStyle} onClick={this.doClick.bind(this,{context:this})}>{this.props.label}</div>;
    }

});

export default Button;