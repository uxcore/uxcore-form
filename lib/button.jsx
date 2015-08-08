import React from 'react';
import Constants from "./constants";

const Button = React.createClass({
    propTypes: {
        mode: React.PropTypes.oneOf([Constants.MODE.view, Constants.MODE.edit]),
        isRequire: React.PropTypes.boolean
    },
    getDefaultProps() {
        return {
            bsStyle: "kuma-button"
        };
    },
    getForm() {
        return this.props.form;
    },
    doClick: function() {
        //var _form=this.getForm();
        //_form.doSave();
        this.props.onClick.apply(null,[]);
    },
    
    componentWillUnmount: function() {
        this.props.parent=null;
    },
    render() {
        if (this.props.jsxmode==Constants.MODE.edit) {
            return <div className="kuma-button kuma-button-lblue" onClick={this.doClick.bind(this,{context:this})}>{this.props.jsxtext}</div>;
        }else {
            return <span></span>;
        }
    }

});

export default Button;