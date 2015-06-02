/**
 * Created by xy on 15/4/13.
 */
import React from 'react';
import FormFieldMixin from './formfieldMixin';
import Constants from "./constants";
import ValidatorType from "./customValidatorType";
import classNames from 'classnames';

const FormField = React.createClass({
    mixins: [FormFieldMixin],
    propTypes: {
        mode: React.PropTypes.oneOf([Constants.MODE.view, Constants.MODE.edit]),
        required: React.PropTypes.boolean
    },
    getDefaultProps() {
        return {
            bsStyle: "kuma-formfield",
            required: false,
            error:false,
            animation: true,
            tips:"FORM FIELD TIPS",
            errorMsg:"ERROE Message"
        };
    },
    getInitialState() {
        return {
            value: this.props.value,
            error: false,
            required: this.props.rules && this.props.rules.required? this.props.rules.required:false,
            errorMsg: this.props.rules && this.props.rules.message? this.props.rules.message:this.props.errorMsg
        };
    },

    getParent: function() {
        return this.props.form;
    },
    getName: function() {
        return this.props.keyMap;
    },
    componentDidMount: function() {
        this.props.attachFormField(this);
    },

    componentDidUpdate: function() {
        this.props.attachFormField(this);
    },

    setValue: function(value) {
        this.setProps('value',value);
        this.refs.el.value=value;
    },
    test: function() {
        console.info("----111test");
    },
    getValue()  {
        console.log("111");
        return this.refs.el.getDOMNode().value
    },
    componentWillUnmount: function() {
        this.props.detachFormField(this);
        this.props.form=null;
    },
    /**
     *@return {boolean} whether this field has error, if validate pass, no error,pls note the reverse logic
     */
    doValidate: function() {
        console.info(this.props.label);
        this.test();
        if(this.props.rules) {
            console.log("ll:",this.getValue());
            let rules=this.props.rules;
            let validator=rules.validator;
            let _pass= ValidatorType(rules,this.getValue());
            this.setState({value:this.getValue(), error:!_pass});
            return !_pass;
        }else {
            return false;
        }

    },

    render() {
                        console.log("111 render");

        let _mode;
        let className = classNames('kuma-formfield', this.props.className);

        if (this.props.mode==Constants.MODE.edit) {
            let children = this.props.children.length>0?this.props.children:[this.props.children];
            let self=this;

            _mode=<div className={className}>
            {children.map(function(child) {
                child.props.form=self.props.form;
                return child;
            })}
            </div>
        }else {
            _mode=<div></div>;
        }
        return _mode;
    }

});

export default FormField;