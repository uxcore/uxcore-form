'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classnames = require('classnames');
var assign = require('object-assign');

var OtherFormField = function (_React$Component) {
    _inherits(OtherFormField, _React$Component);

    function OtherFormField(props) {
        _classCallCheck(this, OtherFormField);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OtherFormField).call(this, props));
    }

    _createClass(OtherFormField, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var me = this;
            return React.createElement(
                'div',
                { className: classnames((_classnames = {}, _defineProperty(_classnames, me.props.jsxprefixCls, true), _defineProperty(_classnames, me.props.className, !!me.props.className), _classnames)), style: assign({}, me.props.style, {
                        display: me.props.jsxshow ? "table" : "none"
                    }) },
                me.props.children
            );
        }
    }]);

    return OtherFormField;
}(React.Component);

OtherFormField.defaultProps = {
    jsxprefixCls: "kuma-uxform-field kuma-other-uxform-field", // 默认类名
    jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
    jsxshow: true
};

OtherFormField.propTypes = {
    jsxprefixCls: React.PropTypes.string,
    jsxflex: React.PropTypes.number,
    jsxshow: React.PropTypes.bool
};

OtherFormField.displayName = "OtherFormField";

module.exports = OtherFormField;