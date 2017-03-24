const React = require('react');
const SelectFormField = require('uxcore-select-form-field');
const Select = require('uxcore-select2');
const assign = require('object-assign');
const deepcopy = require('lodash/cloneDeep');
const classnames = require('classnames');
const Icon = require('uxcore-icon');

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

  handleChange(value, label) {
    const me = this;
    const stateValue = deepcopy(me.state.value) || {};
    stateValue.main = value;
    me.handleDataChange(stateValue, false, label);
  }

  handleClassChange(value) {
    const me = this;
    const stateValue = deepcopy(me.state.value) || {};
    const label = me.state.label;
    stateValue.class = value;
    me.handleDataChange(stateValue, false, label);
  }

  handleAdvancedChange(value) {
    const me = this;
    const stateValue = deepcopy(me.state.value) || {};
    const label = me.state.label;
    stateValue.advanced = value;
    me.handleDataChange(stateValue, false, label);
  }

  handleIconClick(e) {
    const me = this;
    me.props.onIconClick(e);
  }


  renderField() {
    const me = this;
    const arr = [];
    // const mode = me.props.jsxmode || me.props.mode;
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
    arr.push(
      <span
        className={classnames({
          'kuma-search-uxform-field-icon': true,
          'tidy-pattern': me.props.tidy,
        })} key="icon"
        onClick={me.handleIconClick}
      >
        <Icon name="sousuo" />
      </span>
    );
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
  advancedOptions: React.PropTypes.array,
  advancedConfig: React.PropTypes.object,
  classOptions: React.PropTypes.array,
  classConfig: React.PropTypes.object,
  tidy: React.PropTypes.bool,
  onIconClick: React.PropTypes.func,
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

module.exports = SearchFormField;
