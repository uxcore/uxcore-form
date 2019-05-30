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
      // jsxtype: 'money',
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
              formatOnBlur
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
          <FormRow>
            <RadioGroupFormField jsxname="fruit" jsxlabel="Radio" jsxflex={1}>
              <RadioItem value="apple" text="Apple" />
              <RadioItem value="orange" text="Orange" />
              <RadioItem value="watermelon" text="Watermelon" />
            </RadioGroupFormField>
            <CheckboxGroupFormField jsxname="checkbox" jsxlabel="复选框">
              <CheckboxItem value="air" text="Sky" />
              <CheckboxItem value="sea" text="Sea" />
              <CheckboxItem value="land" text="Land and mountains" />
            </CheckboxGroupFormField>
          </FormRow>
          <FormRow>
            <InputFormField jsxname="pass" placeholder={'请输入密码'} jsxlabel="请输入密码" inputType={me.state.showPass ? 'text' : 'password'}>
              <RightAddon>
                <Icon
                  usei
                  style={{ cursor: 'pointer' }}
                  name={!me.state.showPass ? 'xianshi' : 'yincang'}
                  onClick={me.handleShowPassChange.bind(me)}
                />
              </RightAddon>
            </InputFormField>
            <SearchFormField
              jsxlabel="搜索框"
              jsxshowLabel
              jsxname="search"
              placeholder="姓名/手机号/工号"
              classOptions={[
                {
                  value: '1',
                  text: '用户',
                },
                {
                  value: '2',
                  text: '商品',
                },
              ]}
              classConfig={{
                placeholder: '类别',
              }}
            />
          </FormRow>
          <FormRow>
            <SwitchFormField
              jsxname="switch"
              jsxlabel="开关"
              checkedChildren="显示"
              unCheckedChildren="隐藏"
            />
            <PickableFormField
              jsxlabel="筛选"
              jsxname="pick"
              multiple
              type="hook"
            >
              {itemsData.map((item, index) => (
                <PickItem key={index} value={item.value}>
                  {item.text}
                </PickItem>
              ))}
            </PickableFormField>
          </FormRow>
          <TextAreaFormField
            jsxname="textArea"
            jsxlabel="多行文本框"
            jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
            jsxplaceholder="测试"
            validateOnBlur={false}
            onBlur={me.handleTextAreaBlur.bind(me)}
          >
            <TextAreaCount total={100} />
          </TextAreaFormField>
          <FormRowTitle jsxtitle="我是行标题2" />
          <FormRow>
            <SelectFormField
              jsxlabel="单选"
              jsxname="city"
              allowClear
              jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
              disabled={false}
              jsxdata={me.state.jsxdata}
            />
            <DateFormField
              format="yyyy-MM-dd HH:mm:ss"
              jsxname="date"
              jsxlabel="日期"
              locale="zh-cn"
            />
          </FormRow>
          <FormRow>
            <SelectFormField
              jsxlabel="单选 combo 模式"
              disabled={false}
              jsxname="goods"
              jsxfetchUrl="http://suggest.taobao.com/sug"
              dataType="jsonp"
              combobox
              afterFetch={(obj) => {
                const data = {};
                obj.result.forEach((item) => {
                  data[item[1]] = item[0];
                });
                return data;
              }}
            />
            <SelectFormField
              jsxlabel="多选模式"
              jsxname="goods2"
              multiple
              jsxfetchUrl="http://suggest.taobao.com/sug"
              jsxdata={{
                a: 'A',
                b: 'B',
              }}
              beforeFetch={function (data) {
                console.log(data);
              }}
              dataType="jsonp"
              afterFetch={(obj) => {
                const data = {};
                obj.result.forEach((item) => {
                  data[item[1]] = item[0];
                });
                return data;
              }}
            />
          </FormRow>
          <SelectFormField
            jsxname="option"
            jsxlabel="传 option"
          >
            <Option value="1">
              第一个选项
            </Option>
            <Option value="2">
              第二个选项
            </Option>
            <Option value="3">
              第三个选项
            </Option>
          </SelectFormField>
          <FormRowTitle jsxtitle="级联类" />
          <DateFormField
            showTime
            jsxtype="cascade"
            jsxname="casDate"
            jsxlabel="级联日期"
            // instantValidate={false}
            format="yyyy/MM/dd"
            jsxrules={[{
              validator: (value) => {
                if (typeof value === 'undefined') {
                  return false;
                } if (Array.isArray(value) && value.length < 2) {
                  return false;
                }
                for (let i = 0, l = value.length; i < l; i++) {
                  if (!value[i]) {
                    return false;
                  }
                }
                return true;
              },
              errMsg: '出错啦',
            }]}
          />
          <CascadeSelectFormField
            jsxdata={casData}
            allowClear
            getPopupContainer={() => {
              const div = document.createElement('div');
              div.className = 'uxcore';
              document.body.appendChild(div);
              return div;
            }}
            jsxplaceholder={['选项一', '选项二', '选项三']}
            jsxname="cascade"
            jsxlabel="级联选择"
          />
          <EditorFormField
            jsxname="editor"
            jsxlabel="富文本编辑器"
            placeholder="测试"
          />

          <CustomField jsxname="custom" jsxlabel="定制" placeholder="test" />

          <FormCard
            title="这是一个卡片"
            defaultCollapsed={false}
            showCollapseIcon={true}
          >
            <FormRowTitle jsxtitle={'折扣价看大家发'} type={'thirdary'} />
            <FormRow>
              <InputFormField
                labelMatchInputHeight
                required
                jsxname="theme"
                jsxlabel={'主题'}
                jsxdisabled={false}
                autoTrim={false}
                validateOnBlur={false}
                onKeyDown={me.handleKeyDown.bind(me)}
                jsxrules={[
                  { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                  { validator: Validators.isNum, errMsg: '必须为数字' }
                ]}
              >
                <Count total={20} />
              </InputFormField>
              <InputFormField
                labelMatchInputHeight
                required
                jsxname="location"
                jsxdisabled={false}
                autoTrim={false}
                jsxlabel="普通输入框"
                validateOnBlur={false}
                onKeyDown={me.handleKeyDown.bind(me)}
                jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
              >
                <Count total={20} />
              </InputFormField>
              <InputFormField
                labelMatchInputHeight
                required
                jsxname="content5"
                jsxdisabled={false}
                autoTrim={false}
                jsxlabel="普通输入框"
                validateOnBlur={false}
                onKeyDown={me.handleKeyDown.bind(me)}
                jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
              >
                <Count total={20} />
              </InputFormField>
            </FormRow>
            <NumberInputFormField
              jsxname="date"
              jsxlabel="数字输入框"
              jsxtype={this.state.jsxtype}
              delimiter={this.state.delimiter}
              fixedNum={this.state.fixedNum}
              formatOnBlur
              jsxplaceholder="输入数字"
              jsxtips="数字和一般的输入框不同"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                { validator: Validators.isNum, errMsg: '请输入数字' },
              ]}
            />
          </FormCard>
          <FormCard
            title="这也是一个卡片"
            showCollapseIcon={true}
          >
            <InputFormField
              labelMatchInputHeight
              required
              jsxname="theme"
              jsxdisabled={false}
              autoTrim={false}
              jsxlabel="普通输入框"
              jsxtips="请输入数字"
              validateOnBlur={false}
              onKeyDown={me.handleKeyDown.bind(me)}
              jsxrules={{ validator: Validators.isNotEmpty, errMsg: '不能为空' }}
            >
              <Count total={20} />
            </InputFormField>
          </FormCard>

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
