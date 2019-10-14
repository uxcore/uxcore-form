import React from 'react';
import SelectFormField from 'uxcore-select-form-field';
import Select from 'uxcore-select2';
import assign from 'object-assign';
import deepcopy from 'lodash/cloneDeep';
import classnames from 'classnames';
import Icon from 'uxcore-icon';
import PropTypes from 'prop-types';
import Constants from 'uxcore-const';

const { Option } = Select;
const selectOptions = ['onSelect', 'onDeselect', 'getPopupContainer', 'filterOption', 'allowClear', 'searchPlaceholder', 'tags', 'disabled', 'showSearch', 'placeholder', 'optionLabelProp', 'maxTagTextLength', 'dropdownMatchSelectWidth', 'dropdownClassName', 'notFoundContent'];

class SearchFormField extends SelectFormField {
  constructor(props) {
    super(props);
    this.handleIconClick = this.handleIconClick.bind(this);
  }
  /* eslint-disable class-methods-use-this */
  addSpecificClass() {
    return 'kuma-search-uxform-field';
  }
  /* eslint-enable class-methods-use-this */

  _getFieldSize() {
    return this.props.size || this.props.jsxsize || 'large';
  }

  _processAdvanced() {
    const me = this;
    const { advancedOptions } = me.props;
    return advancedOptions.map(item =>
      <Option key={item.value} title={item.text}>{item.text}</Option>);
  }

  processClassOptions() {
    const me = this;
    const { classOptions } = me.props;
    return classOptions.map(item =>
      <Option key={item.value} title={item.text}>{item.text}</Option>);
  }

  handleChange(value) {
    const me = this;
    const stateValue = deepcopy(me.state.value) || {};
    stateValue.main = value;
    me.handleDataChange(stateValue);
  }

  handleClassChange(value) {
    const me = this;
    const stateValue = deepcopy(me.state.value) || {};
    stateValue.class = value;
    me.handleDataChange(stateValue);
  }

  handleAdvancedChange(value) {
    const me = this;
    const stateValue = deepcopy(me.state.value) || {};
    stateValue.advanced = value;
    me.handleDataChange(stateValue);
  }

  handleIconClick(e) {
    this.props.onIconClick(e, this.state.value);
  }


  renderField() {
    const me = this;
    const arr = [];
    const mode = me.props.jsxmode || me.props.mode;
    const { value } = me.state
    if (mode === Constants.MODE.VIEW) {
      return (
        value ? value.class ? `${value.class}-${value.main}` : value.main : '--'
      )
    }
    const hasClass = me.props.classOptions instanceof Array && me.props.classOptions.length > 0;
    const hasAdvance = me.props.advancedOptions instanceof Array
      && me.props.advancedOptions.length > 0;
    const options = {
      ref: 'el',
      className: classnames({
        'has-class': hasClass,
        'has-advance': hasAdvance,
        'kuma-uxform-main-search': true,
      }),
      dropdownClassName: classnames('kuma-uxform-main-search-dropdown', {
        [me.props.dropdownClassName]: !!me.props.dropdownClassName,
      }),
      optionFilterProp: me.props.optionFilterProp,
      dropdownMatchSelectWidth: false,
      combobox: me.props.combobox,
      onChange: me.handleChange.bind(me),
      onSearch: me.handleSearch.bind(me),
      key: 'search',
      size: this._getFieldSize(),
    };

    selectOptions.forEach((item) => {
      if (item in me.props) {
        options[item] = me.props[item];
      }
    });

    if (Object.keys(me.props.jsxdata).length > 0) {
      options.optionFilterProp = 'title';
    }

    // only jsxfetchUrl mode need pass label, for the options always change.
    // when mounted, state.label is undefined, which cause defalutValue cannot be used.
    if (!!me.props.jsxfetchUrl && !!me.state.label && me.state.label.length !== 0) {
      options.label = me.state.label || [];
    }

    if (!me.props.combobox || me.state.fromReset) {
      options.value = me.state.value.main || [];
    }

    if (me.props.jsxfetchUrl) {
      options.filterOption = false;
    }
    if (!me.props.tidy && hasClass) {
      arr.push(me.renderClassOptions());
    }
    arr.push(<Select
      {...options}
    >
      {me._generateOptionsFromData()}
    </Select>);

    if (!me.props.tidy && hasAdvance) {
      arr.push(me.renderAdvancedOptions());
    }
    arr.push(<span
      className={classnames({
        'kuma-search-uxform-field-icon': true,
        'tidy-pattern': me.props.tidy,
      })}
      key="icon"
      onClick={me.handleIconClick}
    >
      <Icon usei name="sousuo" />
    </span>);
    return arr;
  }

  renderClassOptions() {
    const me = this;
    const { className, dropdownClassName, ...otherOptions } = me.props.classConfig;
    const options = assign({}, {
      showSearch: false,
      key: 'class',
      dropdownAlign: {
        offset: [0, 0],
      },
      dropdownClassName: classnames({
        'kuma-uxform-class-dropdown': true,
        [dropdownClassName]: !!dropdownClassName,
      }),
      className: classnames({
        'kuma-uxform-class-search': true,
        [className]: !!className,
      }),
      transitionName: '',
      size: this._getFieldSize(),
    }, otherOptions, {
      onChange: me.handleClassChange.bind(me),
    });
    return (<Select {...options}>
      {me.processClassOptions()}
    </Select>);
  }

  renderAdvancedOptions() {
    const me = this;
    const { className, dropdownClassName, ...otherOptions } = me.props.advancedConfig;
    const options = assign({}, {
      showSearch: false,
      key: 'advanced',
      className: classnames({
        'kuma-uxform-advanced-search': true,
        [className]: !!className,
      }),
      dropdownClassName: classnames({
        'kuma-uxform-advanced-dropdown': true,
        [dropdownClassName]: !!dropdownClassName,
      }),
      dropdownAlign: {
        offset: [0, 0],
      },
      transitionName: '',
      size: this._getFieldSize(),
    }, otherOptions, {
      onChange: me.handleAdvancedChange.bind(me),
    });
    return (<Select {...options}>
      {me._processAdvanced()}
    </Select>);
  }
}

SearchFormField.Option = Option;
SearchFormField.displayName = 'SearchFormField';
SearchFormField.propTypes = assign({}, SelectFormField.propTypes, {
  advancedOptions: PropTypes.array,
  advancedConfig: PropTypes.object,
  classOptions: PropTypes.array,
  classConfig: PropTypes.object,
  tidy: PropTypes.bool,
  onIconClick: PropTypes.func,
});
SearchFormField.defaultProps = assign({}, SelectFormField.defaultProps, {
  jsxshowLabel: false,
  combobox: true,
  showSearch: false,
  advancedConfig: {},
  classConfig: {},
  tidy: false,
  onIconClick: () => { },
});

export default SearchFormField;
