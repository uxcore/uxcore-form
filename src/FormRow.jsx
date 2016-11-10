const React = require('react');
const classnames = require('classnames');

class FormRow extends React.Component {

  constructor(props) {
    super(props);
    this.totalFlex = 0;
  }

  _processChild(children) {
    const me = this;
    me.totalFlex = 0;
    const length = React.Children.count(children);
    const elements = [];
    if (length === 0) {
      console.warn('FORM: You must pass children to the form component');
      return false;
    }
    React.Children.forEach(children, (child, index) => {
      // 如果是自己添加的 DOM 直接抛弃
      if (typeof child.type == 'function') {
        let displayName = child.type.displayName;
        if (displayName === 'EngineNode') {
          displayName = child.props._componentName;
        }
        if (/FormField/.test(displayName)) {
          if (child.props.jsxshow) {
            me.totalFlex += child.props.jsxflex;
          }
          elements.push(child);
        }
      }
    });

    return elements;
  }

  render() {
    const me = this;
    const elements = me._processChild(me.props.children);
    return (
      <div className={classnames({
        [me.props.jsxprefixCls]: true,
        [me.props.className]: !!me.props.className,
      })}
      >
        {!!elements && elements.map((child, index) => {
          const value = me.props.data[child.props.jsxname];
          return React.cloneElement(child, {
            mode: me.props.mode,
            jsxinstant: me.props.instantValidate,
            value,
            key: child.props.jsxname || index,
            style: { width: `${child.props.jsxflex / me.totalFlex * 100}%` },
            attachFormField: me.props.attachFormField,
            detachFormField: me.props.detachFormField,
            handleDataChange: me.props.handleDataChange,
            getValues: me.props.getValues,
            resetValues: me.props.resetValues,
          });

          return child;
        })}
      </div>
    );
  }
}

FormRow.defaultProps = {
  jsxprefixCls: 'kuma-uxform-row',
};
FormRow.propTypes = {
  jsxprefixCls: React.PropTypes.string,
};
FormRow.displayName = 'FormRow';

module.exports = FormRow;
