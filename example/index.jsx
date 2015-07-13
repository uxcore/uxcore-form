import React from 'react';
import RCForm from "../index"

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

var _doClick= function() {
     Form.doSave();
};

//multiple columns form

const App=<Form mode="EDIT" className="horizontal-form">
            <FormRow>
                <InputFormField  className="one-half" label="姓名"  keyMap="name" tips="中文名称"  rules={{required: true , message: "not empty"}}/>
                <InputFormField  className="one-half"  label="Email" keyMap="email" tips="Email格式"  rules={{required: true,type:"email",message:"should be email"}}/>
            </FormRow>

            <FormRow>
            	<InputFormField  className="one-half"  label="岗位" keyMap="job" />
	            <InputFormField  className="one-half"  label="岗位" keyMap="job2" />
                <InputFormField  className="one-half"  label="岗位" keyMap="job3" />
                <InputFormField  className="one-half"  label="岗位" keyMap="job4" />
            </FormRow>
            <FormRow>
                <TextAreaFormField  className="one-half" label="简介" keyMap="introduce" ></TextAreaFormField>
            	<RadioGroupFormField  className="one-half" label="水果" keyMap="fruit" jsxname="fruit" jsxvalue=""  tips="sss" rules={{required: true , message: "not empty"}}>
                    <input type="radio" value="apple" />Apple
                    <input type="radio" value="orange" />Orange
                    <input type="radio" value="watermelon" />Watermelon
                </RadioGroupFormField>
            </FormRow>
            <FormRow>
                <InputFormField  className="one-half"  label="啦啦" keyMap="lala" />
                <SelectFormField className="one-half"  label="城市" keyMap="city">
                    <option >请选择</option>
                    <option value="bj" selected>北京</option>
                    <option value="nj">南京</option>
                    <option value="dj">东京</option>
                    <option value="xj">西京</option>
                </SelectFormField>
            </FormRow>
            <FormRow><Button label="提交" onClick={_doClick} /></FormRow>
        </Form>;

React.render(App, document.getElementById('box1'))


const App3=<Form mode="EDIT" className="horizontal-form">
        <FormRow>
            <InputFormField   className="one-third"  label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>
            <InputFormField   className="one-third"  label="年龄" keyMap="job" />
            <InputFormField   className="one-third"  label="性别" keyMap="job" />
        </FormRow>
        <TextAreaFormField  label="个人简介" keyMap="introduce" ></TextAreaFormField>
         
        <Button label="提交" onClick={_doClick} />
        </Form>;

React.render(App3, document.getElementById('box3'))

//single column form
const App2=<Form mode="EDIT" className="horizontal-form">
            <InputFormField   label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>
            <InputFormField   label="岗位" keyMap="job" />
            <TextAreaFormField  label="简介" keyMap="introduce" ></TextAreaFormField>
            <RadioGroupFormField   label="水果" keyMap="fruit" jsxname="fruit" jsxvalue=""  tips="sss" rules={{required: true , message: "not empty"}}>
                    <input type="radio" value="apple" />Apple
                    <input type="radio" value="orange" />Orange
                    <input type="radio" value="watermelon" />Watermelon
            </RadioGroupFormField>
            <InputFormField   label="啦啦" keyMap="lala" />
            <SelectFormField   label="城市" keyMap="city">
                    <option >请选择</option>
                    <option value="bj" selected>北京</option>
                    <option value="nj">南京</option>
                    <option value="dj">东京</option>
                    <option value="xj">西京</option>
            </SelectFormField>
            <Button label="提交" onClick={_doClick} />
        </Form>;

React.render(App2, document.getElementById('box2'))