/**
 * Created by xy on 15/4/13.
 */
const React = require('react');
const SelectFormField = require('uxcore-select-form-field');
const Constants = require("uxcore-const");
const Select = require('uxcore-select2');
const assign = require('object-assign');
const deepcopy = require('deepcopy');
const classnames = require('classnames');
const {Option} = Select;
const selectOptions = ['onSelect', 'onDeselect', 'getPopupContainer', 'filterOption', 'allowClear', 'searchPlaceholder', 'tags', 'disabled', 'showSearch', 'placeholder', 'optionLabelProp', 'maxTagTextLength', 'dropdownMatchSelectWidth', 'dropdownClassName', 'notFoundContent'];

class SearchFormField extends SelectFormField {
    constructor(props) {
        super(props);
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-search-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    _processAdvanced() {
        let me = this;
        let {advancedOptions} = me.props;
        return advancedOptions.map((item) => {
            return <Option key={item.value} title={item.text}>{item.text}</Option>
        })
    }

    _processClassOptions() {
        let me = this;
        let {classOptions} = me.props;
        return classOptions.map((item) => {
            return <Option key={item.value} title={item.text}>{item.text}</Option>
        })
    }

    handleChange(value, label) {
        let me = this;
        let stateValue = deepcopy(me.state.value) || {};
        stateValue.main = value;
        me.handleDataChange(stateValue, false, label);
    }

    handleClassChange(value) {
        let me = this;
        let stateValue = deepcopy(me.state.value) || {};
        let label = me.state.label;
        stateValue.class = value;
        me.handleDataChange(stateValue, false, label);
    }

    handleAdvancedChange(value) {
        let me = this;
        let stateValue = deepcopy(me.state.value) || {};
        let label = me.state.label;
        stateValue.advanced = value;
        me.handleDataChange(stateValue, false, label);
    }

    handleIconClick(e) {
        let me = this;
        me.props.onIconClick(e);
    }


    renderField() {
        let me = this;
        let arr = [];
        let mode = me.props.jsxmode || me.props.mode;
        const hasClass = me.props.classOptions instanceof Array && me.props.classOptions.length > 0;
        const hasAdvance = me.props.advancedOptions instanceof Array && me.props.advancedOptions.length > 0;


        let options = {
            ref: "el",
            key: "select",
            className: classnames({
                'has-class': hasClass,
                'has-advance': hasAdvance,
                'kuma-uxform-main-search': true,
            }),
            optionFilterProp: me.props.optionFilterProp,
            combobox: me.props.combobox,
            onChange: me.handleChange.bind(me),
            onSearch: me.handleSearch.bind(me),
            key: 'search'
        };



        selectOptions.forEach((item, index) => {
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

        if (!!me.props.jsxfetchUrl) {
            options.filterOption = false;
        }
        if (!me.props.tidy && hasClass) {
            arr.push(me.renderClassOptions())
        }
        arr.push(<Select
                 {...options}>
                    {me.generateOptionsFromData()}
                </Select>);

        if (!me.props.tidy && hasAdvance) {
            arr.push(me.renderAdvancedOptions())
        }
        arr.push(
            <span className={classnames({
                "kuma-search-uxform-field-icon": true,
                "tidy-pattern": me.props.tidy
            })} key="icon" onClick={me.handleIconClick.bind(me)}>
                <i className="kuma-icon kuma-icon-search"></i>
            </span>
        );
        return arr;
    }

    renderClassOptions() {
        let me = this;
        let {className, dropdownClassName, onChange, ...otherOptions} = me.props.classConfig;
        let options = assign({}, {
            showSearch: false,
            key: 'class',
            dropdownAlign: {
                offset: [0, 0]
            },
            dropdownClassName: classnames({
                "kuma-uxform-class-dropdown": true,
                [dropdownClassName]: !!dropdownClassName 
            }),
            className: classnames({
                "kuma-uxform-class-search": true,
                [className]: !!className
            }),
            onChange: me.handleClassChange.bind(me)
        }, otherOptions);
        return <Select {...options}>
                    {me._processClassOptions()}
               </Select>
    }

    renderAdvancedOptions() {
        let me = this;
        let {className, dropdownClassName, onChange, ...otherOptions} = me.props.advancedConfig;
        let options = assign({}, {
            showSearch: false,
            key: 'advanced',
            className: classnames({
                'kuma-uxform-advanced-search': true,
                [className]: !!className
            }),
            dropdownClassName: classnames({
                "kuma-uxform-advanced-dropdown": true,
                [dropdownClassName]: !!dropdownClassName 
            }),
            dropdownAlign: {
                offset: [0, 0]
            },
            onChange: me.handleAdvancedChange.bind(me)
        }, otherOptions);
        return  <Select {...options}>
                    {me._processAdvanced()}
                </Select>
    }
}

SearchFormField.Option = Option;
SearchFormField.displayName = "SearchFormField";
SearchFormField.propTypes = assign({}, SelectFormField.propTypes, {
    advancedOptions: React.PropTypes.array,
    advancedConfig: React.PropTypes.object,
    classOptions: React.PropTypes.array,
    classConfig: React.PropTypes.object,
    tidy: React.PropTypes.bool,
    onIconClick: React.PropTypes.func
});
SearchFormField.defaultProps = assign({}, SelectFormField.defaultProps, {
    jsxshowLabel: false,
    combobox: true,
    showSearch: false,
    advancedConfig: {},
    classConfig: {},
    tidy: false,
    onIconClick: () => {}
});

module.exports = SearchFormField;
