/**
 * Form Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
let Form = require('./Form');

// 以 Form 插件的形式给出
Form.TextAreaFormField = require("uxcore-textarea-form-field");
Form.InputFormField = require("uxcore-input-form-field");
Form.RadioGroupFormField = require("./FormField/RadioGroupFormField");
Form.SelectFormField = require("uxcore-select-form-field");
Form.NumberInputFormField = require('./FormField/NumberInputFormField');
Form.DateFormField = require('uxcore-date-form-field');
Form.CheckboxGroupFormField = require("./FormField/CheckboxGroupFormField");
Form.CascadeSelectFormField = require("./FormField/CascadeSelectFormField");
Form.OtherFormField = require("uxcore-other-form-field");
Form.ButtonGroupFormField = require("./FormField/ButtonGroupFormField");
Form.EditorFormField = require("./FormField/EditorFormField");
Form.SearchFormField = require("./FormField/SearchFormField");

module.exports = Form;