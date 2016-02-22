"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classnames = require("classnames");

var FormRow = function (_React$Component) {
    _inherits(FormRow, _React$Component);

    function FormRow(props) {
        _classCallCheck(this, FormRow);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormRow).call(this, props));

        _this.totalFlex = 0;
        return _this;
    }

    _createClass(FormRow, [{
        key: "_processChild",
        value: function _processChild(children) {
            var me = this;
            me.totalFlex = 0;
            var length = React.Children.count(children);
            var elements = [];
            if (length == 0) {
                console.warn("FORM: You must pass children to the form component");
                return false;
            }
            React.Children.forEach(children, function (child, index) {
                // 如果是自己添加的 DOM 直接抛弃
                if (typeof child.type == 'function') {
                    if (/FormField/.test(child.type.displayName)) {
                        if (child.props.jsxshow) {
                            me.totalFlex += child.props.jsxflex;
                        }
                        elements.push(child);
                    }
                }
            });

            return elements;
        }
    }, {
        key: "render",
        value: function render() {
            var _classnames;

            var me = this;
            var elements = me._processChild(me.props.children);
            return React.createElement(
                "div",
                { className: classnames((_classnames = {}, _defineProperty(_classnames, me.props.jsxprefixCls, true), _defineProperty(_classnames, me.props.className, !!me.props.className), _classnames)) },
                !!elements && elements.map(function (child, index) {
                    var value = me.props.data[child.props.jsxname];
                    return React.cloneElement(child, {
                        mode: me.props.mode,
                        jsxinstant: me.props.instantValidate,
                        value: value,
                        key: child.props.jsxname || index,
                        style: { width: child.props.jsxflex / me.totalFlex * 100 + '%' },
                        attachFormField: me.props.attachFormField,
                        detachFormField: me.props.detachFormField,
                        handleDataChange: me.props.handleDataChange,
                        getValues: me.props.getValues,
                        resetValues: me.props.resetValues
                    });

                    return child;
                })
            );
        }
    }]);

    return FormRow;
}(React.Component);

FormRow.defaultProps = {
    jsxprefixCls: "kuma-uxform-row"
};
FormRow.propTypes = {
    jsxprefixCls: React.PropTypes.string
};
FormRow.displayName = "FormRow";

module.exports = FormRow;