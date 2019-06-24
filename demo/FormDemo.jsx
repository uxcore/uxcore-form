/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */


/* eslint-disable react/jsx-no-bind */

import Button from 'uxcore-button';
import Icon from 'uxcore-icon';
import React from 'react';
import Form from '../src';

const {
  Constants,
  FormRowTitle,
  FormCard,
  FormRow,
  InputFormField,
  Validators,
  RadioGroupFormField,
  SelectFormField,
  TextAreaFormField,
  NumberInputFormField,
  DateFormField,
  CheckboxGroupFormField,
  CascadeSelectFormField,
  OtherFormField,
  ButtonGroupFormField,
  EditorFormField,
  SwitchFormField,
  PickableFormField,
  SearchFormField,
  createFormField,
} = Form;


const CheckboxItem = CheckboxGroupFormField.Item;
const RadioItem = RadioGroupFormField.Item;
const PickItem = PickableFormField.Item;
const { Count, RightAddon } = InputFormField;
const { TextAreaCount } = TextAreaFormField;
const Option = SelectFormField.Option;
const CustomField = createFormField();

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      jsxtype: 'money',
      // delimiter: ',',
      fixedNum: 2,
      jsxvalues: {
        test1: '我是测试',
        fruit: 'apple',
        number: 1,
        city: 'nj',
        editor: '我是一个编辑器',
        option: '1',
        // textArea: "我是多行文本",
        // date: "2015-09-01",
        goods2: ['a', 'b'],
        checkbox: ['sea'],
        theme: 'Form 展示',
        location: 'Uxcore 站点',
        date: 1213123123123,
        pass:'123123',
        content1: '这是一个 Form 的模式转换页面1。',
        content2: '这是一个 Form 的模式转换页面2。',
        content3: '这是一个 Form 的模式转换页面3。',
        content4: '这是一个 Form 的模式转换页面4。',
        content5: '这是一个 Form 的模式转换页面5。',
        dicts: {
          datas: [
            {
              city: 'hz',
              email: '333',
              name: '33',
            },
          ],
        },
        cascade: ['a', 'ab'],
      },
      jsxdata: {
        bj: '北京',
        nj: '南京南京南京南京南京南京南京南京南京南京南京南京南京南京',
        dj: '东京',
        xj: '西京',
      },
      mode: Constants.MODE.EDIT,
      size: 'middle',
      verticalAlign: true,
    };
    // setTimeout(() => {
    //   this.setState({
    //     jsxtype: 'money',
    //     delimiter: ','
    //   })
    // }, 8000)
  }

  handleClick() {
    const me = this;
    me.refs.form.doValidateAndScroll();
    console.log(this.refs.form.getValues());
    // console.log(JSON.stringify(me.refs.form.getValues()));
  }

  handleSetValues() {
    const me = this;
    me.refs.form.setValues({
      test1: '我不是测试',
      fruit: 'orange',
      number: '',
      cascade: [],
    });
  }

  handleShowPassChange() {
    const me = this;
    me.setState({
      showPass: !me.state.showPass,
    });
  }

  handleFormClick() {
    this.refs.form.setState({
      mode: Constants.MODE.VIEW,
    });
  }

  update() {
    console.log('work');
    this.forceUpdate();
  }

  handleChange(value, name, pass) {
    console.log(value, name, pass);
    // this.setState(value);
  }

  handleKeyDown(e) {
    if (e.keyCode === Form.KeyCode.Enter) {
      console.log('enter');
    }
  }

  handleTextAreaBlur(e, pass) {
    console.log(e, pass);
  }

  changeMode() {
    this.setState({
      mode: this.state.mode === Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT,
    });
  }

  handleValueChange() {
    const me = this;
    me.setState({
      jsxvalues: {
        test1: '我是测试22',
        fruit: 'apple',
        city: [],
        number: '',
        textArea: '我是多行文本',
        editor: '默认值被手动修改',
        date: '2015-09-01',
        checkbox: ['sea'],
        // cascade: ["a", "ab"]
      },
      jsxdata: {
        bj: '北',
        nj: '南',
        dj: '东',
        xj: '西',
      },
    });
  }

  render() {
    const me = this;
    // const data = {
    //   test1: '我是测试',
    //   fruit: 'apple',
    //   city: 'nj',
    //   textArea: '我是多行文本',
    //   date: '2015-09-01',
    //   checkbox: ['sea'],
    //   // cascade: ["a", "ab"]
    // };

    const casData = {
      length: 3,
      contents: [
        {
          value: 'a',
          text: 'A',
          contents: [
            {
              value: 'ab',
              text: 'AB',
              contents: [
                {
                  value: 'abc',
                  text: 'ABC',
                },
                {
                  value: 'abd',
                  text: 'ABD',
                },
              ],
            },
            {
              value: 'ac',
              text: 'AC',
              contents: [
                {
                  value: 'acb',
                  text: 'ACB',
                },
                {
                  value: 'acd',
                  text: 'ACD',
                },
              ],
            },
          ],
        },
        {
          value: 'b',
          text: 'B',
          contents: [
            {
              value: 'ba',
              text: 'BA',
              contents: [
                {
                  value: 'bab',
                  text: 'BAB',
                },
                {
                  value: 'bad',
                  text: 'BAD',
                },
              ],
            },
            {
              value: 'bc',
              text: 'BC',
              contents: [
                {
                  value: 'bca',
                  text: 'BCA',
                },
                {
                  value: 'bcd',
                  text: 'BCD',
                },
              ],
            },
          ],
        },
      ],
    };

    const itemsData = [{
      text: '条件一',
      value: 1,
      num: 15,
    }, {
      text: '条件二',
      value: 2,
      num: 20,
    }, {
      text: '条件三',
      value: 3,
      disable: true,
    }];

    return (
      <div className="demo">
        <Form
          ref="form"
          size={me.state.size}
          instantValidate
          verticalAlign={me.state.verticalAlign}
          jsxmode={me.state.mode}
          jsxvalues={me.state.jsxvalues}
          jsxonChange={me.handleChange.bind(me)}
        >
          <FormRowTitle jsxtitle="我是行标题" />
          <FormRow>
            <InputFormField
              labelMatchInputHeight
              required
              jsxname="test1"
              jsxdisabled={false}
              autoTrim={false}
              jsxlabel="普通输入框"
              jsxtips="请输入数字"
              validateOnBlur={false}
              onKeyDown={me.handleKeyDown.bind(me)}
              jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
            >
              <RightAddon>
                <i className="kuma-icon kuma-icon-phone" />
              </RightAddon>
              {/* <RightAddon>
                <span style={{ lineHeight: '24px' }}>元</span>
              </RightAddon> */}
              <Count total={20} />
            </InputFormField>
            <NumberInputFormField
              jsxname="number"
              jsxlabel="数字输入框"
              jsxtype={this.state.jsxtype}
              delimiter={this.state.delimiter}
              fixedNum={this.state.fixedNum}
              // formatOnBlur
              jsxplaceholder="输入数字"
              jsxtips="数字和一般的输入框不同"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                { validator: Validators.isNum, errMsg: '请输入数字' },
              ]}
            >
              <RightAddon>
                1111
              </RightAddon>
            </NumberInputFormField>
          </FormRow>

          <ButtonGroupFormField>
            <Button size="medium" onClick={me.handleClick.bind(me)}>
              提交
            </Button>
            <Button size="medium" type="secondary" action="reset">
              取消
            </Button>
            <Button type="secondary" onClick={me.handleSetValues.bind(me)}>
              手动setValues
            </Button>
            <Button
              size="medium"
              type="secondary"
              onClick={me.handleValueChange.bind(me)}
            >
              修改 props

            </Button>
            <Button type="secondary" onClick={me.changeMode.bind(me)}>
              转变模式
            </Button>
            <Button type="secondary" onClick={me.update.bind(me)}>
              强制刷新
            </Button>
          </ButtonGroupFormField>
        </Form>
      </div>
    );
  }
}

export default Demo;
