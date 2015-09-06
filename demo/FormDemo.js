/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Form = require('../src');
let {
    Constants, 
    FormRowTitle, 
    FormRow, 
    FormField, 
    InputFormField, 
    Validators, 
    RadioGroupFormField,
    SelectFormField,
    TextAreaFormField,
    NumberInputFormField,
    DateFormField,
    CheckboxGroupFormField,
    CascadeSelectFormField
} = Form;

let CheckboxItem = CheckboxGroupFormField.Item;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let data = {
            test1: "我是测试", 
            fruit: "apple", 
            city: "nj", 
            textArea: "我是多行文本", 
            date: "2015-09-01",
            checkbox: ["sea"]
        }

        let casData = {
            length: 3,
            contents: [
                {
                    value: "a",
                    text: "a",
                    contents: [
                        {
                            value: "ab",
                            text: "ab",
                            contents: [
                                {
                                    value: "abc",
                                    text: "abc"
                                },
                                {
                                    value: "abd",
                                    text: "abd"
                                }
                            ]
                        },
                        {
                            value: "ac",
                            text: "ac",
                            contents: [
                                {
                                    value: "acb",
                                    text: "acb"
                                },
                                {
                                    value: "acd",
                                    text: "acd"
                                }
                            ]
                        }
                    ]
                },
                {
                    value: "b",
                    text: "b",
                    contents: [
                        {
                            value: "ba",
                            text: "ba",
                            contents: [
                                {
                                    value: "bab",
                                    text: "bab"
                                },
                                {
                                    value: "bad",
                                    text: "bad"
                                }
                            ]
                        },
                        {
                            value: "bc",
                            text: "bc",
                            contents: [
                                {
                                    value: "bca",
                                    text: "bca"
                                },
                                {
                                    value: "bcd",
                                    text: "bcd"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
            
            
        return (
            <div>
                <Form jsxmode={Constants.MODE.EDIT} jsxdata={data}>
                    <FormRowTitle jsxtitle="我是行标题"/>
                    <FormRow>
                        <InputFormField  
                         jsxname="test1" 
                         jsxlabel="测试输入框" 
                         jsxplaceholder="请输入" 
                         jsxtips="请输入数字"
                         jsxrules={{validator: Validators.isNotEmpty, errMsg: "不能为空"}}/>
                        <RadioGroupFormField jsxname="fruit" jsxlabel="Fruit Type" jsxflex={1}>
                                <input type="radio" value="apple" />Apple
                                <input type="radio" value="orange" />Orange
                                <input type="radio" value="watermelon" />Watermelon
                        </RadioGroupFormField>
                    </FormRow>
                    <FormRow>
                        <SelectFormField 
                         jsxlabel="City" 
                         jsxname="city"
                         jsxfetchUrl="http://suggest.taobao.com/sug"
                         afterFetch={(obj) => {
                            let data = {};
                            obj.result.forEach((item, index) => {
                                data[item[1]] = item[0];
                            });
                            console.log(data);
                            return data;
                         }} 
                         jsxdata={{
                            "bj": "北京",
                            "nj": "南京",
                            "dj": "东京",
                            "xj": "西京"
                         }}
                         jsxstyle={{
                            width: 200
                         }}/>
                         <NumberInputFormField
                          jsxname="number"
                          jsxlabel="数字输入"
                          jsxtype="cnmobile"
                          jsxplaceholder="输入数字"
                          jsxtips="数字和一般的输入框不同"
                          jsxrules={[
                            {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                            {validator: Validators.isNum, errMsg: "请输入数字"}
                         ]}/>
                    </FormRow>
                    <FormRow>
                        <TextAreaFormField jsxname="textArea" jsxlabel="多行文本框"/>
                        <DateFormField jsxflex={2} jsxname="date" jsxlabel="日期"/>
                        <CheckboxGroupFormField jsxname="checkbox" jsxlabel="多选">
                          <CheckboxItem value="air" text="天空"/>
                          <CheckboxItem value="sea" text="大海"/>
                        </CheckboxGroupFormField>
                    </FormRow>
                    <CascadeSelectFormField 
                     jsxdata={casData} 
                     jsxname="cascade" 
                     jsxlabel="级联"
                     jsxstyle={{
                        width: 200
                     }}/>
                    <div className="demo"></div>
                </Form>
            </div>
        );
    }
};

module.exports = Demo;
