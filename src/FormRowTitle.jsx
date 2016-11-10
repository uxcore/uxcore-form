/**
 * @author: zhouquan.yezq
 * @time: 8/7 2015
 * Form Row Title
 */
const React = require('react');
const classnames = require('classnames');

const FormRowTitle = (props) => {
  const length = React.Children.count(props.children);
  return (
    <div
      className={classnames({
        [props.jsxprefixCls]: true,
        [props.className]: !!props.className,
      })}
    >
      {props.jsxtitle}
      {!!length && React.Children.map(props.children, item => item)}
    </div>
  );
};

FormRowTitle.propTypes = {
  jsxprefixCls: React.PropTypes.string,
  jsxtitle: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

FormRowTitle.defaultProps = {
  jsxprefixCls: 'kuma-uxform-row-title',
  jsxtitle: '',
};

FormRowTitle.displayName = 'FormRowTitle';

module.exports = FormRowTitle;
