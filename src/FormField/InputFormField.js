let FormField = require('./FormField');
let Constants = require("../Constants");
let classnames = require('classnames');


class FormCount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className="kuma-uxform-count">{me.props.length + "/" + me.props.total}</div>
        );
    }

}

FormCount.defaultProps = {};
FormCount.propTypes = {
    length: React.PropTypes.number,
    total: React.PropTypes.number
};

FormCount.displayName = "FormCount";



/**
 * extend FormField, rewrite renderField method
 **/
class InputFormField extends FormField {
    constructor(props) {
        super(props);
    }

    getValue()  {
        return this.refs.root.getDOMNode().value
    }

    handleChange(e) {
        let me = this;
        let value = e.currentTarget.value;
        me.handleDataChange(me.deFormatValue(value));
    }

    deFormatValue(value) {
        return value;
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-input-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderCount() {
        let me = this;
        let children = me.props.children;
        let element;
        React.Children.map(children, (child) => {
            if (child && typeof child.type == 'function' && child.type.displayName == 'FormCount' ) {
                element = child;
            }
        });
        if (!!element) {
            return React.cloneElement(element, {
                length: !!me.state.value ? me.state.value.length : 0,
                key: "count"
            })
        }
    }

    renderField() {
        let me = this;
        let arr = [];
        let mode = me.props.jsxmode || me.props.mode;
        let count = me.renderCount()
        let children = me.props.children;
        if (mode == Constants.MODE.EDIT) {
            arr.push(<input
                    className={classnames({
                        "kuma-input": true,
                        'kuma-uxform-input-has-right': !!count
                    })}
                    ref="root"
                    type="text"
                    key="input"
                    placeholder={me.props.jsxplaceholder}
                    disabled={(me.props.jsxdisabled == "disabled" || me.props.jsxdisabled == true) ? "disabled" : ""}
                    name={me.props.key}
                    value={me.state.formatValue}
                    onChange={me.handleChange.bind(me)} />);
            arr.push(count);
        }
        else if (mode == Constants.MODE.VIEW) {
            arr.push(<span key="text">{me.state.formatValue}</span>)
        }
        return arr;
    }
}

InputFormField.Count = FormCount;
InputFormField.propTypes = FormField.propTypes;
InputFormField.defaultProps = FormField.defaultProps;
InputFormField.displayName = "InputFormField";
module.exports = InputFormField;
