import React from 'react';
import RCForm from "../lib/index"

let Form = RCForm.Form;
let InputFormField = RCForm.InputFormField;
let TextAreaFormField = RCForm.TextAreaFormField;
let FormField = RCForm.FormField;
let Button = RCForm.Button;

const App=<Form mode="EDIT">
            <InputFormField label="zhouquan"  keyMap="name" tips="中文名称"  rules={{required: true , message: "not empty"}}/>
            <InputFormField label="zhouquan22" keyMap="email" tips="Email格式"  rules={{required: true,type:"email",message:"should be email"}}/>
            <InputFormField label="zhouquan33" keyMap="job" />
            <TextAreaFormField label="简介" keyMap="introduce" ></TextAreaFormField>
            <FormField><Button label="提交"/></FormField>
        </Form>;


React.render((
    <App />
), document.getElementById('content'))