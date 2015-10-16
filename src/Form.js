/**
 * Form Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let FormRow = require("./FormRow");
let FormRowTitle = require("./FormRowTitle");
let FormField = require("./FormField/FormField");
let TextAreaFormField = require("./FormField/TextAreaFormField");
let InputFormField = require("./FormField/InputFormField");
let RadioGroupFormField = require("./FormField/RadioGroupFormField");
let SelectFormField = require("./FormField/SelectFormField");
let NumberInputFormField = require('./FormField/NumberInputFormField');
let DateFormField = require('./FormField/DateFormField');
let CheckboxGroupFormField = require("./FormField/CheckboxGroupFormField");
let CascadeSelectFormField = require("./FormField/CascadeSelectFormField");
let UploadFormField = require("./FormField/UploadFormField");
let OtherFormField = require("./FormField/OtherFormField");
let ButtonGroupFormField = require("./FormField/ButtonGroupFormField");
let EditorFormField = require("./FormField/EditorFormField");
let GridFormField = require("./FormField/GridFormField");
// let MentionFormField = require("./FormField/MentionFormField");
let Constants = require("./Constants");
let Validators = require("./Validators");

let classnames = require('classnames');


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
        return JSON.parse(JSON.stringify(a));
    }

    attachFormField(field) {
        let name = field.getName();
        if (!name) {
            console.warn("Each field needs a name to identify itself");
        }
        else {
            if(name=='grid') {
                debugger;
            }
            this.fields[name] = field
        }
    }

    detachFormField(field) {
        delete this.fields[field.getName()];
    }

    handleDataChange(field, value, fromMount){
        let me = this;
        me.data[field.props.jsxname] = value;
        if (!fromMount) {
            me.props.jsxonChange(me._copy(me.data));
        }
        // console.log(me.data);
    }

    getValues() {
        let me = this;
        let _flag = me.doValidate();
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
            me.fields[keys[i]].handleDataChange(data[keys[i]] == undefined ? null : data[keys[i]], true);
        }
    }

    doValidate() {
        let me = this;
        let pass = true;
        let keys = Object.keys(me.fields);
        for (let i = 0; i < keys.length; i++) {
            let itemPass = me.fields[keys[i]].doValidate();
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
                "kuma-uxform-edit-mode": me.props.jsxmode == Constants.MODE.EDIT,
                "kuma-uxform-view-mode": me.props.jsxmode == Constants.MODE.VIEW
            })}>
                {!!elements && elements.map(function(child, index) {
                    return React.cloneElement(child, {
                        mode: me.props.jsxmode,
                        data: me.props.jsxvalues || me.props.passedData || {},
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
Form.TextAreaFormField = TextAreaFormField;
Form.InputFormField = InputFormField;
Form.RadioGroupFormField = RadioGroupFormField;
Form.SelectFormField = SelectFormField;
Form.NumberInputFormField = NumberInputFormField;
Form.DateFormField = DateFormField;
Form.CheckboxGroupFormField = CheckboxGroupFormField;
Form.CascadeSelectFormField = CascadeSelectFormField;
Form.UploadFormField = UploadFormField;
Form.OtherFormField = OtherFormField;
Form.ButtonGroupFormField = ButtonGroupFormField;
Form.EditorFormField = EditorFormField;
Form.GridFormField = GridFormField;
// Form.MentionFormField = MentionFormField;
Form.Constants = Constants;
Form.Validators = Validators;


Form.defaultProps = {
    jsxprefixCls: "kuma-uxform",
    jsxmode: Constants.MODE.EDIT,
    jsxonChange: () => {}
}


// http://facebook.github.io/react/docs/reusable-components.html
Form.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxmode: React.PropTypes.string,
    jsxvalues: React.PropTypes.object,
    jsxonChange: React.PropTypes.func
}

Form.displayName = Form;

module.exports = Form;
