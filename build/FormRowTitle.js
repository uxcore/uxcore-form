"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author: zhouquan.yezq
 * @time: 8/7 2015
 * Form Row Title
 */
var Constants = require("uxcore-const");
var classnames = require("classnames");

var FormRowTitle = function (_React$Component) {
    _inherits(FormRowTitle, _React$Component);

    function FormRowTitle(props) {
        _classCallCheck(this, FormRowTitle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FormRowTitle).call(this, props));
    }

    _createClass(FormRowTitle, [{
        key: "render",
        value: function render() {
            var _classnames;

            var me = this;
            var length = React.Children.count(me.props.children);
            return React.createElement(
                "div",
                { className: classnames((_classnames = {}, _defineProperty(_classnames, me.props.jsxprefixCls, true), _defineProperty(_classnames, me.props.className, !!me.props.className), _classnames)) },
                me.props.jsxtitle,
                !!length && React.Children.map(me.props.children, function (item) {
                    return item;
                })
            );
        }
    }]);

    return FormRowTitle;
}(React.Component);

;

FormRowTitle.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxtitle: React.PropTypes.string
};

FormRowTitle.defaultProps = {
    jsxprefixCls: "kuma-uxform-row-title",
    jsxtitle: ""
};

FormRowTitle.displayName = "FormRowTitle";

module.exports = FormRowTitle;