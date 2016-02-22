"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classnames = require('classnames');
var assign = require("object-assign");

var ButtonGroupFormField = function (_React$Component) {
    _inherits(ButtonGroupFormField, _React$Component);

    function ButtonGroupFormField(props) {
        _classCallCheck(this, ButtonGroupFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroupFormField).call(this, props));
    }

    _createClass(ButtonGroupFormField, [{
        key: "_processChild",
        value: function _processChild() {
            var me = this;
            var length = React.Children.count(me.props.children);
            if (!length) {
                return false;
            }
            var elements = React.Children.map(me.props.children, function (child, index) {
                var props = {};
                if (child.props.action == "submit") {
                    props.onClick = function () {
                        var data = me.props.getValues();
                        child.props.onClick(data);
                    };
                }
                if (child.props.action == "reset") {
                    props.onClick = function () {
                        console.log("reset");
                        me.props.resetValues();
                    };
                }
                return React.cloneElement(child, props);
            });

            return elements;
        }
    }, {
        key: "render",
        value: function render() {
            var _classnames;

            var me = this;
            var elements = me._processChild();
            return React.createElement(
                "div",
                { className: classnames((_classnames = {}, _defineProperty(_classnames, me.props.jsxprefixCls, true), _defineProperty(_classnames, me.props.className, !!me.props.className), _classnames)), style: assign({}, me.props.style, {
                        display: me.props.jsxshow ? "table" : "none"
                    }) },
                !!elements && elements
            );
        }
    }]);

    return ButtonGroupFormField;
}(React.Component);

ButtonGroupFormField.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxflex: React.PropTypes.number,
    jsxshow: React.PropTypes.bool
};
ButtonGroupFormField.defaultProps = {
    jsxprefixCls: "kuma-uxform-field kuma-button-group-uxform-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxshow: true
};
ButtonGroupFormField.displayName = "ButtonGroupFormField";

module.exports = ButtonGroupFormField;