/**
 * Form Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let React = require('react');
let ReactDOM = require('react-dom');
let FormRow = require("uxcore-form-row");
let FormRowTitle = require("./FormRowTitle");
let FormField = require("uxcore-form-field");

let Constants = require("uxcore-const");
let Validators = require("./Validators");
let KeyCode = require('./KeyCode');

let classnames = require('classnames');
let assign = require('object-assign');
let deepcopy = require('deepcopy');
let deepEqual = require('deep-equal');

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.fields = {};
        this.errors = {};
        this.data = {};
        this.state= {
        };
    }

    componentDidMount() {
        let me = this;
    }

    _copy(a) {
        return deepcopy(a);
    }

    attachFormField(field) {
        let name = field.getName();
        if (!name) {
            console.warn("Each field needs a name to identify itself");
        }
        else {
            this.fields[name] = field
        }
    }

    detachFormField(field) {
        let name = field.getName();
        delete this.fields[name];
        delete this.data[name];

    }

    handleDataChange(field, fieldData, fromMount){
        let me = this;
        me.data[field.props.jsxname] = fieldData.value;
        if (!fromMount) {
            me.props.jsxonChange(me._copy(me.data), field.props.jsxname, fieldData.pass);
        }
    }

    getValues(force) {
        let me = this;
        let _flag = me.doValidate(force);
        return {
            values: me._copy(me.data),
            pass: _flag
        }
    }

    resetValues() {
        let me = this;
        let keys = Object.keys(me.fields);
        let data = me.props.jsxvalues || me.props.passedData || {};
        for (let i = 0; i < keys.length; i++) {
            me.fields[keys[i]].handleDataChange(data[keys[i]] == undefined ? null : data[keys[i]], true)
        }
    }


    /*
     * set Form values manually
     */

    setValues(data) {
        if (typeof data != 'object') return;
        let me = this;
        let savedData = me.data;
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            if (!deepEqual( data[keys[i]], savedData[keys[i]]) ) {
                me.fields[keys[i]].handleDataChange(data[keys[i]] == undefined ? null : data[keys[i]], true)
            }
        }
    }

    doValidate(force) {
        let me = this;
        let pass = true;
        let keys = Object.keys(me.fields);
        for (let i = 0; i < keys.length; i++) {
            let itemPass = me.fields[keys[i]].doValidate(force);
            me.errors[keys[i]] = !itemPass;
            if (!itemPass) {
                pass = false;
            }
        }
        return pass;
    }


    isDirty() {
        return !this.doValidate();
    }

    /*
     * 统一数据流，所有的 props，通过 Form -> FormRow -> FormField 向下传递，如果有的
     * 子元素是 FormField，则自动在他的外面包一层 FormRow。
     * @param {React Elements Array} children this.props.children
     */

    _processChild(children) {
        let length = React.Children.count(children);
        let elements = [];
        if (length == 0) {
            console.warn("FORM: You must pass children to the form component");
            return false;
        }

        React.Children.forEach(children, function(child, index) {
            // 如果是自己添加的 DOM 直接抛弃
            if (typeof child.type == 'function') {
                let displayName = child.type.displayName;
                if (displayName === 'EngineNode') {
                    displayName = child.props._componentName;
                }
                if (/FormField/.test(displayName)) {
                    elements.push(<FormRow>
                                    {child}
                                  </FormRow>);
                }
                else if (/FormRow/.test(displayName)) {
                  elements.push(child);
                }
            }

        });

        return elements;
    }

    render() {
        let me = this;
        let elements = me._processChild(me.props.children);

        return (
            <div className={classnames({
                [me.props.jsxprefixCls]: true,
                [me.props.className]: !!me.props.className,
                "kuma-uxform-edit-mode": me.props.jsxmode == Constants.MODE.EDIT,
                "kuma-uxform-view-mode": me.props.jsxmode == Constants.MODE.VIEW
            })}>
                {!!elements && elements.map(function(child, index) {
                    return React.cloneElement(child, {
                        mode: me.props.jsxmode,
                        instantValidate: me.props.instantValidate,
                        data: deepcopy(me.props.jsxvalues || me.props.passedData || {}),
                        key: index,
                        attachFormField: me.attachFormField.bind(me),
                        detachFormField: me.detachFormField.bind(me),
                        handleDataChange: me.handleDataChange.bind(me),
                        getValues: me.getValues.bind(me),
                        resetValues: me.resetValues.bind(me)
                    });
                })}
            </div>
        );
    }

}

// 以 Form 的插件的形式给出
Form.FormRow = FormRow;
Form.FormRowTitle = FormRowTitle;
Form.FormField = FormField;

// Form.MentionFormField = MentionFormField;
Form.Constants = Constants;
Form.Validators = Validators;
Form.KeyCode = KeyCode;


Form.defaultProps = {
    jsxprefixCls: "kuma-uxform",
    jsxmode: Constants.MODE.EDIT,
    instantValidate: true,
    jsxonChange: () => {}
}


// http://facebook.github.io/react/docs/reusable-components.html
Form.propTypes = {
    /**
     * @title: 类名前缀
     * @veIgnore
     */
    jsxprefixCls: React.PropTypes.string,
    /**
     * @title CSS类名
     * @veIgnore
     */
    className: React.PropTypes.string,
    /**
     * @title 显示模式
     */
    jsxmode: React.PropTypes.string,
    /**
     * @title 默认值
     */
    jsxvalues: React.PropTypes.object,
    /**
     * @title 是否即时校验
     * @veFieldStyle block
     */
    instantValidate: React.PropTypes.bool,
    /**
     * @title 表单域改变时的回调
     */
    jsxonChange: React.PropTypes.func
}

Form.displayName = "Form";

module.exports = Form;
