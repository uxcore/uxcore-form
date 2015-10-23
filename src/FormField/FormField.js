let Constants = require("uxcore-const");
let classnames = require("classnames");
let assign = require("object-assign");

class FormField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            formatValue: this.formatValue(props.value),
            error: false,
            errMsg: ''
        };
    }

    componentDidMount() {
        let me = this;
        me.props.attachFormField(me);
        me.props.handleDataChange(me, {
            value: me.props.value,
            pass: true
        }, true);
    }


    componentWillReceiveProps(nextProps) {
        let me = this;
        if (!me._isEqual(nextProps.value, me.props.value)) {
            me.handleDataChange(nextProps.value, true);
        }
    }

    _isEqual(a, b) {
        return JSON.stringify(a) == JSON.stringify(b);
    }

    componentWillUnmount () {
        this.props.detachFormField(this);
    }

    getName() {
        return this.props.jsxname;
    }

    /*
     * Fired when field value changes，update form's state and then trigger re-render.
     * @param fromReset {boolean} if handleDataChange is invoked by form's resetValues,
     * doValidate should not be invoked.
     */

    handleDataChange(value, fromReset) {
        let me = this;
        me.setState({
            value: value,
            formatValue: me.formatValue(value),
            error: !!fromReset ? false: me.state.error,
            /*
             * why set state fromReset? some field like editor cannot be reset in the common way
             * so set this state to tell the field that you need to reset by yourself.
             */
            fromReset: fromReset
        }, () => {
            let pass = true
            if (!fromReset) {
                pass = me.doValidate();
            }
            me.props.handleDataChange(me, {
                value: value,
                pass: pass
            });
        });

    }


    /**
     * @return {boolean} if validate pass, return true, or, return false
     * if no rule, it means validate pass.
     */

    doValidate (force) {
        let me = this;
        let instant = true;
        if ('instantValidate' in me.props) {
            instant = me.props.instantValidate
        }
        else {
            instant = me.props.jsxinstant
        }
        // if force or instant, validate should be done, but if there are not
        // jsxrules, validate cannot be done.
        if ((!!force || instant) && me.props.jsxrules) {
            let error = me.isDirty();
            me.setState({error: error.isDirty, errMsg: error.errMsg});
            return !error.isDirty;
        } else {
            return true;
        }

    }

    /*
     * rule can be an object, containing errMsg & validator,
     * and rule can also be an array containing such objects.
     * this func will check them one by one, and return false
     * unless all rules pass
     */

    isDirty() {
        let me = this;
        let rules = me.props.jsxrules;
        let isDirty = false;
        let errMsg = "";
        if (typeof rules == "object" && !Array.isArray(rules)) {
            isDirty = !rules.validator(me.state.value);
            errMsg = rules.errMsg;
        }
        else if (Array.isArray(rules)) {
            for (let i = 0; i < rules.length; i++) {
                isDirty = !rules[i].validator(me.state.value);
                if (isDirty) {
                    errMsg = rules[i].errMsg;
                    break;
                }
            }
        }
        return {
            isDirty: isDirty,
            errMsg: errMsg
        }
    }

    renderTips() {
        let me = this;
        let mode = me.props.jsxmode || me.props.mode;
        if (mode != Constants.MODE.EDIT) return;
        if(!!this.props.jsxtips && !me.state.error) {
            return <li className="kuma-uxform-tips">
                        <i className="kuma-icon kuma-icon-information"></i>
                        {this.props.jsxtips}
                    </li>
        }
    }

    /*
     * You should rewrite this method，when you need to format the value as you concern.
     */

    formatValue(value) {
        return value;
    }

    /*
     * You should rewrite this method, when you are developing a new type of form field.
     */

    renderField() {

    }

    renderErrorMsg() {
        let me = this;
        let mode = me.props.jsxmode || me.props.mode;
        if (mode != Constants.MODE.EDIT) return;
        return  <li className="kuma-uxform-errormsg">
                    <i className="kuma-icon kuma-icon-close-hover"></i>
                    {me.state.errMsg}
                </li>
    }

    renderLabel() {
        let me = this;
        if (me.props.jsxshowLabel) {
            return  <label className="kuma-label">
                        <span className="required">{me.props.required ? "* " : ""}</span>
                        <span className="label-content" dangerouslySetInnerHTML={{__html: me.props.jsxlabel}} />
                    </label>
        }
    }

    addSpecificClass(classname) {
       return this.props.jsxprefixCls;
    }

    render() {
        let me = this;
        let specificCls = me.addSpecificClass();
        let mode = me.props.jsxmode || me.props.mode;

        return (
            <div className={classnames({
                [specificCls]: true,
                [me.props.className]: !!me.props.className
            })} style={assign({}, me.props.style, {
                display: me.props.jsxshow ? "table" : "none"
            })}>
                {me.renderLabel()}
                <ul className={classnames({
                    "kuma-uxform-field-content": true,
                    "view-mode": mode == Constants.MODE.VIEW,
                    "edit-mode": mode == Constants.MODE.EDIT
                })}>
                    <li className="kuma-uxform-field-core">{me.renderField()}</li>
                    {me.renderTips()}
                    {!!me.state.error && me.renderErrorMsg()}
                </ul>
            </div>
        );
    }

};

FormField.propTypes = {
    instantValidate: React.PropTypes.bool, // 是否立即校验
    jsxshow: React.PropTypes.bool,
    jsxmode: React.PropTypes.string,
    jsxshowLabel: React.PropTypes.bool,
    jsxprefixCls: React.PropTypes.string,
    jsxflex: React.PropTypes.number,
    jsxname: React.PropTypes.string.isRequired,
    jsxplaceholder: React.PropTypes.string,
    jsxlabel: React.PropTypes.string,
    jsxtips: React.PropTypes.string,
    jsxrules: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    required: React.PropTypes.bool
};

FormField.defaultProps = {
    jsxshow: true, // 是否显示该块
    jsxshowLabel: true, // 是否展示 label
    jsxprefixCls: "kuma-uxform-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxname: "", // 表单字段
    jsxplaceholder: "", // 在未选值之前的占位符
    jsxlabel: "", // 左侧表单域标题
    jsxtips: "", // 提醒
    required: false
};

FormField.displayName = "FormField";

module.exports = FormField;
