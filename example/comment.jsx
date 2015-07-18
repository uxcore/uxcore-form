import React from 'react';
import RCForm from "../index";
import ExampleCode from "./exampleCode";

let Form = RCForm.Form;
let InputFormField = RCForm.InputFormField;
let TextAreaFormField = RCForm.TextAreaFormField;
let FormField = RCForm.FormField;
let Button = RCForm.Button;
let FormRow = RCForm.FormRow;
let RadioGroupFormField= RCForm.RadioGroupFormField;
let SelectFormField= RCForm.SelectFormField;

var options=[
    {label:"上海",value:"SH",selected:true},
    {label:"北京",value:"BJ"}
];




const App3=<div><Form mode="EDIT" className="horizontal-form">
        <FormRow>
            <InputFormField   className="one-third"  label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>
            <InputFormField   className="one-third"  label="年龄" keyMap="job" />
            <InputFormField   className="one-third"  label="性别" keyMap="job" />
        </FormRow>
        <TextAreaFormField  label="个人简介" keyMap="introduce" ></TextAreaFormField>
        <Button label="提交" />
        </Form>
        <ExampleCode>
            {`
            <Form mode="EDIT" className="horizontal-form">
                <FormRow>
                    <InputFormField   className="one-third"  label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>
                    <InputFormField   className="one-third"  label="年龄" keyMap="job" />
                    <InputFormField   className="one-third"  label="性别" keyMap="job" />
                </FormRow>
                <TextAreaFormField  label="个人简介" keyMap="introduce" ></TextAreaFormField>
                 
                <Button label="提交" />
            </Form>
           `}
        </ExampleCode>
    </div>;

React.render(App3, document.getElementById('box3'))
