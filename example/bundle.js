/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	var Form = _index2["default"].Form;
	var InputFormField = _index2["default"].InputFormField;
	var TextAreaFormField = _index2["default"].TextAreaFormField;
	var FormField = _index2["default"].FormField;
	var Button = _index2["default"].Button;
	var FormRow = _index2["default"].FormRow;
	var RadioGroupFormField = _index2["default"].RadioGroupFormField;
	var SelectFormField = _index2["default"].SelectFormField;

	var options = [{ label: "上海", value: "SH", selected: true }, { label: "北京", value: "BJ" }];

	var _doClick = function _doClick() {
	    Form.doSave();
	};

	//multiple columns form

	var App = _react2["default"].createElement(
	    Form,
	    { mode: "EDIT", className: "horizontal-form" },
	    _react2["default"].createElement(
	        FormRow,
	        null,
	        _react2["default"].createElement(InputFormField, { className: "one-half", label: "姓名", keyMap: "name", tips: "中文名称", rules: { required: true, message: "not empty" } }),
	        _react2["default"].createElement(InputFormField, { className: "one-half", label: "Email", keyMap: "email", tips: "Email格式", rules: { required: true, type: "email", message: "should be email" } })
	    ),
	    _react2["default"].createElement(
	        FormRow,
	        null,
	        _react2["default"].createElement(InputFormField, { className: "one-half", label: "岗位", keyMap: "job" }),
	        _react2["default"].createElement(InputFormField, { className: "one-half", label: "岗位", keyMap: "job2" }),
	        _react2["default"].createElement(InputFormField, { className: "one-half", label: "岗位", keyMap: "job3" }),
	        _react2["default"].createElement(InputFormField, { className: "one-half", label: "岗位", keyMap: "job4" })
	    ),
	    _react2["default"].createElement(
	        FormRow,
	        null,
	        _react2["default"].createElement(TextAreaFormField, { className: "one-half", label: "简介", keyMap: "introduce" }),
	        _react2["default"].createElement(
	            RadioGroupFormField,
	            { className: "one-half", label: "水果", keyMap: "fruit", jsxname: "fruit", jsxvalue: "", tips: "sss", rules: { required: true, message: "not empty" } },
	            _react2["default"].createElement("input", { type: "radio", value: "apple" }),
	            "Apple",
	            _react2["default"].createElement("input", { type: "radio", value: "orange" }),
	            "Orange",
	            _react2["default"].createElement("input", { type: "radio", value: "watermelon" }),
	            "Watermelon"
	        )
	    ),
	    _react2["default"].createElement(
	        FormRow,
	        null,
	        _react2["default"].createElement(InputFormField, { className: "one-half", label: "啦啦", keyMap: "lala" }),
	        _react2["default"].createElement(
	            SelectFormField,
	            { className: "one-half", label: "城市", keyMap: "city" },
	            _react2["default"].createElement(
	                "option",
	                null,
	                "请选择"
	            ),
	            _react2["default"].createElement(
	                "option",
	                { value: "bj", selected: true },
	                "北京"
	            ),
	            _react2["default"].createElement(
	                "option",
	                { value: "nj" },
	                "南京"
	            ),
	            _react2["default"].createElement(
	                "option",
	                { value: "dj" },
	                "东京"
	            ),
	            _react2["default"].createElement(
	                "option",
	                { value: "xj" },
	                "西京"
	            )
	        )
	    ),
	    _react2["default"].createElement(
	        FormRow,
	        null,
	        _react2["default"].createElement(Button, { label: "提交", onClick: _doClick })
	    )
	);

	_react2["default"].render(App, document.getElementById("box1"));

	var App3 = _react2["default"].createElement(
	    Form,
	    { mode: "EDIT", className: "horizontal-form" },
	    _react2["default"].createElement(
	        FormRow,
	        null,
	        _react2["default"].createElement(InputFormField, { className: "one-third", label: "姓名", keyMap: "name", rules: { required: true, message: "not empty" } }),
	        _react2["default"].createElement(InputFormField, { className: "one-third", label: "年龄", keyMap: "job" }),
	        _react2["default"].createElement(InputFormField, { className: "one-third", label: "性别", keyMap: "job" })
	    ),
	    _react2["default"].createElement(TextAreaFormField, { label: "个人简介", keyMap: "introduce" }),
	    _react2["default"].createElement(Button, { label: "提交", onClick: _doClick })
	);

	_react2["default"].render(App3, document.getElementById("box3"));

	//single column form
	var App2 = _react2["default"].createElement(
	    Form,
	    { mode: "EDIT", className: "horizontal-form" },
	    _react2["default"].createElement(InputFormField, { label: "姓名", keyMap: "name", rules: { required: true, message: "not empty" } }),
	    _react2["default"].createElement(InputFormField, { label: "岗位", keyMap: "job" }),
	    _react2["default"].createElement(TextAreaFormField, { label: "简介", keyMap: "introduce" }),
	    _react2["default"].createElement(
	        RadioGroupFormField,
	        { label: "水果", keyMap: "fruit", jsxname: "fruit", jsxvalue: "", tips: "sss", rules: { required: true, message: "not empty" } },
	        _react2["default"].createElement("input", { type: "radio", value: "apple" }),
	        "Apple",
	        _react2["default"].createElement("input", { type: "radio", value: "orange" }),
	        "Orange",
	        _react2["default"].createElement("input", { type: "radio", value: "watermelon" }),
	        "Watermelon"
	    ),
	    _react2["default"].createElement(InputFormField, { label: "啦啦", keyMap: "lala" }),
	    _react2["default"].createElement(
	        SelectFormField,
	        { label: "城市", keyMap: "city" },
	        _react2["default"].createElement(
	            "option",
	            null,
	            "请选择"
	        ),
	        _react2["default"].createElement(
	            "option",
	            { value: "bj", selected: true },
	            "北京"
	        ),
	        _react2["default"].createElement(
	            "option",
	            { value: "nj" },
	            "南京"
	        ),
	        _react2["default"].createElement(
	            "option",
	            { value: "dj" },
	            "东京"
	        ),
	        _react2["default"].createElement(
	            "option",
	            { value: "xj" },
	            "西京"
	        )
	    ),
	    _react2["default"].createElement(Button, { label: "提交", onClick: _doClick })
	);

	_react2["default"].render(App2, document.getElementById("box2"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _form = __webpack_require__(4);

	var _form2 = _interopRequireDefault(_form);

	var _inputFormField = __webpack_require__(5);

	var _inputFormField2 = _interopRequireDefault(_inputFormField);

	var _textAreaFormField = __webpack_require__(6);

	var _textAreaFormField2 = _interopRequireDefault(_textAreaFormField);

	var _formField = __webpack_require__(7);

	var _formField2 = _interopRequireDefault(_formField);

	var _formRow = __webpack_require__(8);

	var _formRow2 = _interopRequireDefault(_formRow);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _radioGroupFormField = __webpack_require__(10);

	var _radioGroupFormField2 = _interopRequireDefault(_radioGroupFormField);

	var _SelectFormField = __webpack_require__(11);

	var _SelectFormField2 = _interopRequireDefault(_SelectFormField);

	module.exports = {
	    Form: _form2['default'],
	    InputFormField: _inputFormField2['default'],
	    TextAreaFormField: _textAreaFormField2['default'],
	    FormField: _formField2['default'],
	    FormRow: _formRow2['default'],
	    RadioGroupFormField: _radioGroupFormField2['default'],
	    SelectFormField: _SelectFormField2['default'],
	    Button: _button2['default']
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _constants = __webpack_require__(12);

	var _constants2 = _interopRequireDefault(_constants);

	var _classnames = __webpack_require__(15);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 * React.Component vs React.createClass
	 * 1: getInitialState method, React.Component没有，直接在constructor方法里面初始化
	 * 2: getDefaultProps 方法没有，propTypes and defaultProps可以直接定义在constructor上，instead of in the class body.
	 */

	var Form = (function (_React$Component) {
	    function Form(props) {
	        var _this2 = this;

	        _classCallCheck(this, Form);

	        _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).call(this, props);
	        this.fields = {};
	        this.errors = {};
	        this.state = {
	            data: this.props.jsxdata,
	            dirty: false,
	            mode: this.props.jsxmode
	        };
	        ['attachFormField', 'detachFormField', 'handleInputChange'].forEach(function (m) {
	            _this2[m] = _this2[m].bind(_this2);
	        });
	    }

	    _inherits(Form, _React$Component);

	    _createClass(Form, [{
	        key: 'render',
	        value: function render() {
	            var children = this.props.children;
	            var self = this;
	            var className = _classnames2['default'](this.props.jsxprefixCls, this.props.className);

	            return _react2['default'].createElement(
	                'div',
	                { className: className },
	                children.map(function (child) {
	                    return _react2['default'].cloneElement(child, {
	                        mode: self.state.mode,
	                        form: self,
	                        value: self.state.data[child.props.keyMap],
	                        attachFormField: self.attachFormField,
	                        detachFormField: self.detachFormField,
	                        handleInputChange: self.handleInputChange
	                    });

	                    return child;
	                })
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'attachFormField',
	        value: function attachFormField(field) {
	            var name = field.getName();
	            name ? this.fields[name] = field : '';
	        }
	    }, {
	        key: 'detachFormField',
	        value: function detachFormField(field) {
	            delete this.fields[field.getName()];
	        }
	    }, {
	        key: 'handleInputChange',
	        value: function handleInputChange(field, value, fn) {
	            /*console.info(field);
	            console.info(field.props.keyMap);
	            console.info(value);*/
	            this.props.jsxdata[field.props.keyMap] = value;
	        }
	    }, {
	        key: 'doSave',

	        /**
	         * check all the field, and store the error state, use error state
	         */
	        value: function doSave() {
	            var flag = true;
	            Object.keys(this.fields).map((function (key) {
	                var _flag = this.fields[key].doValidate();
	                this.errors[key] = _flag;
	                flag = flag && !_flag;
	            }).bind(this));
	            var _mode = flag ? _constants2['default'].MODE.view : _constants2['default'].MODE.edit;
	            this.setState({ mode: _mode });
	        }
	    }]);

	    return Form;
	})(_react2['default'].Component);

	exports['default'] = Form;

	Form.defaultProps = {
	    jsxprefixCls: 'kuma-form',
	    jsxmode: _constants2['default'].MODE.edit,
	    jsxdata: {}
	};
	module.exports = exports['default'];

	//if (child.type === Validator) {
	/* } else if (child.props && child.props.children) {
	     return React.cloneElement(child, {}, self.attachValidators(child.props.children));
	 }*/

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _formField = __webpack_require__(7);

	var _formField2 = _interopRequireDefault(_formField);

	var _constants = __webpack_require__(12);

	var _constants2 = _interopRequireDefault(_constants);

	var _classnames = __webpack_require__(15);

	var _classnames2 = _interopRequireDefault(_classnames);

	/**
	 *  1:  每个field需要单独的validate, 这样才能保证单个的field输入时候的validate, 使用state.error来决定验证是否通过，是否显示
	 *      error信息
	 *  2:  Form的save Action，需要对每个field做validate, 如果验证通过，保存成功后，mode 还需要改变
	 *  3:  刚开始的纠结点在，item2 会重新render所有form field, 感觉是要render 2次，一次在validate的时候，一次在save后，改变mode
	 *      但仔细想，这两个不可能同时发生
	 **/

	var InputFormField = (function (_FormField) {
	    function InputFormField(props) {
	        _classCallCheck(this, InputFormField);

	        _get(Object.getPrototypeOf(InputFormField.prototype), 'constructor', this).call(this, props);
	    }

	    _inherits(InputFormField, _FormField);

	    _createClass(InputFormField, [{
	        key: 'getInitialState',
	        value: function getInitialState() {
	            return {
	                value: this.props.value,
	                error: false,
	                required: this.props.rules && this.props.rules.required ? this.props.rules.required : false,
	                errorMsg: this.props.rules && this.props.rules.message ? this.props.rules.message : this.props.errorMsg
	            };
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            var value = e.target ? e.target.value : e;
	            this.props.handleInputChange(this, value);
	            this.doValidate();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _mode = undefined;
	            var className = _classnames2['default'](this.props.bsStyle, this.props.className);

	            if (this.props.mode == _constants2['default'].MODE.edit) {
	                if (!!this.state.error) {
	                    _mode = _react2['default'].createElement(
	                        'ul',
	                        { className: 'kuma-form-field' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement('input', { className: 'kuma-input', name: this.props.key, type: 'text', ref: 'el', value: this.state.value, onChange: this.handleChange.bind(this) })
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { className: 'kuma-form-tips' },
	                            this.props.tips
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { className: 'kuma-form-errormsg' },
	                            this.state.errorMsg
	                        )
	                    );
	                } else {
	                    _mode = _react2['default'].createElement(
	                        'ul',
	                        { className: 'kuma-form-field' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement('input', { className: 'kuma-input', name: this.props.key, type: 'text', ref: 'el', value: this.state.value, onChange: this.handleChange.bind(this) })
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { className: 'kuma-form-tips' },
	                            this.props.tips
	                        )
	                    );
	                }
	            } else {
	                _mode = _react2['default'].createElement(
	                    'ul',
	                    { className: 'kuma-form-field' },
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'span',
	                            null,
	                            this.state.value
	                        )
	                    )
	                );
	            }
	            return _react2['default'].createElement(
	                'div',
	                { className: className },
	                _react2['default'].createElement(
	                    'label',
	                    { className: 'kuma-label' },
	                    this.props.label,
	                    _react2['default'].createElement(
	                        'i',
	                        null,
	                        this.state.required ? '*' : ''
	                    )
	                ),
	                _mode
	            );
	        }
	    }]);

	    return InputFormField;
	})(_formField2['default']);

	exports['default'] = InputFormField;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	/**
	 * Created by xy on 15/4/13.
	 */

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _formField = __webpack_require__(7);

	var _formField2 = _interopRequireDefault(_formField);

	var _constants = __webpack_require__(12);

	var _constants2 = _interopRequireDefault(_constants);

	var _classnames = __webpack_require__(15);

	var _classnames2 = _interopRequireDefault(_classnames);

	var TextAreaFormField = (function (_FormField) {
	    function TextAreaFormField(props) {
	        _classCallCheck(this, TextAreaFormField);

	        _get(Object.getPrototypeOf(TextAreaFormField.prototype), 'constructor', this).call(this, props);
	    }

	    _inherits(TextAreaFormField, _FormField);

	    _createClass(TextAreaFormField, [{
	        key: 'render',
	        value: function render() {
	            var _mode = undefined;
	            var className = _classnames2['default'](this.props.bsStyle, this.props.className);

	            if (this.props.mode == _constants2['default'].MODE.edit) {
	                _mode = _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        'textarea',
	                        { className: 'kuma-textarea', ref: 'el' },
	                        this.state.value
	                    )
	                );
	            } else {
	                _mode = _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        'p',
	                        null,
	                        this.state.value
	                    )
	                );
	            }
	            return _react2['default'].createElement(
	                'div',
	                { className: className },
	                _react2['default'].createElement(
	                    'label',
	                    { className: 'kuma-label' },
	                    this.props.label,
	                    _react2['default'].createElement(
	                        'i',
	                        null,
	                        this.props.isRequire ? '*' : ''
	                    )
	                ),
	                _react2['default'].createElement(
	                    'ul',
	                    { className: 'kuma-form-field' },
	                    _mode,
	                    ' '
	                )
	            );
	        }
	    }]);

	    return TextAreaFormField;
	})(_formField2['default']);

	exports['default'] = TextAreaFormField;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	/**
	 * Created by xy on 15/4/13.
	 */

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _formfieldMixin = __webpack_require__(13);

	var _formfieldMixin2 = _interopRequireDefault(_formfieldMixin);

	var _constants = __webpack_require__(12);

	var _constants2 = _interopRequireDefault(_constants);

	var _customValidatorType = __webpack_require__(14);

	var _customValidatorType2 = _interopRequireDefault(_customValidatorType);

	var _classnames = __webpack_require__(15);

	var _classnames2 = _interopRequireDefault(_classnames);

	var FormField = (function (_React$Component) {
	    function FormField(props) {
	        _classCallCheck(this, FormField);

	        _get(Object.getPrototypeOf(FormField.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            value: this.props.value,
	            error: false,
	            required: this.props.rules && this.props.rules.required ? this.props.rules.required : false,
	            errorMsg: this.props.rules && this.props.rules.message ? this.props.rules.message : this.props.errorMsg
	        };
	    }

	    _inherits(FormField, _React$Component);

	    _createClass(FormField, [{
	        key: 'getParent',
	        value: function getParent() {
	            return this.props.form;
	        }
	    }, {
	        key: 'getName',
	        value: function getName() {
	            return this.props.keyMap;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.attachFormField(this);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.props.attachFormField(this);
	        }
	    }, {
	        key: 'setValue',
	        value: function setValue(value) {
	            this.setProps('value', value);
	            this.refs.el.value = value;
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            return this.refs.el.getDOMNode().value;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.detachFormField(this);
	            this.props.form = null;
	        }
	    }, {
	        key: 'doValidate',

	        /**
	         *@return {boolean} whether this field has error, if validate pass, no error,pls note the reverse logic
	         */
	        value: function doValidate() {
	            if (this.props.rules) {
	                var rules = this.props.rules;
	                var validator = rules.validator;
	                var _pass = _customValidatorType2['default'](rules, this.getValue());
	                this.setState({ value: this.getValue(), error: !_pass });
	                return !_pass;
	            } else {
	                this.setState({ value: this.getValue() });
	                return false;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _mode = undefined;
	            var className = _classnames2['default']('kuma-form-item', this.props.className);

	            if (this.props.mode == _constants2['default'].MODE.edit) {
	                (function () {
	                    var children = _this2.props.children.length > 0 ? _this2.props.children : [_this2.props.children];
	                    var self = _this2;

	                    _mode = _react2['default'].createElement(
	                        'div',
	                        { className: className },
	                        children.map(function (child) {
	                            child.props.form = self.props.form;
	                            return child;
	                        })
	                    );
	                })();
	            } else {
	                _mode = _react2['default'].createElement('div', null);
	            }
	            return _mode;
	        }
	    }]);

	    return FormField;
	})(_react2['default'].Component);

	;

	FormField.propTypes = {
	    mode: _react2['default'].PropTypes.oneOf([_constants2['default'].MODE.view, _constants2['default'].MODE.edit]),
	    required: _react2['default'].PropTypes.boolean
	};

	FormField.defaultProps = {
	    bsStyle: 'kuma-form-item',
	    required: false,
	    error: false,
	    animation: true,
	    tips: 'FORM FIELD TIPS',
	    errorMsg: 'ERROE Message'
	};

	exports['default'] = FormField;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var classNames = __webpack_require__(16);

	module.exports = React.createClass({
	    displayName: 'FormRow',
	    propTypes: {
	        className: React.PropTypes.string
	    },
	    componentDidMount: function componentDidMount() {},

	    componentDidUpdate: function componentDidUpdate() {},
	    attachFormField: function attachFormField(field) {
	        var name = field.getName();
	        name ? this.fields[name] = field : '';
	    },
	    detachFormField: function detachFormField(field) {
	        delete this.fields[field.getName()];
	    },
	    render: function render() {
	        // classes
	        var className = classNames('kuma-form-row', this.props.className);
	        var children = this.props.children.map ? this.props.children : [this.props.children];
	        var form = this.props.form;
	        var self = this;
	        return React.createElement(
	            'div',
	            { className: className },
	            children.map(function (child) {
	                return React.cloneElement(child, {
	                    mode: form.state.mode,
	                    form: form,
	                    value: form.state.data[child.props.keyMap],
	                    attachFormField: form.attachFormField,
	                    detachFormField: form.detachFormField,
	                    handleInputChange: form.handleInputChange
	                });

	                return child;
	            })
	        );
	    }
	});

	//this.props.attachFormField(this);

	//this.props.attachFormField(this);

	//if (child.type === Validator) {
	//debugger
	/* } else if (child.props && child.props.children) {
	     return React.cloneElement(child, {}, self.attachValidators(child.props.children));
	 }*/

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _formfieldMixinJs = __webpack_require__(13);

	var _formfieldMixinJs2 = _interopRequireDefault(_formfieldMixinJs);

	var _constants = __webpack_require__(12);

	var _constants2 = _interopRequireDefault(_constants);

	var Button = _react2['default'].createClass({
	    displayName: 'Button',

	    propTypes: {
	        mode: _react2['default'].PropTypes.oneOf([_constants2['default'].MODE.view, _constants2['default'].MODE.edit]),
	        isRequire: _react2['default'].PropTypes.boolean
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            bsStyle: 'kuma-button'
	        };
	    },
	    getParent: function getParent() {
	        return this.props.form;
	    },
	    doClick: function doClick() {
	        var _form = this.getParent();
	        _form.doSave();
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.props.parent = null;
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { className: 'kuma-button kuma-button-lblue', onClick: this.doClick.bind(this, { context: this }) },
	            this.props.label
	        );
	        // return <div className="kuma-button kuma-button-lblue" onClick={this.props.onClick}>{this.props.label}</div>;
	    }

	});

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	/**
	 * Created by xy on 15/4/13.
	 */

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _formField = __webpack_require__(7);

	var _formField2 = _interopRequireDefault(_formField);

	var _constants = __webpack_require__(12);

	var _constants2 = _interopRequireDefault(_constants);

	var _classnames = __webpack_require__(15);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _uxcoreRadiogroup = __webpack_require__(18);

	var _uxcoreRadiogroup2 = _interopRequireDefault(_uxcoreRadiogroup);

	var RadioGroupFormField = (function (_FormField) {
	    function RadioGroupFormField(props) {
	        _classCallCheck(this, RadioGroupFormField);

	        _get(Object.getPrototypeOf(RadioGroupFormField.prototype), 'constructor', this).call(this, props);
	    }

	    _inherits(RadioGroupFormField, _FormField);

	    _createClass(RadioGroupFormField, [{
	        key: 'getValue',
	        value: function getValue() {
	            return this.refs.el.getCheckedValue();
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(objAux) {
	            var value = objAux.context.getValue();
	            this.props.handleInputChange(this, value);
	            this.doValidate();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _mode = undefined,
	                self = this;
	            var className = _classnames2['default'](this.props.bsStyle, this.props.className);
	            if (this.props.mode == _constants2['default'].MODE.edit) {
	                if (!!this.state.error) {
	                    _mode = _react2['default'].createElement(
	                        'ul',
	                        { className: 'kuma-form-field' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                _uxcoreRadiogroup2['default'],
	                                { jsxname: this.props.jsxname, ref: 'el', jsxvalue: this.props.jsxvalue, onChange: this.handleChange.bind(this, { context: this }) },
	                                this.props.children
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { className: 'kuma-form-tips' },
	                            this.props.tips
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { className: 'kuma-form-errormsg' },
	                            this.state.errorMsg
	                        )
	                    );
	                } else {
	                    _mode = _react2['default'].createElement(
	                        'ul',
	                        { className: 'kuma-form-field' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                _uxcoreRadiogroup2['default'],
	                                { jsxname: this.props.jsxname, ref: 'el', jsxvalue: this.props.jsxvalue, onChange: this.handleChange.bind(this, { context: this }) },
	                                this.props.children
	                            )
	                        )
	                    );
	                }
	            } else {
	                this.props.jsxvalue = this.getValue();
	                _mode = _react2['default'].createElement(
	                    'ul',
	                    { className: 'kuma-form-field' },
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            this.props.jsxvalue
	                        )
	                    )
	                );
	            }
	            return _react2['default'].createElement(
	                'div',
	                { className: className },
	                _react2['default'].createElement(
	                    'label',
	                    { className: 'kuma-label' },
	                    this.props.label,
	                    _react2['default'].createElement(
	                        'i',
	                        null,
	                        this.props.isRequire ? '*' : ''
	                    )
	                ),
	                _mode
	            );
	        }
	    }]);

	    return RadioGroupFormField;
	})(_formField2['default']);

	exports['default'] = RadioGroupFormField;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	/**
	 * Created by xy on 15/4/13.
	 */

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _formField = __webpack_require__(7);

	var _formField2 = _interopRequireDefault(_formField);

	var _constants = __webpack_require__(12);

	var _constants2 = _interopRequireDefault(_constants);

	var _classnames = __webpack_require__(15);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _uxcoreSelect = __webpack_require__(17);

	var _uxcoreSelect2 = _interopRequireDefault(_uxcoreSelect);

	var SelectFormField = (function (_FormField) {
	    function SelectFormField(props) {
	        _classCallCheck(this, SelectFormField);

	        _get(Object.getPrototypeOf(SelectFormField.prototype), 'constructor', this).call(this, props);
	    }

	    _inherits(SelectFormField, _FormField);

	    _createClass(SelectFormField, [{
	        key: 'getValue',
	        value: function getValue() {
	            return this.refs.el.getValue();
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(objAux) {
	            var value = objAux.context.getValue();
	            this.props.handleInputChange(this, value);
	            this.doValidate();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _mode = undefined,
	                self = this;
	            var className = _classnames2['default'](this.props.bsStyle, this.props.className);
	            if (this.props.mode == _constants2['default'].MODE.edit) {
	                if (!!this.state.error) {
	                    _mode = _react2['default'].createElement(
	                        'ul',
	                        { className: 'kuma-form-field' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                _uxcoreSelect2['default'],
	                                { jsxname: this.props.jsxname, ref: 'el', jsxvalue: this.props.jsxvalue, onChange: this.handleChange.bind(this, { context: this }) },
	                                this.props.children
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { className: 'kuma-form-tips' },
	                            this.props.tips
	                        ),
	                        _react2['default'].createElement(
	                            'li',
	                            { className: 'kuma-form-errormsg' },
	                            this.state.errorMsg
	                        )
	                    );
	                } else {
	                    _mode = _react2['default'].createElement(
	                        'ul',
	                        { className: 'kuma-form-field' },
	                        _react2['default'].createElement(
	                            'li',
	                            null,
	                            _react2['default'].createElement(
	                                _uxcoreSelect2['default'],
	                                { jsxname: this.props.jsxname, ref: 'el', jsxvalue: this.props.jsxvalue, onChange: this.handleChange.bind(this, { context: this }) },
	                                this.props.children
	                            )
	                        )
	                    );
	                }
	            } else {
	                this.props.jsxvalue = this.getValue();
	                _mode = _react2['default'].createElement(
	                    'ul',
	                    { className: 'kuma-form-field' },
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            this.props.jsxvalue
	                        )
	                    )
	                );
	            }
	            return _react2['default'].createElement(
	                'div',
	                { className: className },
	                _react2['default'].createElement(
	                    'label',
	                    { className: 'kuma-label' },
	                    this.props.label,
	                    _react2['default'].createElement(
	                        'i',
	                        null,
	                        this.props.isRequire ? '*' : ''
	                    )
	                ),
	                _mode
	            );
	        }
	    }]);

	    return SelectFormField;
	})(_formField2['default']);

	exports['default'] = SelectFormField;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
	    MODE: {
	        'view': 'VIEW',
	        'edit': 'EDIT'
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var FormFieldMixin = {

	    setData: function setData() {},
	    getData: function getData() {},
	    getMode: function getMode() {},
	    setMode: function setMode() {}
	};

	exports["default"] = FormFieldMixin;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xy on 15/4/16.
	 */

	'use strict';

	var types = {};

	types.integer = function (value) {
	    return typeof value === 'number' && parseInt(value) === value;
	};

	types.float = function (value) {
	    return typeof value === 'number' && !types.integer(value);
	};

	types.array = function (value) {
	    return Array.isArray(value);
	};

	types.regexp = function (value) {
	    if (value instanceof RegExp) {
	        return true;
	    }
	    try {
	        return !!new RegExp(value);
	    } catch (e) {
	        return false;
	    }
	};

	types.object = function (value) {
	    return typeof value === 'object' && !types.array(value);
	};

	types.method = function (value) {
	    return typeof value === 'function';
	};

	var pattern = {
	    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
	    url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
	    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};

	types.email = function (value) {
	    return typeof value === 'string' && !!value.match(pattern.email);
	};

	types.url = function (value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	};

	types.hex = function (value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	};

	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *
	 */
	var type = function type(rule, value) {
	    // if value is required and value is undefined
	    // no need  to add this error message

	    if (rule.required && (value === undefined || value === '')) {

	        return false;
	    }
	    var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email'];
	    var type = rule.type;
	    if (custom.indexOf(type) > -1) {
	        return types[type](value);
	        // straight typeof check
	    } else if (type && typeof value !== rule.type) {
	        return true;
	        //console.log("checking type %s", type);
	        //console.log("checking value %s", value);
	        //errors.push(util.format(options.messages.types[type], rule.fullField, rule.type));
	    }
	    return true;
	};

	module.exports = type;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	function classNames() {
		'use strict';

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	/* global define */
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	function classNames() {
		'use strict';

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	/* global define */
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(19);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(20);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	* @author: zhouquan.yezq
	* @time  : 6/14 2015
	*/

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var component = _react2["default"].createClass({
	    displayName: "component",

	    mixins: [],
	    propTypes: {},
	    getDefaultProps: function getDefaultProps() {
	        return {
	            jsxprefixCls: "uxcore-select"
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            defaultValue: this.props.defaultValue
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        console.info(this.getValue());
	    },

	    componentDidUpdate: function componentDidUpdate() {},
	    getValue: function getValue() {
	        return this.refs.el.getDOMNode().value;
	    },

	    render: function render() {
	        console.info(this.props.jsxdata);
	        var child = this.props.children,
	            options;
	        if (child) {
	            options = child;
	        } else {
	            // options
	            options = this.props.jsxdata.map(function (opt, i) {
	                var selected = "";
	                if (opt.selected) {
	                    selected = "selected";
	                }
	                return _react2["default"].createElement(
	                    "option",
	                    { key: "option-" + i, value: opt.value, selected: selected },
	                    opt.label
	                );
	            });
	            //if (this.props.prependEmptyOption || this.props.firstOption) {
	            options.unshift(_react2["default"].createElement(
	                "option",
	                { key: "option-blank", value: "" },
	                "Select..."
	            ));
	            //}
	        }
	        return _react2["default"].createElement(
	            "select",
	            { className: "uxcore-select", ref: "el", disabled: this.props.jsxdisabled, onChange: this.props.onChange, onBlur: this.props.onBlur },
	            options
	        );
	    }
	});
	exports["default"] = component;
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	* thanks for https://github.com/chenglou/react-radio-group
	* @author: zhouquan.yezq
	* @time  : 5/25 2015
	*/

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var component = _react2['default'].createClass({
	    displayName: 'component',

	    mixins: [],
	    propTypes: {},
	    getDefaultProps: function getDefaultProps() {
	        return {};
	    },
	    getInitialState: function getInitialState() {
	        return {
	            defaultValue: this.props.defaultValue
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.setRadioNames();
	        this.setCheckedRadio();
	    },

	    componentDidUpdate: function componentDidUpdate() {
	        this.setRadioNames();
	        this.setCheckedRadio();
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            { onChange: this.props.onChange },
	            this.props.children
	        );
	    },

	    setRadioNames: function setRadioNames() {
	        // stay DRY and don't put the same `name` on all radios manually. Put it on
	        // the tag and it'll be done here
	        var $radios = this.getRadios();
	        for (var i = 0, length = $radios.length; i < length; i++) {
	            $radios[i].setAttribute('name', this.props.jsxname);
	        }
	    },

	    getRadios: function getRadios() {
	        return this.getDOMNode().querySelectorAll('input[type="radio"]');
	    },

	    setCheckedRadio: function setCheckedRadio() {
	        var $radios = this.getRadios();
	        // if `value` is passed from parent, always use that value. This is similar
	        // to React's controlled component. If `defaultValue` is used instead,
	        // subsequent updates to defaultValue are ignored. Note: when `defaultValue`
	        // and `value` are both passed, the latter takes precedence, just like in
	        // a controlled component
	        var destinationValue = this.props.jsxvalue != null ? this.props.jsxvalue : this.state.defaultValue;

	        for (var i = 0, length = $radios.length; i < length; i++) {
	            var $radio = $radios[i];

	            // intentionally use implicit conversion for those who accidentally used,
	            // say, `valueToChange` of 1 (integer) to compare it with `value` of "1"
	            // (auto conversion to valid html value from React)
	            if ($radio.value == destinationValue) {
	                $radio.checked = true;
	            }
	        }
	    },

	    getCheckedValue: function getCheckedValue() {
	        var $radios = this.getRadios();
	        for (var i = 0, length = $radios.length; i < length; i++) {
	            if ($radios[i].checked) {
	                return $radios[i].value;
	            }
	        }
	    }

	});
	exports['default'] = component;
	module.exports = exports['default'];

/***/ }
/******/ ]);