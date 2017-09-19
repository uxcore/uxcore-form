/**
 * Form Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import TextAreaFormField from 'uxcore-textarea-form-field';
import InputFormField from 'uxcore-input-form-field';
import SelectFormField from 'uxcore-select-form-field';
import DateFormField from 'uxcore-date-form-field';
import OtherFormField from 'uxcore-other-form-field';
import SwitchFormField from 'uxcore-switch-form-field';
import PickableFormField from 'uxcore-pickable-form-field';
import FormField from 'uxcore-form-field';


import Form from './Form';
import RadioGroupFormField from './FormField/RadioGroupFormField';
import NumberInputFormField from './FormField/NumberInputFormField';
import CheckboxGroupFormField from './FormField/CheckboxGroupFormField';
import CascadeSelectFormField from './FormField/CascadeSelectFormField';
import ButtonGroupFormField from './FormField/ButtonGroupFormField';
import EditorFormField from './FormField/EditorFormField';
import SearchFormField from './FormField/SearchFormField';

// 以 Form 插件的形式给出
Form.TextAreaFormField = TextAreaFormField;
Form.InputFormField = InputFormField;
Form.SelectFormField = SelectFormField;
Form.DateFormField = DateFormField;
Form.OtherFormField = OtherFormField;
Form.SwitchFormField = SwitchFormField;
Form.PickableFormField = PickableFormField;
Form.FormField = FormField;
Form.RadioGroupFormField = RadioGroupFormField;
Form.NumberInputFormField = NumberInputFormField;
Form.CheckboxGroupFormField = CheckboxGroupFormField;
Form.CascadeSelectFormField = CascadeSelectFormField;
Form.ButtonGroupFormField = ButtonGroupFormField;
Form.EditorFormField = EditorFormField;
Form.SearchFormField = SearchFormField;

Form.createFormField = Form.FormField.createFormField;

export default Form;
