let classnames = require("classnames");

class FormRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        let length = React.Children.count(me.props.children);
        return (
            <div className={classnames({
                [me.props.jsxprefixCls]: true,
                [me.props.className]: !!me.props.className
            })}>
                {!!length && React.Children.map(me.props.children, function(child) {
                    let value = me.props.data[child.props.jsxname];
                    return React.cloneElement(child, {
                        mode: me.props.mode,
                        value: value,
                        attachFormField: me.props.attachFormField,
                        detachFormField: me.props.detachFormField,
                        handleDataChange: me.props.handleDataChange
                    });

                    return child;
                })}
            </div>
        );

    }
}

FormRow.defaultProps = {
    jsxprefixCls: "kuma-form-row" 
};
FormRow.propTypes = {
    jsxprefixCls: React.PropTypes.string
};
FormRow.displayName = "FormRow";

module.exports = FormRow;
