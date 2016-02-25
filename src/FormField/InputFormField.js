let React = require('react');
let ReactDOM = require('react-dom');
let FormField = require('./FormField');
let Constants = require("uxcore-const");
let classnames = require('classnames');
let assign = require('object-assign');

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

class LeftAddon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className={classnames({
                "kuma-uxform-left-icon": true,
                "kuma-uxform-left-icon-focus": !!me.props.focus
            })}>
                {me.props.children}
            </div>
        );
    }
}

LeftAddon.defaultProps = {};
LeftAddon.propTypes = {};
LeftAddon.displayName = "LeftAddon";


class RightAddon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className="kuma-uxform-right-icon ">
                {me.props.children}
            </div>
        );
    }
}

RightAddon.defaultProps = {};
RightAddon.propTypes = {};
RightAddon.displayName = "RightAddon";


/**
 * extend FormField, rewrite renderField method
 */
class InputFormField extends FormField {
    constructor(props) {
        super(props);
    }

    getValue()  {
        return this.refs.root.getDOMNode().value
    }

    handleChange(e) {
        let me = this;
        let {autoTrim} = me.props;
        let value = e.currentTarget.value;
        if (autoTrim) {
            value = me.trim(value);
        }
        me.handleDataChange(me.deFormatValue(value));
    }

    trim(str) {
        return str.replace(/(^\s+|\s+$)/g, "");
    }

    handleFocus(e) {
        this.setState({
            focus: true
        });
        this.props.onFocus(e);

    }

    handleBlur(e) {
        let me = this;
        me.setState({
            focus: false
        });
        let pass = true
        if (me.props.validateOnBlur) {
            pass = me.doValidate();
        }
        me.props.onBlur(e, pass);
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

    getCount() {
        let me = this;
        let children = me.props.children;
        let element;
        React.Children.map(children, (child) => {
            if (child && typeof child.type == 'function' && child.type.displayName == 'FormCount' ) {
                element = child;
            }
        });
        if (!!element) {
            let total = element.props.total;
            let Count = React.cloneElement(element, {
                length: !!me.state.value ? me.state.value.length : 0,
                key: "count"
            });

            return {
                element: Count,
                total: total
            };
        }
    }

    renderLeftAddon() {
        let me = this;
        let children = me.props.children;
        let element;
        React.Children.map(children, (child) => {
            if (child && typeof child.type == 'function' && child.type.displayName == 'LeftAddon' ) {
                element = child;
            }
        })
        if (!!element) {
            return React.cloneElement(element, {
                focus: !!me.state.focus,
                key: "left"
            });
        }
    }

    renderRightAddon() {
        let me = this;
        let children = me.props.children;
        let element;
        React.Children.map(children, (child) => {
            if (child && typeof child.type == 'function' && child.type.displayName == 'RightAddon' ) {
                element = child;
            }
        })

        if (!!element) {
            return React.cloneElement(element, {
                key: "right"
            });
        }
    }

    renderField() {
        let me = this;
        let arr = [];
        let mode = me.props.jsxmode || me.props.mode;
        let count = me.getCount();
        let leftAddon = me.renderLeftAddon();
        let rightAddon = me.renderRightAddon();
        let children = me.props.children;
        if (mode == Constants.MODE.EDIT) {
            let otherOptions = {};
            // if (!!count) {
            //     otherOptions.maxLength = count.total + "";
            // }
            if (!!leftAddon) {
                arr.push(leftAddon);
            }
            arr.push(<input
                    className={classnames({
                        "kuma-input": true,
                        'kuma-uxform-input-has-right': !!count || !!rightAddon,
                        "kuma-uxform-input-has-left": !!leftAddon
                    })}
                    ref="root"
                    type="text"
                    key="input"
                    placeholder={me.props.jsxplaceholder}
                    disabled={(me.props.jsxdisabled == "disabled" || me.props.jsxdisabled == true) ? "disabled" : ""}
                    name={me.props.key}
                    value={me.state.formatValue}
                    onFocus={me.handleFocus.bind(me)}
                    onBlur={me.handleBlur.bind(me)}
                    onChange={me.handleChange.bind(me)}
                    {...otherOptions} />);

            if (!!rightAddon) {
                arr.push(rightAddon);
            }
            else if (!!count) {
                arr.push(count.element);
            }
        }
        else if (mode == Constants.MODE.VIEW) {
            arr.push(<span key="text">{me.state.formatValue}</span>)
        }
        return arr;
    }
}

InputFormField.Count = FormCount;
InputFormField.LeftAddon = LeftAddon;
InputFormField.RightAddon = RightAddon;
InputFormField.propTypes = assign({}, FormField.propTypes, {
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    validateOnBlur: React.PropTypes.bool,
    autoTrim: React.PropTypes.bool
});
InputFormField.defaultProps = assign({}, FormField.defaultProps, {
    onBlur: () => {},
    onFocus: () => {},
    validateOnBlur: false
});
InputFormField.displayName = "InputFormField";
module.exports = InputFormField;
