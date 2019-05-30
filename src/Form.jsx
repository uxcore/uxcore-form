/**
 * Form Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import FormRow from 'uxcore-form-row';
import classnames from 'classnames';
import deepcopy from 'lodash/cloneDeep';
import deepEqual from 'deep-equal';
import Constants from 'uxcore-const';
import Promise from 'lie';
import PropTypes from 'prop-types';
import Validators from './Validators';
import KeyCode from './KeyCode';
import FormRowTitle from './FormRowTitle';
import FormCard from './FormCard'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.fields = {};
    this.errors = {};
    this.data = {};
    this.state = {};
    this.attachFormField = this.attachFormField.bind(this);
    this.detachFormField = this.detachFormField.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.getValues = this.getValues.bind(this);
    this.resetValues = this.resetValues.bind(this);
  }

  getValues(force) {
    const me = this;
    const { asyncValidate } = me.props;
    if (!asyncValidate) {
      const flag = me.doValidate(force);
      return {
        values: deepcopy(me.data),
        pass: flag,
      };
    }
    return new Promise((resolve) => {
      me.doValidate(force).then((pass) => {
        resolve({
          values: deepcopy(me.data),
          pass,
        });
      });
    });
  }

  /*
   * set Form values manually
   */

  setValues(data) {
    if (typeof data !== 'object') return;
    const me = this;
    const savedData = me.data;
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      if (!deepEqual(data[keys[i]], savedData[keys[i]])) {
        // see resetValues() to get the param meaning.
        if (me.fields[keys[i]]) {
          me.fields[keys[i]].handleDataChange(data[keys[i]] === undefined
            ? null
            : data[keys[i]], true, true);
        }
      }
    }
  }

  resetValues() {
    const me = this;
    const keys = Object.keys(me.fields);
    const data = me.props.jsxvalues || me.props.passedData || {};
    for (let i = 0; i < keys.length; i++) {
      // see uxcore-form-field for details
      // the first true means fromReset and don't do validate
      // the second true means slience and don't trigger form onChange
      if (me.fields[keys[i]]) {
        me.fields[keys[i]].handleDataChange(
          data[keys[i]] === undefined
            ? null
            : data[keys[i]], true, true,
        );
      }
    }
  }

  handleDataChange(field, fieldData, silence) {
    const me = this;
    me.data[field.props.jsxname] = fieldData.value;
    if (!silence) {
      me.props.jsxonChange(deepcopy(me.data), field.props.jsxname, fieldData.pass);
    }
  }

  attachFormField(field) {
    const name = field.getName();
    if (!name) {
      console.warn('Each field needs a name to identify itself');
    } else {
      this.fields[name] = field;
    }
  }

  detachFormField(field) {
    const name = field.getName();
    delete this.fields[name];
    delete this.data[name];
  }

  doValidate(force, always, onError = () => { }) {
    const me = this;
    let pass = true;
    const keys = Object.keys(me.fields);
    const { asyncValidate } = me.props;
    const errorArray = [];
    if (!asyncValidate) {
      for (let i = 0; i < keys.length; i++) {
        if (me.fields[keys[i]].getProps().jsxshow) {
          const itemPass = me.fields[keys[i]].doValidate(force, always);
          me.errors[keys[i]] = !itemPass;
          errorArray.push({ key: keys[i], error: !itemPass });
          if (!itemPass) {
            pass = false;
          }
        }
      }
      if (!pass) {
        onError(errorArray);
      }
      return pass;
    }
    return new Promise((resolve) => {
      const promises = [];
      for (let i = 0; i < keys.length; i++) {
        if (me.fields[keys[i]].getProps().jsxshow) {
          promises.push(me.fields[keys[i]].doValidate(force, always));
        }
      }
      Promise.all(promises).then((result) => {
        keys.forEach((key, index) => {
          me.errors[key] = result[index];
          errorArray.push({ key, error: result[index] });
        });
        const failItems = result.filter(item => item === false);
        if (failItems.length) {
          pass = false;
        }
        if (!pass) {
          onError(errorArray);
        }
        resolve(pass);
      });
    });
  }

  doValidateAndScroll(force, always) {
    return this.doValidate(force, always, (errorArray) => {
      let firstErrorItem;
      for (let i = 0; i < errorArray.length; i += 1) {
        const item = errorArray[i];
        if (item.error) {
          firstErrorItem = item.key;
          break;
        }
      }
      if (firstErrorItem && this.fields[firstErrorItem]) {
        const errorField = this.fields[firstErrorItem];
        const errorFieldNode = errorField.getDom();
        console.log(errorFieldNode);
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
        // compatible ability is over IE8.
        errorFieldNode.scrollIntoView();
      }
    });
  }


  isDirty() {
    const me = this;
    const { asyncValidate } = me.props;
    if (!asyncValidate) {
      return !me.doValidate();
    }
    return new Promise((resolve) => {
      me.doValidate().then((pass) => {
        resolve(!pass);
      });
    });
  }

  /*
   * 统一数据流，所有的 props，通过 Form -> FormRow -> FormField 向下传递，如果有的
   * 子元素是 FormField，则自动在他的外面包一层 FormRow。
   * @param {React Elements Array} children this.props.children
   */

  processChild() {
    const { children } = this.props;
    const length = React.Children.count(children);
    const elements = [];
    if (length === 0) {
      console.warn('FORM: You must pass children to the form component');
      return false;
    }

    React.Children.forEach(children, (child) => {
      // 如果是自己添加的 DOM 直接抛弃
      if (child && typeof child.type === 'function') {
        let { displayName } = child.type;
        if (displayName === 'EngineNode') {
          displayName = child.props._componentName;
        }
        if (/FormField/.test(displayName)) {
          elements.push(
            <FormRow>
              {child}
            </FormRow>,
          );
        } else if (/FormRow/.test(displayName) || /FormCard/.test(displayName)) {
          elements.push(child);
        }
      }
    });

    return elements;
  }

  render() {
    const me = this;
    const elements = me.processChild();

    return (
      <div
        className={classnames({
          [me.props.prefixCls]: true,
          [me.props.className]: !!me.props.className,
          'kuma-uxform-edit-mode': me.props.jsxmode === Constants.MODE.EDIT,
          'kuma-uxform-view-mode': me.props.jsxmode === Constants.MODE.VIEW,
        })}
      >
        {!!elements && elements.map((child, index) => (
          React.cloneElement(child, {
            mode: me.props.jsxmode,
            instantValidate: me.props.instantValidate,
            asyncValidate: me.props.asyncValidate,
            verticalAlign: me.props.verticalAlign,
            autoAdjustSpacing: me.props.autoAdjustSpacing,
            size: me.props.size,
            data: deepcopy(me.props.jsxvalues || me.props.passedData || {}),
            key: child.key || index,
            attachFormField: me.attachFormField,
            detachFormField: me.detachFormField,
            handleDataChange: me.handleDataChange,
            getValues: me.getValues,
            resetValues: me.resetValues,
            formPrefixCls: me.props.prefixCls,
          })
        ))}
      </div>
    );
  }
}

// 以 Form 的插件的形式给出
Form.FormRow = FormRow;
Form.FormRowTitle = FormRowTitle;
Form.FormCard = FormCard;


// Form.MentionFormField = MentionFormField;
Form.Constants = Constants;
Form.Validators = Validators;
Form.KeyCode = KeyCode;


Form.defaultProps = {
  prefixCls: 'kuma-uxform',
  jsxmode: Constants.MODE.EDIT,
  instantValidate: true,
  asyncValidate: false,
  jsxonChange: () => { },
  autoAdjustSpacing: false,
  className: '',
  children: undefined,
  jsxvalues: undefined,
};


// http://facebook.github.io/react/docs/reusable-components.html
Form.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  jsxmode: PropTypes.string,
  jsxvalues: PropTypes.object,
  asyncValidate: PropTypes.bool,
  instantValidate: PropTypes.bool,
  jsxonChange: PropTypes.func,
  children: PropTypes.node,
  autoAdjustSpacing: PropTypes.bool,
};

Form.displayName = 'Form';

export default Form;
