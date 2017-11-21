import React from 'react';
import Form from '../src';

const {
  InputFormField, FormRow, FormRowTitle,
  TextAreaFormField, SelectFormField, DateFormField,
  EditorFormField, SearchFormField,
} = Form;

class Demo extends React.Component {
  render() {
    const formProps = {
      jsxvalues: {
        text1: 'text1text1text1',
        text2: 'text2text2text2',
        text3: 'text3text3text3',
        text4: 'text4text4text4',
        text5: 'text5text5text5',
        text6: 'text6text6text6',
        text7: 'text7text7text7',
        text8: 'text8text8text8',
      },
      verticalAlign: false,
      jsxmode: 'view',
      size: 'small',
    };
    const commonFieldProps = {
      inputBoxMaxWidth: 'middle',
    };
    return (
      <div>
        <Form {...formProps} autoAdjustSpacing>
          <FormRowTitle jsxtitle="单排" />
          <InputFormField {...commonFieldProps} jsxname="text1" jsxlabel="text1" jsxmode="edit" />
          <InputFormField {...commonFieldProps} jsxname="text2" jsxlabel="text2" jsxmode="edit" />
          <InputFormField {...commonFieldProps} jsxname="text3" jsxlabel="text3" />
          <InputFormField {...commonFieldProps} jsxname="text4" jsxlabel="text4" />
          <InputFormField {...commonFieldProps} jsxname="text5" jsxlabel="text5" jsxmode="edit" />
          <InputFormField {...commonFieldProps} jsxname="text6" jsxlabel="text6" />
        </Form>
        <Form {...formProps}>
          <FormRowTitle jsxtitle="各种横向混排" />
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text1" jsxlabel="text1" jsxmode="edit" />
            <InputFormField {...commonFieldProps} jsxname="text2" jsxlabel="text2" jsxmode="edit" />
          </FormRow>
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text3" jsxlabel="text3" />
            <InputFormField {...commonFieldProps} jsxname="text4" jsxlabel="text4" jsxmode="edit" />
          </FormRow>
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text5" jsxlabel="text5" jsxmode="edit" />
            <InputFormField {...commonFieldProps} jsxname="text6" jsxlabel="text6" />
          </FormRow>
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text7" jsxlabel="text7" />
            <InputFormField {...commonFieldProps} jsxname="text8" jsxlabel="text8" />
          </FormRow>
        </Form>
        <Form {...formProps} verticalAlign autoAdjustSpacing>
          <FormRowTitle jsxtitle="竖向单排" />
          <InputFormField {...commonFieldProps} jsxname="text1" jsxlabel="text1" jsxmode="edit" />
          <InputFormField {...commonFieldProps} jsxname="text2" jsxlabel="text2" jsxmode="edit" />
          <InputFormField {...commonFieldProps} jsxname="text3" jsxlabel="text3" />
          <InputFormField {...commonFieldProps} jsxname="text4" jsxlabel="text4" />
          <InputFormField {...commonFieldProps} jsxname="text5" jsxlabel="text5" jsxmode="edit" />
          <InputFormField {...commonFieldProps} jsxname="text6" jsxlabel="text6" />
        </Form>
        <Form {...formProps} verticalAlign>
          <FormRowTitle jsxtitle="各种竖向混排" />
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text1" jsxlabel="text1" jsxmode="edit" />
            <InputFormField {...commonFieldProps} jsxname="text2" jsxlabel="text2" jsxmode="edit" />
          </FormRow>
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text3" jsxlabel="text3" />
            <InputFormField {...commonFieldProps} jsxname="text4" jsxlabel="text4" jsxmode="edit" />
          </FormRow>
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text5" jsxlabel="text5" jsxmode="edit" />
            <InputFormField {...commonFieldProps} jsxname="text6" jsxlabel="text6" />
          </FormRow>
          <FormRow>
            <InputFormField {...commonFieldProps} jsxname="text7" jsxlabel="text7" />
            <InputFormField {...commonFieldProps} jsxname="text8" jsxlabel="text8" />
          </FormRow>
        </Form>
        <Form>
          <FormRowTitle jsxtitle="默认输入框最大尺寸" />
          <InputFormField {...commonFieldProps} jsxname="text" jsxlabel="单行文本框" />
          <SelectFormField {...commonFieldProps} jsxname="select" jsxlabel="单选框" />
          <DateFormField {...commonFieldProps} jsxname="date" jsxlabel="日期框" />
          <DateFormField
            {...commonFieldProps} jsxname="date" jsxtype="cascade" jsxlabel="日期框" autoMatchWidth
          />
          <TextAreaFormField
            {...commonFieldProps} jsxname="textarea" jsxlabel="多行文本框" inputBoxMaxWidth="large"
          />
          <EditorFormField
            {...commonFieldProps} jsxname="editor" jsxlabel="富文本框" inputBoxMaxWidth="large"
          />
        </Form>
      </div>
    );
  }
}

export default Demo;
