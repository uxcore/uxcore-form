/**
 * Form Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let FormRow = require("./FormRow");
let FormRowTitle = require("./FormRowTitle");
let Button = require("./Button");
let FormField = require("./FormField");
let TextAreaFormField = require("./TextAreaFormField");
let InputFormField = require("./InputFormField");
let RadioGroupFormField = require("./RadioGroupFormField");
let SelectFormField = require("./SelectFormField");
let Constants = require("./Constants");
let Validator = require("./Validator");

let classnames = require('classnames');


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.fields = {};
        this.errors = {};
        this.data = {};
        this.state= {
            data: [],
            dirty: false,
            mode: this.props.jsxmode
        };
    }

    componentDidMount() {
        let me = this;
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
        delete this.fields[field.getName()];
    }

    handleDataChange(field, value, fn){
        this.state.data[field.props.jsxname] = value;
        console.log(this.state.data);
    }

    doValidate() {
        let flag=true;
        Object.keys(this.fields).map(function(key){
            let _flag = this.fields[key].doValidate();
            this.errors[key] = _flag;
            flag = flag && !_flag;
        }.bind(this));
        return flag;
    }

    isDirty() {
        return !this.doValidate();
    }

    /*
     * check all the field, and store the error state, use error state
     */

    doSave() {
        let flag = this.doValidate();
        var _mode = flag ? Constants.MODE.VIEW : Constants.MODE.EDIT;
        this.setState({mode:_mode});
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
                if (/FormField/.test(child.type.displayName)) {
                    elements.push(<FormRow>
                                    {child}
                                  </FormRow>);
                }
                else {
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
                "kuma-form-edit-mode": me.props.jsxmode == Constants.MODE.EDIT,
                "kuma-form-view-mode": me.props.jsxmode == Constants.MODE.VIEW
            })}>
                {!!elements && elements.map(function(child, index) {
                    return React.cloneElement(child, {
                        mode: me.state.mode,
                        data: me.props.jsxdata,
                        key: index,
                        attachFormField: me.attachFormField.bind(me),
                        detachFormField: me.detachFormField.bind(me),
                        handleDataChange: me.handleDataChange.bind(me)
                    });
                })}
            </div>
        );
    }
    
}

// 以 Form 的插件的形式给出
Form.FormRow = FormRow;
Form.FormRowTitle = FormRowTitle;
Form.Button = Button;
Form.FormField = FormField;
Form.TextAreaFormField = TextAreaFormField;
Form.InputFormField = InputFormField;
Form.RadioGroupFormField = RadioGroupFormField;
Form.SelectFormField = SelectFormField;
Form.Constants = Constants;
Form.Validator = Validator;


Form.defaultProps = {
    jsxprefixCls: "kuma-form fn-clear",
    jsxmode: Constants.MODE.EDIT,
    jsxdata: {}
}


// http://facebook.github.io/react/docs/reusable-components.html
Form.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxmode: React.PropTypes.string,
    jsxdata: React.PropTypes.object
}

Form.displayName = Form;

module.exports = Form;