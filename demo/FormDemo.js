/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let Button = require('uxcore-button');


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
    CascadeSelectFormField,
    UploadFormField,
    OtherFormField,
    ButtonGroupFormField,
    EditorFormField,
    GridFormField
} = Form;

let CheckboxItem = CheckboxGroupFormField.Item;
let RadioItem = RadioGroupFormField.Item;
let Count = InputFormField.Count;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jsxvalues: {
                test1: "我是测试",
                fruit: "apple",
                city: "nj",
                textArea: "我是多行文本",
                // date: "2015-09-01",
                checkbox: ["sea"],
                dicts:{
                   datas:[
                      {
                        city: "hz",
                        email: "333",
                        name: "33"
                      }, {
                        city: "bj",
                        email: "33322",
                        name: "3322"
                      }
                   ]
                },
                cascade: ["a", "ab"],
                editor: "a"
            },
            jsxdata: {
                "bj": "北京",
                "nj": "南京",
                "dj": "东京",
                "xj": "西京"
            },
            mode: Constants.MODE.EDIT
        }
    }

    handleClick() {
        let me = this;
        console.log(me.refs.form.getValues());
    }

    handleFormClick(data) {
        this.refs.form.setState({
           mode:'VIEW'
        })
    }

    update() {
        console.log('work')
        this.forceUpdate();
    }

    handleChange(value, name, pass) {
        console.log(value, name, pass);
    }

    changeMode() {
        this.setState({
            mode: this.state.mode == Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT
        })
    }

    handleValueChange() {
        let me = this;
        me.setState({
            jsxvalues: {
                test1: "我是测试22",
                fruit: "apple",
                city: "nj",
                textArea: "我是多行文本",
                date: "2015-09-01",
                checkbox: ["sea"],
                // cascade: ["a", "ab"]
            },
            jsxdata: {
                "bj": "北",
                "nj": "南",
                "dj": "东",
                "xj": "西"
            }
        })
    }

    render() {
        let me = this;
        let data = {
            test1: "我是测试",
            fruit: "apple",
            city: "nj",
            textArea: "我是多行文本",
            date: "2015-09-01",
            checkbox: ["sea"],
            // cascade: ["a", "ab"]
        }

        let casData = {
            length: 3,
            contents: [
                {
                    value: "a",
                    text: "A",
                    contents: [
                        {
                            value: "ab",
                            text: "AB",
                            contents: [
                                {
                                    value: "abc",
                                    text: "ABC"
                                },
                                {
                                    value: "abd",
                                    text: "ABD"
                                }
                            ]
                        },
                        {
                            value: "ac",
                            text: "AC",
                            contents: [
                                {
                                    value: "acb",
                                    text: "ACB"
                                },
                                {
                                    value: "acd",
                                    text: "ACD"
                                }
                            ]
                        }
                    ]
                },
                {
                    value: "b",
                    text: "B",
                    contents: [
                        {
                            value: "ba",
                            text: "BA",
                            contents: [
                                {
                                    value: "bab",
                                    text: "BAB"
                                },
                                {
                                    value: "bad",
                                    text: "BAD"
                                }
                            ]
                        },
                        {
                            value: "bc",
                            text: "BC",
                            contents: [
                                {
                                    value: "bca",
                                    text: "BCA"
                                },
                                {
                                    value: "bcd",
                                    text: "BCD"
                                }
                            ]
                        }
                    ]
                }
            ]
        }


        let columns = [
            { dataKey: 'city',title:'城市', width: 180,type:'select' ,options:{
               'hz':'杭州',
               'bj':'北京',
               'sh':'上海',
               'ah':'安徽'
            }},
            { dataKey: 'name',title:"姓名",width: 200,type:"text"},
            { dataKey: 'email',title:"Email",width: 200,type:"text"},
            { dataKey: 'action1', title:'操作1', width:100, type:"action",items:[
              {title:'增加', type:"addRow", cb: function(rowData){console.info(rowData)}},
              {title:'删除', type:"delRow", cb: function(rowData){console.info(rowData)}}
            ]}
        ];


        let renderProps={
            jsxcolumns:columns
        };

        return (
            <div className="demo">
                <Form ref="form" instantValidate={true} jsxmode={me.state.mode} jsxvalues={me.state.jsxvalues} jsxonChange={me.handleChange.bind(me)}>
                    <FormRowTitle jsxtitle="我是行标题"/>
                    <FormRow>
                        <InputFormField
                         required={true}
                         jsxname="test1"
                         jsxlabel="普通输入框"
                         jsxtips="请输入数字"
                         jsxrules={{validator: Validators.isNotEmpty, errMsg: "不能为空"}}>
                            <Count total={20}/>
                        </InputFormField>
                         <NumberInputFormField
                          jsxname="number"
                          jsxlabel="数字输入框"
                          jsxtype="money"
                          jsxplaceholder="输入数字"
                          jsxtips="数字和一般的输入框不同"
                          jsxrules={[
                            {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                            {validator: Validators.isNum, errMsg: "请输入数字"}
                         ]}/>
                        
                        <ButtonGroupFormField jsxshow={false}>
                            <Button size="medium" type="primary" action="submit" onClick={me.handleFormClick.bind(me)}>提交</Button>
                            <Button size="medium" type="secondary" action="reset">取消</Button>
                        </ButtonGroupFormField>
                    </FormRow>
                    <FormRow>
                        <RadioGroupFormField jsxname="fruit" jsxlabel="Radio" jsxflex={1}>
                            <RadioItem value="apple" text="Apple"/>
                            <RadioItem value="orange" text="Orange"/>
                            <RadioItem value="watermelon" text="Watermelon"/>
                        </RadioGroupFormField>
                        <CheckboxGroupFormField jsxname="checkbox" jsxlabel="复选框" jsxdisabled={true}>
                            <CheckboxItem value="air" text="天空"/>
                            <CheckboxItem value="sea" text="大海"/>
                        </CheckboxGroupFormField>
                    </FormRow>
                    <TextAreaFormField jsxname="textArea" jsxlabel="多行文本框"/>
                    <FormRowTitle jsxtitle="我是行标题2"/>
                    <FormRow>
                        <SelectFormField
                         jsxlabel="单选"
                         jsxname="city"
                         jsxdisabled={true}
                         jsxfetchUrl="http://suggest.taobao.com/sug"
                         afterFetch={(obj) => {
                            let data = {};
                            obj.result.forEach((item, index) => {
                                data[item[1]] = item[0];
                            });
                            return data;
                         }}
                         jsxdata={me.state.jsxdata}/>
                        <DateFormField format="yyyy-MM-dd HH:mm:ss" jsxname="date" jsxlabel="日期"/>
                    </FormRow>
                    <FormRow>
                        <SelectFormField
                         jsxlabel="单选 combo 模式"
                         jsxname="goods"
                         jsxfetchUrl="http://suggest.taobao.com/sug"
                         jsxcombobox={true}
                         afterFetch={(obj) => {
                            let data = {};
                            obj.result.forEach((item, index) => {
                                data[item[1]] = item[0];
                            });
                            return data;
                         }}/>
                         <SelectFormField
                         jsxlabel="多选模式"
                         jsxname="goods2"
                         jsxmultiple={true}
                         jsxfetchUrl="http://suggest.taobao.com/sug"
                         afterFetch={(obj) => {
                            let data = {};
                            obj.result.forEach((item, index) => {
                                data[item[1]] = item[0];
                            });
                            return data;
                         }}/>
                    </FormRow>
                    <FormRow>
                        <UploadFormField
                          jsxname="upload"
                          jsxlabel="上传"
                          url="http://demo.nwux.taobao.net/file/upload"/>
                    </FormRow>
                    <FormRowTitle jsxtitle="级联类"/>
                    <DateFormField jsxtype="cascade" jsxname="casDate" jsxlabel="级联日期" jsxfrom="2015-10-2" jsxto="2015-10-10"/>
                    <CascadeSelectFormField
                     jsxdata={casData}
                     jsxname="cascade"
                     jsxlabel="级联选择"/>
                    <EditorFormField jsxname="editor"
                                     jsxlabel="富文本编辑器"
                                     jsxcontent="1"/>

                    <GridFormField jsxname="dicts" jsxlabel="薪酬字典" {...renderProps}>
                    </GridFormField>
                    <ButtonGroupFormField>
                        <Button size="medium" action="submit" onClick={me.handleClick.bind(me)}>提交</Button>
                        <Button size="medium" type="secondary" action="reset">取消</Button>
                        <Button size="medium" type="secondary" onClick={me.handleValueChange.bind(me)}>修改 props</Button>
                        <Button type="secondary" onClick={me.changeMode.bind(me)}>转变模式</Button>
                        <Button type="secondary" onClick={me.update.bind(me)}>强制刷新</Button>
                    </ButtonGroupFormField>
                </Form>
            </div>
        );
    }
};

module.exports = Demo;
