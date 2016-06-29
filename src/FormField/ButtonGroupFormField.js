const React = require('react');
const ReactDOM = require('react-dom');
const classnames = require('classnames');
const assign = require("object-assign");

class ButtonGroupFormField extends React.Component {
    constructor(props) {
        super(props);
    }

    _processChild() {
        let me = this;
        let containsChildren = React.Children.count(me.props.children) > 0;
        if (!containsChildren) {
            return false;
        }

        //使用forEach,剔除不合法的child,比如null或undefined
        let elements = [];

        React.Children.forEach(me.props.children, (child, index) => {
            if (React.isValidElement(child)) {
                let props = { key: index };

                if (child.props.action == "submit") {

                    //警告断言, 在uxcore-form外直接使用时,不能正常工作,这里给出警告信息
                    if(!me.props.getValues || typeof me.props.getValues !== 'function') {
                        console.warn("getValues method missing, the submit button will works incorrectly");
                    }

                    props.onClick = () => {
                        let data = me.props.getValues();
                        child.props.onClick(data)
                    }
                }
                if (child.props.action == "reset") {

                    //警告断言, 在uxcore-form外直接使用时,不能正常工作,这里给出警告信息
                    if(!me.props.resetValues || typeof me.props.resetValues !== 'function') {
                        console.warn('resetValues method missing, the reset button will works incorrectly');
                    }

                    props.onClick = () => {
                        me.props.resetValues();
                    }
                }

                elements.push(React.cloneElement(child, props));
            }
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
    jsxprefixCls: "kuma-uxform-field kuma-button-group-uxform-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxshow: true
};
ButtonGroupFormField.displayName = "ButtonGroupFormField";

module.exports = ButtonGroupFormField;