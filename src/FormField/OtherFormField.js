let classnames = require('classnames');
let assign = require('object-assign');

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
            })} style={assign({}, me.props.style, {
                display: me.props.jsxshow ? "table" : "none"
            })}>
                {me.props.children}
            </div>
        );
    }
    
} 


OtherFormField.defaultProps = {
    jsxprefixCls: "kuma-uxform-field kuma-other-uxform-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxshow: true
};

OtherFormField.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxflex: React.PropTypes.number,
    jsxshow: React.PropTypes.bool
};

OtherFormField.displayName = "OtherFormField";

module.exports = OtherFormField;

 