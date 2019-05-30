/**
 * @author: zhouquan.yezq
 * @time: 8/7 2015
 * Form Row Title
 */
import React from 'react';
import classnames from 'classnames';
import Title from 'uxcore-title';
import PropTypes from 'prop-types';

const FormRowTitle = ({
  children, className, prefixCls, jsxtitle, type
}) => {
  const length = React.Children.count(children);
  return (
    <div
      className={classnames({
        [className]: !!className,
        [prefixCls]: true,
      })}
    >
      <Title type={type}>
        {jsxtitle}
      </Title>
      {!!length && React.Children.map(children, item => item)}
    </div>
  );
};

FormRowTitle.propTypes = {
  prefixCls: PropTypes.string,
  jsxtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string
};

FormRowTitle.defaultProps = {
  prefixCls: 'kuma-uxform-row-title',
  jsxtitle: '',
  children: undefined,
  className: '',
  type: 'secondary'
};

FormRowTitle.displayName = 'FormRowTitle';

export default FormRowTitle;
