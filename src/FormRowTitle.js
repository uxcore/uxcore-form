/**
 * @author: zhouquan.yezq
 * @time: 8/7 2015
 * Form Row Title
 */
let Constants = require("uxcore-const");
let classnames = require("classnames");

class FormRowTitle extends React.Component {

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
                {me.props.jsxtitle}
                {!!length && React.Children.map(me.props.children, function(item) {
                    return item;
                })}
            </div>
        );
    }

};

FormRowTitle.propTypes= {
    jsxprefixCls: React.PropTypes.string,
    jsxtitle: React.PropTypes.string
};

FormRowTitle.defaultProps = {
    jsxprefixCls: "kuma-uxform-row-title",
    jsxtitle: ""
};

FormRowTitle.displayName = "FormRowTitle";

module.exports = FormRowTitle;
