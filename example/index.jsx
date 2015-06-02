import React from 'react';
import RCForm from "../lib/index"

let Form = RCForm.Form;
let InputFormField = RCForm.InputFormField;
let TextAreaFormField = RCForm.TextAreaFormField;
let FormField = RCForm.FormField;
let Button = RCForm.Button;
let FormRow = RCForm.FormRow;
let RadioGroupFormField= RCForm.RadioGroupFormField;


const App=<Form mode="EDIT" className="horizontal-form">
           
            <InputFormField  className="one-half" label="姓名"  keyMap="name" tips="中文名称"  rules={{required: true , message: "not empty"}}/>

            <InputFormField  className="one-half"  label="Email" keyMap="email" tips="Email格式"  rules={{required: true,type:"email",message:"should be email"}}/>
	
            <FormRow>
            	<InputFormField  className="one-half"  label="岗位" keyMap="job" />
	            <InputFormField  className="one-half"  label="岗位" keyMap="job" />
                <InputFormField  className="one-half"  label="岗位" keyMap="job" />
            <InputFormField  className="one-half"  label="岗位" keyMap="job" />

              </FormRow>
            <FormRow>
                <TextAreaFormField  className="one-half" label="简介" keyMap="introduce" ></TextAreaFormField>
            	<RadioGroupFormField  className="one-half" label="水果" keyMap="fruit" jsxname="fruit" jsxvalue="orange"  tips="sss" rules={{required: true , message: "not empty"}}>
                    <input type="radio" value="apple" />Apple
                    <input type="radio" value="orange" />Orange
                    <input type="radio" value="watermelon" />Watermelon
                </RadioGroupFormField>
            </FormRow>
            <FormRow><Button label="提交"/></FormRow>
        </Form>;

React.render(App, document.getElementById('content'))