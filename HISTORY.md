## 1.2.12

`CHANGED` InputFormField & TextAreaFormField support new props `autoTrim`

## 1.2.11

`NEW` TextAreaFormField support onBlur onFocus & validateOnBlur

## 1.2.10

`FIX` fix issue #52 #53 #55 #58 #59

## 1.2.8

`NEW` add standalone mode for formField

## 1.2.6

`CHANGED` remove TableFormField and dependency uxcore-table

## 1.2.5

`CHANGED` fix bug when using babel 6

## 1.2.4

`FIX` fix issue #47 selectFormField does not show the default value.

## 1.2.3

`FIX` fix issue #35 #38 #42 #44
`CHANED` small style change with uxcore-select2

## 1.2.2

`FIX` fix issue #36 #37

## 1.2.1

`CHANGED` add error border color
`CHANGED` some little style change

## 1.2.0

`CHANGED` change gridFormField to TableFormField

## 1.1.2

`NEW` add InputFormField plugin Count/LeftAddon/rightAddon.
`NEW` uploadFormFiled can be used.
`NEW` add new API setValues.
`NEW` label now support rich text.
`FIX` fix github issue #28.

## 1.1.1

`NEW` add props instantValidate to meet the need that one don't want validate instantly
`NEW` CheckboxFormField add prop jsxdisabled
`NEW` prop jsxonChange now support 3 params `data` `fieldname` & `pass`

## 1.1.0

`NEW` FormField can set its own mode different from Form now.
`NEW` add GridFormField.
`FIXED` when props jsxvalues change, form cannot handle correctly.
`FIXED` when props jsxmode change, form cannot handle correctly.
`CHANGED` update dependency 'react' to 0.14
`CHANGED` change prefixCls from 'kuma-form' to 'kuma-uxform'


## 1.0.6

`NEW` add props jsxshowLabel
`NEW` add api resetValues()
`CHANGED` RadioGroupFormField change with the update of uxcore-radiogroup
`CHNAGED` ButtonGroupFormField change with the update of uxcore-button
`CHANGED` EditorFormField change with the update of uxcore-tinymce
`CHANGED` UploadFormField now depends on uxcore-upload
`FIXED` API resetValues bug.

## 1.0.5

`FIX` fix jsxshow bug in Other & ButtonGroup FormField

## 1.0.4

`NEW` issue #7, add prop jsxshow in FormField

## 1.0.3

`NEW` add ButtonGroupFormField used in Grid sub component.
`NEW` add prop `passedData` to receive values from grid.

## 1.0.2

`NEW` add common Field & rewrite data flow