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
  children, className, prefixCls, jsxtitle,
}) => {
  const length = React.Children.count(children);
  return (
    <div
      className={classnames({
        [className]: !!className,
        [prefixCls]: true,
      })}
    >
      <Title type="secondary">
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
};

FormRowTitle.defaultProps = {
  prefixCls: 'kuma-uxform-row-title',
  jsxtitle: '',
  children: undefined,
  className: '',
};

FormRowTitle.displayName = 'FormRowTitle';

export default FormRowTitle;
