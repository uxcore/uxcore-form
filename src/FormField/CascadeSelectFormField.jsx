import React from 'react';
import FormField from 'uxcore-form-field';
import Constants from 'uxcore-const';
import Select from 'uxcore-select2';
import assign from 'object-assign';
import deepcopy from 'lodash/cloneDeep';
import PropTypes from 'prop-types';

const { Option } = Select;

class CascadeSelectFormField extends FormField {
  getDataLength() {
    const me = this;
    return me.props.jsxdata.length;
  }

  handleChange(i, value) {
    const me = this;
    let values = deepcopy(me.state.value || []);
    if (values[i]) {
      values = values.slice(0, i);
      values.push(value);
    } else {
      values[i] = value;
    }
    me.handleDataChange(values);
  }

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-cascade-select-uxform-field`;
    }
    return me.props.jsxprefixCls;
  }

  renderField() {
    const me = this;
    const length = me.getDataLength();
    const arr = [];
    let data = {};
    const mode = me.props.jsxmode || me.props.mode;
    if (mode === Constants.MODE.EDIT) {
      try {
        data = me.props.jsxdata.contents;
      } catch (e) {
        console.warn(e.message);
        return null;
      }

      /*
       * 如果 value 存在相应的值，则填充下一级的选择，
       * 如果 value 不存在，则填充空数组，
       * 如果 data 中不包含 contents，则证明级联选择生成已结束，则跳出循环
       */
      const stateValue = me.state.value || []; // 预防 value 是 undefined 的情况
      for (let i = 0; i < length; i++) {
        const options = data.map((item, index) => (
          <Option key={index} value={item.value}>{item.text}</Option>
        ));

        const placeholder = me.props.jsxplaceholder;

        let selectOptions = {};

        const selectKeys = Object.keys(Select.RcSelect.propTypes)
          .filter(key => ['defaultValue'].indexOf(key) === -1);
        selectKeys.forEach((key) => {
          selectOptions[key] = me.props[key];
        });
        selectOptions = {
          ...selectOptions,
          ref: 'el',
          key: 'select',
          optionLabelProp: 'children',
          style: me.props.jsxstyle,
          getPopupContainer: me.props.getPopupContainer,
          size: me.getSize(),
          searchPlaceholder: ((placeholder instanceof Array) ? placeholder[i] : placeholder),
          placeholder: ((placeholder instanceof Array) ? placeholder[i] : placeholder),
        };
        selectOptions.onChange = me.handleChange.bind(me, i);
        selectOptions.value = stateValue[i] || [];
        if (i !== 0) {
          arr.push(<span key={`split${i}`} className="kuma-uxform-split">-</span>);
        }
        arr.push(<Select {...selectOptions} key={i}>
          {options}
        </Select>);
        if (stateValue[i]) {
          data = data.filter(item => item.value === stateValue[i])[0];
          data = data.contents;
          if (!data) break;
        } else {
          data = [];
        }
      }
    } else if (mode === Constants.MODE.VIEW) {
      if (me.state.value instanceof Array) {
        data = me.props.jsxdata;
        const textArr = me.state.value.map((item) => {
          data = data.contents.filter(ele => ele.value === item)[0];
          return data.text;
        });
        arr.push(<span key="cascade">{textArr.join(' ') || '--'}</span>);
      }
    }
    return arr;
  }
}

CascadeSelectFormField.propTypes = assign({}, FormField.propTypes, {
  jsxstyle: PropTypes.object,
  jsxshowSearch: PropTypes.bool,
  jsxplaceholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  jsxdata: PropTypes.object,
});
CascadeSelectFormField.defaultProps = assign({}, FormField.defaultProps, {
  jsxshowSearch: false,
  jsxplaceholder: '请下拉选择',
});
CascadeSelectFormField.displayName = 'CascadeSelectFormField';

export default CascadeSelectFormField;
