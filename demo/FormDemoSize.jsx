import React from 'react';
import Form from '../src';

const { InputFormField, FormRow } = Form;

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
      },
      verticalAlign: true,
      jsxmode: 'view',
      // size: 'middle',
    };
    return (
      <Form {...formProps}>
        <InputFormField jsxname="text1" jsxlabel="text1" />
        <InputFormField jsxname="text2" jsxlabel="text2" />
        <InputFormField jsxname="text3" jsxlabel="text3" />
        <InputFormField jsxname="text4" jsxlabel="text4" />
        <FormRow>
          <InputFormField jsxname="text5" jsxlabel="text5" jsxmode="edit" />
          <InputFormField jsxname="text6" jsxlabel="text6" />
        </FormRow>
      </Form>
    );
  }
}

export default Demo;
