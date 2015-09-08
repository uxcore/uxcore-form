let classnames = require('classnames');

class OtherFormField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        return (
            <div className={classnames({
                [me.props.jsxprefixCls]: true,
                [me.props.className]: !!me.props.className
            })} style={me.props.style}>
                {me.props.children}
            </div>
        );
    }
    
} 


OtherFormField.defaultProps = {
    jsxprefixCls: "kuma-form-field kuma-other-form-field", // 默认类名
    jsxflex: 1 // 占 Form 的比例，类似于 css3 中的 flex-box
};

OtherFormField.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxflex: React.PropTypes.number
};

OtherFormField.displayName = "OtherFormField";

module.exports = OtherFormField;

 