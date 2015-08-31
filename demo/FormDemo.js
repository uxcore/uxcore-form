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
    Validator, 
    RadioGroupFormField,
    SelectFormField
} = Form;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Form jsxmode={Constants.MODE.EDIT} jsxdata={{test1: "我是测试", fruit: "apple"}}>
                    <FormRowTitle jsxtitle="我是行标题"/>
                    <FormRow>
                    </FormRow>
                    <InputFormField  
                     jsxname="test1" 
                     jsxlabel="测试输入框" 
                     jsxplaceholder="请输入" 
                     jsxtips="请输入数字"
                     jsxrules={[
                        {validator: Validator.isNotEmpty, errMsg: "不能为空"},
                        {validator: Validator.isNum, errMsg: "请输入数字"}
                     ]}/>
                    <RadioGroupFormField jsxname="fruit" jsxlabel="Fruit Type">
                            <input type="radio" value="apple" />Apple
                            <input type="radio" value="orange" />Orange
                            <input type="radio" value="watermelon" />Watermelon
                    </RadioGroupFormField>
                    <SelectFormField jsxlabel="City" jsxname="city">
                        <option >请选择</option>
                        <option value="bj" selected>北京</option>
                        <option value="nj">南京</option>
                        <option value="dj">东京</option>
                        <option value="xj">西京</option>
                    </SelectFormField>
                    <div className="demo"></div>
                </Form>
            </div>
        );
    }
};

module.exports = Demo;
