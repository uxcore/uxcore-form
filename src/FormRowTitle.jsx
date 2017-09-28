/**
 * @author: zhouquan.yezq
 * @time: 8/7 2015
 * Form Row Title
 */
import React from 'react';
import classnames from 'classnames';
import Title from 'uxcore-title';
import PropTypes from 'prop-types';

const FormRowTitle = (props) => {
  const length = React.Children.count(props.children);
  return (
    <div
      className={classnames({
        [props.className]: !!props.className,
        [props.jsxprefixCls]: true,
      })}
    >
      <Title type="secondary">{props.jsxtitle}</Title>
      {!!length && React.Children.map(props.children, item => item)}
    </div>
  );
};

FormRowTitle.propTypes = {
  jsxprefixCls: PropTypes.string,
  jsxtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

FormRowTitle.defaultProps = {
  jsxprefixCls: 'kuma-uxform-row-title',
  jsxtitle: '',
};

FormRowTitle.displayName = 'FormRowTitle';

export default FormRowTitle;
