import React from 'react';
import classnames from 'classnames';
import Card from 'uxcore-card'
import FormRow from 'uxcore-form-row'
import deepCopy from 'lodash/cloneDeep'

class FormCard extends Card {
  processChild(children) {
    const length = React.Children.count(children);
    const elements = [];
    if (length === 0) {
      console.warn('FORM: You must pass children to the form component');
      return false;
    }
    React.Children.forEach(children, (child) => {
      // 如果是自己添加的 DOM 直接抛弃
      if (child && typeof child.type === 'function') {
        const { displayName } = child.type;
        if (/FormField/.test(displayName)) {
          elements.push(
            <FormRow>
              {child}
            </FormRow>
          );
        } else if (/FormRow/.test(displayName)) {
          elements.push(child);
        }
      }
    });
    return elements;
  }

  renderContent() {
    const me = this;
    const { collapsed } = me.state;
    const {
      prefixCls,
      children,
      contentPaddingSize,
      keepAlive
    } = me.props;
    if (!keepAlive) {
      console.error('FormCard不允许keepAlive参数为false，否则将导致无法获取FormCard下的表单值！')
    }
    let elements = me.processChild(children);
    let style = {
      height: collapsed ? 0 : me.height ,
      paddingTop: collapsed ? 0 : 24,
      paddingBottom: collapsed ? 0 : 0
    }
    return (
      <div
        className={classnames(`${prefixCls}-content`, {
          [`${prefixCls}-content-${contentPaddingSize}-padding`]: !!contentPaddingSize,
        })}
        ref={(c) => {me.content = c}}
        style={style}
      >
        {!!elements && elements.map((child, index) => (
          React.cloneElement(child, {
            mode: me.props.mode,
            instantValidate: me.props.instantValidate,
            asyncValidate: me.props.asyncValidate,
            verticalAlign: me.props.verticalAlign,
            autoAdjustSpacing: me.props.autoAdjustSpacing,
            size: me.props.size,
            data: deepCopy(me.props.data|| {}),
            key: child.key || index,
            attachFormField: me.props.attachFormField,
            detachFormField: me.props.detachFormField,
            handleDataChange: me.props.handleDataChange,
            getValues: me.props.getValues,
            resetValues: me.props.resetValues,
            formPrefixCls: me.props.formPrefixCls
          })
        ))}
      </div>
    );
  }
}

FormCard.defaultProps = {
  ...Card.defaultProps,
  keepAlive: true
};

FormCard.propTypes = {
  ...Card.propTypes,
};

FormCard.displayName = 'FormCard';

export default FormCard;
