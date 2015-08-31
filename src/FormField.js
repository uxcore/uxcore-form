/**
 *  1:  每个field需要单独的validate, 这样才能保证单个的field输入时候的validate, 使用state.error来决定验证是否通过，是否显示
 *      error信息
 *  2:  Form的save Action，需要对每个field做validate, 如果验证通过，保存成功后，mode 还需要改变
 *  3:  刚开始的纠结点在，item2 会重新render所有form field, 感觉是要render 2次，一次在validate的时候，一次在save后，改变mode
 *      但仔细想，这两个不可能同时发生
 */

let Constants = require("./Constants");
let classnames = require("classnames");

class FormField extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            value: props.value,
            formatValue: this.formatValue(props.value),
            error: false,
            errMsg: ''
        };
    }

    componentDidMount() {
        let me = this;
        me.props.attachFormField(me);
        me.props.handleDataChange(me, me.props.value);
    }

    componentWillUnmount () {
        this.props.detachFormField(this);
    }

    getName() {
        return this.props.jsxname;
    }
    
    /*
     * Fired when field value changes，update form's state and then trigger re-render.
     */

    handleDataChange(value) {
        let me = this;
        me.setState({
            value: value,
            formatValue: me.formatValue(value)
        }, () => {
            me.doValidate();
        });
        me.props.handleDataChange(me, value);
        
    }


    /**
     * @return {boolean} if validate pass, return true, or, return false
     * if no rule, it means validate pass.
     */

    doValidate () {
        let me = this;
        if (me.props.jsxrules) {
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
        if (me.props.mode != Constants.MODE.EDIT) return;
        if(!!this.props.jsxtips) {
            return <li className="kuma-form-tips">
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
        if (me.props.mode != Constants.MODE.EDIT) return;
        return  <li className="kuma-form-errormsg">{me.state.errMsg}</li>
    }

    renderLabel() {
        return  <label className="kuma-label">
                    {this.props.jsxlabel}
                    <i>{this.state.required ? "*" : ""}</i>
                </label>
    }

    addSpecificClass(classname) {
       return this.props.jsxprefixCls;
    }
    
    render() {
        let me = this;

        return (
            <div className={classnames({
                [me.addSpecificClass()]: true,
                [me.props.className]: !!me.props.className
            })}>
                {me.renderLabel()}
                <ul className="kuma-form-field-content">
                    <li>{me.renderField()}</li>
                    {me.renderTips()}
                    {!!me.state.error && me.renderErrorMsg()}
                </ul>
            </div>
        );
    }

};

FormField.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxname: React.PropTypes.string.isRequired,
    jsxplaceholder: React.PropTypes.string,
    jsxlabel: React.PropTypes.string,
    jsxtips: React.PropTypes.string,
    jsxrules: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
};

FormField.defaultProps = {
    jsxprefixCls: "kuma-form-field", // 默认类名
    jsxname: "", // 表单字段
    jsxplaceholder: "", // 在未选值之前的占位符
    jsxlabel: "LABEL", // 左侧表单域标题
    jsxtips: "" // 提醒
};

FormField.displayName = "FormField";

module.exports = FormField;