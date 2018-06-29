## 7.0.0

* `CHANGED` update `uxcore-date-form-field` to `^0.9.0`
* `CHANGED` update `uxcore-form-field` to `^0.3.0`
* `CHANGED` update `uxcore-input-form-field` to `^0.3.0`
* `CHANGED` update `uxcore-pickable-form-field` to `^0.5.0`
* `CHANGED` update `uxcore-select2` to `^0.5.0`
* `CHANGED` update `uxcore-textarea-form-field` to `^0.2.0`
* `CHANGED` adapt React@16

## 6.3.4

* `FIXED` SearchField handleDataChange

## 6.3.3

* `FIXED` input & addon border color 

## 6.3.0

* `CHANGED` use `uxcore-rich-text`

## 6.2.2

* `FIXED` NumberInputFormField do not format empty string

## 6.2.1 

* `FIXED` wrong NumberInputFormField right addon style.

## 6.2.0

* `CHANEGD` NumberInputFormField add new prop `formatOnBlur`

## 6.1.1

* `CHANGED` adjust textarea min-height

## 6.1.0

* `NEW` add new API `doValidateAndScroll`

## 6.0.0

* `NEW` auto adjust field's margin between view mode & edit mode
* `NEW` new field prop `inputBoxMaxWidth` to define a max width for field input box in a very wide page. 
* `CHANGED` adjust safe distance between two fields in a row.
* `CHANGED` adjust field's margin for different size

## 5.5.0

* `CHANGD` Cascade pass all Select prop

## 5.4.0

* `CHANGED` support React@15.x

## 5.3.0

* `CHANGED` support new prop `size`

## 5.2.0

* `CHANGED` support new prop `verticalAlign`

## 5.1.1

* `FIXED` title's height after a formfield is wrong.

## 5.1.0

* `CHANGED` update `uxcore-checkbox-group` & `uxcore-radiogroup` to `^1.2.0`

## 5.0.0

* `CHANGED` use `uxcore-title` instead of old FormRowTitle

## 4.0.0

* `CHANGED` update `uxcore-pickable-form-field` to ~0.4.0

## 3.3.0

* `CHANGED` filter invalid letter in `NumberInput`

## 3.1.0

* `CHANGED` method `setValues` will handle non-existent key. (#135) 

## 3.0.0

* `CHANGED` update `uxcore-date-form-field` to ~0.8.0

## 2.1.0

* `CHANGED` margin/padding adjustment, content color change

## 2.0.0

* `CHANGED` update `uxcore-pickable-form-field` to ~0.3.0

## 1.10.8

* `FIXED` fix border-radius bug in searchFormField

## 1.10.7

* `CHANGED` apply special border style for EditorFormField

## 1.10.6

* `FIXED` input border color difference.

## 1.10.5

* `FIXED` fix checkbox/radio view bug if there is only one child

## 1.10.3

* `CHANGED` change color if count overflow;
* `CHANGED` tips style optimaztion
* `CHANGED` change textarea count style

## 1.10.2

* `NEW` `CascadeSelectFormField` support `getPopupContainer`

## 1.10.1

* `CHANGED` `CheckboxFormField` show key if label is not found in view mode
* `CHANGED` `RadioFormField` show key if label is not found in view mode

## 1.10.0

* `CHANGED` update `uxcore-date-form-field` to ~0.7.0

## 1.9.2

* `CHANGED` use user-specified FormRow key

## 1.9.1

* `FIXED` cascadeSelectFormField can not be reset 

## 1.9.0

* `CHANGED` update `uxcore-select2` to ~0.4.0
* `CHANGED` update `uxcore-select-form-field` to ~0.3.0
* `CHANGED` update `uxcore-date-form-field` to ~0.6.0

## 1.8.13

* `CHANGED` checkbox & radio style change

## 1.8.12

* `CHANGED` add new API `createFormField`

## 1.8.11

* `CHANGED` update `uxcore-date-form-field` to ~0.5.0 

## 1.8.10

* `FIXED` textarea height bug [#121](https://github.com/uxcore/uxcore-form/issues/121)

## 1.8.9

* `CHANGED` EditorFormField add new API `setContent`

## 1.8.8

* `CHANGED` add subComp TextAreaCount for TextAreaFormField

## 1.8.7

* `FIXED` searchFormField lineHeight bug

## 1.8.6

* `CHANGED` RadioFormField support `jsxdisabled`

## 1.8.5

* `CHANGED` EditorFormField jsxcontent is deprecated. use jsxvalues directly.

## 1.8.4

* `CHANGED` getValues method will return a promise if asyncValidate is true 

## 1.8.3

* `NEW` add new prop `asyncValidate`

## 1.8.2

* `CHANGED` update `PickableFormField` to ~0.2.0

## 1.8.1

* `NEW` add new FormField `PickableFormField`
* `CHANGED` CascadeSelectFormField support `allowClear`

## 1.8.0

* `CHANGED` update `uxcore-date-form-field` to ~0.4.0

## 1.7.5

* `CHANGED` support Child is null

## 1.7.4

* `CHANGED` doValidate support param `always` which make doValidate always set the field error state to true/false.

## 1.7.3

* `FIXED` fix server render bug 

## 1.7.2

* `CHANGED` add labelMatchInputHeight support (style) [#111](https://github.com/uxcore/uxcore-form/issues/111)

## 1.7.1

* `CHANGED` change dependency `uxcore-date-form-field` to ~0.3.0

## 1.7.0

* `CHNAGED` change dependency `uxcore-select2` to ~0.3.0
* `CHNAGED` change dependency `uxcore-select-form-field` to ~0.2.0

## 1.6.3

* `FIX` fix label style bug in IE/FireFox

## 1.6.2

* `NEW` add SwitchFormField 

## 1.6.1

* `CHANGED` CascadeFormField support multiple placeholders.
* `CHANGED` Form doValidate will pass the field whose jsxshow is false.
* `NEW` add renderView prop in InputFormField
* `CHANGED` remove ve support !

## 1.6.0

`CHANGED` do not trigger jsxonChange when resetValues() & setValues() & jsxvalues change. (#82)

## 1.5.1

`CHANGED` fix server render bug

## 1.5.0

`CHANGED` use new dev tools
`CHANGED` update tinymce dependency to ~0.2.0
`CHANGED` add warning in ButtonGroupFormField

## 1.4.5

`CHANGED` remove useless dependencies

## 1.4.4

`CHANGED` update radiogroup & checkbox-group

## 1.4.3

`HOTFIX` fix dependency uxcore-input-form-field

## 1.4.0
 
* `FIX` options not shown in searchFormField
* `CHANGED` update uxcore-date-form-field to ~0.2.0

## 1.3.15

`HOTFIX` fix dependency uxcore-input-form-field

## 1.3.13

`CHANGED` update uxcore-validator dependency

## 1.3.12

`CHANGED` SearchFormField style update

## 1.3.11

`CHANGED` separate DateFormField from Form

## 1.3.10

* `NEW` add prop `autosize` in `TextAreaFormField` (#90)
* `CHANGED` setValues enhancement: won't crash if field name is not found. (#89)

## 1.3.9

`HOTFIX` fix issue #91

## 1.3.8

`HOTFIX` fix select2 & selectFormField dependency

## 1.3.7

`CHANGED` adjust prototypeView style

## 1.3.6

`NEW` add visual engine view.

## 1.3.5

* `CHANGED` add candroping config
* `CHANGED` remove dependency `uxcore-uploader` `uxcore-button`  

## 1.3.4

* `FIX` fix typo in `prototype.js`

## 1.3.3

* `NEW` add visual engine support

## 1.3.2

* `CHANGED` upgrade uxcore-select2 to ~0.2.0

## 1.3.1

* `CHANGED` upgrade uxcore-calendar to ~0.3.0

## 1.3.0

* `CHANGED` new style

## 1.2.26

* `NEW` support visual engine

## 1.2.25

* `CHANGED` add prop placeholder in EditorFormField

## 1.2.24

* `HotFix` fix doValidate bug which will return undefined if jsxrules is not defined

## 1.2.23

* `NEW` `InputFormField` add new prop `inputType` #71
* `NEW` add new prop `onKeyDown` in `InputFormField` & `TextAreaFormField`
* `CHANGED` the first param `force` of `getValues` has the top priority.
* `FIXED` fix label style bug #77 

## 1.2.22
* `FIXED` fix issue #75

## 1.2.21
* `FIXED` fix issue #70 #73 #74

## 1.2.20
* `CHANGED` update dependency `uxcore-calendar` to `~0.2.0`

## 1.2.19

* `CHANGED` update scaffold 

## 1.2.18

* `CHANGED` selectFormField support onSelect & onDeselect
* `CHANGED` fix bug #68

## 1.2.13

* `CHANGED` update scaffold 

## 1.2.12

* `CHANGED` InputFormField & TextAreaFormField support new props `autoTrim`
* `CHANGED` remove UploadFormField & PersonFormField

## 1.2.11

* `NEW` TextAreaFormField support onBlur onFocus & validateOnBlur

## 1.2.10

* `FIX` fix issue #52 #53 #55 #58 #59

## 1.2.8

* `NEW` add standalone mode for formField

## 1.2.6

* `CHANGED` remove TableFormField and dependency uxcore-table

## 1.2.5

* `CHANGED` fix bug when using babel 6

## 1.2.4

* `FIX` fix issue #47 selectFormField does not show the default value.

## 1.2.3

* `FIX` fix issue #35 #38 #42 #44
* `CHANED` small style change with uxcore-select2

## 1.2.2

* `FIX` fix issue #36 #37

## 1.2.1

* `CHANGED` add error border color
* `CHANGED` some little style change

## 1.2.0

* `CHANGED` change gridFormField to TableFormField

## 1.1.2

* `NEW` add InputFormField plugin Count/LeftAddon/rightAddon.
* `NEW` uploadFormFiled can be used.
* `NEW` add new API setValues.
* `NEW` label now support rich text.
* `FIX` fix github issue #28.

## 1.1.1

* `NEW` add props instantValidate to meet the need that one don't want validate instantly
* `NEW` CheckboxFormField add prop jsxdisabled
* `NEW` prop jsxonChange now support 3 params `data` `fieldname` & `pass`

## 1.1.0

* `NEW` FormField can set its own mode different from Form now.
* `NEW` add GridFormField.
* `FIXED` when props jsxvalues change, form cannot handle correctly.
* `FIXED` when props jsxmode change, form cannot handle correctly.
* `CHANGED` update dependency 'react' to 0.14
* `CHANGED` change prefixCls from 'kuma-form' to 'kuma-uxform'


## 1.0.6

* `NEW` add props jsxshowLabel
* `NEW` add api resetValues()
* `CHANGED` RadioGroupFormField change with the update of uxcore-radiogroup
* `CHNAGED` ButtonGroupFormField change with the update of uxcore-button
* `CHANGED` EditorFormField change with the update of uxcore-tinymce
* `CHANGED` UploadFormField now depends on uxcore-upload
* `FIXED` API resetValues bug.

## 1.0.5

* `FIX` fix jsxshow bug in Other & ButtonGroup FormField

## 1.0.4

* `NEW` issue #7, add prop jsxshow in FormField

## 1.0.3

* `NEW` add ButtonGroupFormField used in Grid sub component.
* `NEW` add prop `passedData` to receive values from grid.

## 1.0.2

* `NEW` add common Field & rewrite data flow