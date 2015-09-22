let classnames = require('classnames');
let Button = require('uxcore-button');
let assign = require("object-assign");

class ButtonGroupFormField extends React.Component {
    constructor(props) {
        super(props);
    }

    _processChild() {
        let me = this;
        let length = React.Children.count(me.props.children);
        if (!length) {
            return false;
        }
        let elements = React.Children.map(me.props.children, (child, index) => {
            let props = {};
            if (child.props.type == "submit") {
                props.onClick = () => {
                    let data = me.props.getValues();
                    child.props.onClick(data)
                }
            }
            if (child.props.type == "reset") {
                props.onClick = () => {
                    console.log("reset")
                    me.props.resetValues();
                }
             }
            return React.cloneElement(child, props);
        });

        return elements;
    }

    render() {
        let me = this;
        let elements = me._processChild();
        return (
            <div className={classnames({
                [me.props.jsxprefixCls]: true,
                [me.props.className]: !!me.props.className
            })} style={assign({}, me.props.style, {
                display: me.props.jsxshow ? "table" : "none"
            })}>
                {!!elements && elements}
            </div>
        )
    }
}

ButtonGroupFormField.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxflex: React.PropTypes.number,
    jsxshow: React.PropTypes.bool
};
ButtonGroupFormField.defaultProps = {
    jsxprefixCls: "kuma-form-field kuma-button-group-form-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxshow: true
};
ButtonGroupFormField.displayName = "ButtonGroupFormField";

module.exports = ButtonGroupFormField;