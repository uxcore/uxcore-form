import React from 'react';
import ExampleCode from "examplecode";
import RCForm from "../index";
import TableTest from "../__test/table"

let Form = RCForm.Form;
let InputFormField = RCForm.InputFormField;
let TextAreaFormField = RCForm.TextAreaFormField;
let FormField = RCForm.FormField;
let Button = RCForm.Button;
let FormRow = RCForm.FormRow;
let RadioGroupFormField= RCForm.RadioGroupFormField;
let SelectFormField= RCForm.SelectFormField;
let FormRowTitle= RCForm.FormRowTitle;
var options=[
    {jsxtext:"上海",value:"SH",selected:true},
    {jsxtext:"北京",value:"BJ"}
];

var _doClick= function() {
     //Form.doSave();
};

//multiple columns form


var  Form1 = React.createClass({
  doClick: function(){
     this.refs.myform.doSave();
  },
  render: function() {
    return <div>
                <div className="site-type">多列表单22</div>
                <div className="site-container">
                <Form jsxmode="EDIT" ref="myform">
                    <FormRowTitle title="生态公司">sss</FormRowTitle>
                    <FormRow>
                        <InputFormField  className="one-half"  jsxtext="姓名"  jsxname="name" jsxtips="中文名称" jsxvalue="sss" jsxrule={{required: true , message: "not empty"}}/>
                        <InputFormField  className="one-half"  jsxtext="Email" jsxname="email" jsxtips="Email格式"  jsxrule={{required: true,type:"email",message:"should be email"}}/>
                    </FormRow>

                    <FormRow>
                        <TextAreaFormField  className="one-half" jsxtext="简介" jsxname="introduce" ></TextAreaFormField>
                        <RadioGroupFormField  className="one-half" jsxtext="水果" jsxname="fruit"  jsxvalue=""   jsxrule={{required: true , message: "not empty"}}>
                            <input type="radio" value="apple" />Apple
                            <input type="radio" value="orange" />Orange
                            <input type="radio" value="watermelon" />Watermelon
                        </RadioGroupFormField>
                    </FormRow>
                    <FormRow>
                        <InputFormField  className="one-half"  jsxtext="啦啦" jsxname="lala" />
                        <SelectFormField className="one-half"  jsxtext="城市" jsxname="city">
                            <option >请选择</option>
                            <option value="bj" selected>北京</option>
                            <option value="nj">南京</option>
                            <option value="dj">东京</option>
                            <option value="xj">西京</option>
                        </SelectFormField>
                    </FormRow>
                    <FormRow>
                        <FormField jsxtext="表格" jsxname="table" jsxtips="请留意表格类型" jsxrule={{required: true,message:"not empty"}} jsxvalue="table test">
                            <TableTest/>
                        </FormField>
                    </FormRow>

                    <FormRow><Button jsxtext="提交" onClick={this.doClick.bind(this)} /></FormRow>
                </Form>
                </div>
                <ExampleCode>
                    {`
                    <Form jsxmode="EDIT">
                    <FormRow>
                        <InputFormField  className="one-half"  jsxtext="姓名"  jsxname="name" jsxtips="中文名称" jsxvalue="sss" jsxrule={{required: true , message: "not empty"}}/>
                        <InputFormField  className="one-half"  jsxtext="Email" jsxname="email" jsxtips="Email格式"  jsxrule={{required: true,type:"email",message:"should be email"}}/>
                    </FormRow>

                    <FormRow>
                        <TextAreaFormField  className="one-half" jsxtext="简介" jsxname="introduce" ></TextAreaFormField>
                        <RadioGroupFormField  className="one-half" jsxtext="水果" jsxname="fruit"  jsxvalue=""  jsxtips="sss" jsxrule={{required: true , message: "not empty"}}>
                            <input type="radio" value="apple" />Apple
                            <input type="radio" value="orange" />Orange
                            <input type="radio" value="watermelon" />Watermelon
                        </RadioGroupFormField>
                    </FormRow>
                    <FormRow>
                        <InputFormField  className="one-half"  jsxtext="啦啦" jsxname="lala" />
                        <SelectFormField className="one-half"  jsxtext="城市" jsxname="city">
                            <option >请选择</option>
                            <option value="bj" selected>北京</option>
                            <option value="nj">南京</option>
                            <option value="dj">东京</option>
                            <option value="xj">西京</option>
                        </SelectFormField>
                    </FormRow>
                    <FormRow><Button jsxtext="提交" onClick={this.doClick.bind(this)} /></FormRow>
                </Form>
                   `}
                </ExampleCode>
        </div>
  }
});

React.render(<Form1/>, document.getElementById('box1'))


const App3=
            <div>
                <div className="site-type">inline表单</div>
                <div className="site-container">
                <Form jsxmode="EDIT" className="horizontal-form">
                    <FormRow>
                        <InputFormField   className="one-half"  jsxtext="用户名"  jsxname="name"  jsxrule={{required: true , message: "not empty"}}/>
                        <InputFormField   className="one-half"  jsxtext="密码" jsxname="job" />
                    </FormRow>
                </Form>
                 <ExampleCode>
                    {`
                    <Form jsxmode="EDIT" className="horizontal-form">
                        <FormRow>
                            <InputFormField   className="one-half"  jsxtext="用户名"  jsxname="name"  jsxrule={{required: true , message: "not empty"}}/>
                            <InputFormField   className="one-half"  jsxtext="密码" jsxname="job" />
                        </FormRow>
                    </Form>
                   `}
                </ExampleCode>
                </div>
            </div>

React.render(App3, document.getElementById('box3'))

//single column form
const App2=
        <div>
        <div className="site-type">单列表单</div>
        <div className="site-container">
        <Form jsxmode="EDIT" className="horizontal-form">
            <InputFormField   jsxtext="姓名"  jsxname="name"  jsxrule={{required: true , message: "not empty"}}/>
            <InputFormField   jsxtext="岗位" jsxname="job" />
            <TextAreaFormField  jsxtext="简介" jsxname="introduce" ></TextAreaFormField>
            <RadioGroupFormField   jsxtext="水果" jsxname="fruit" jsxvalue=""  jsxtips="sss" jsxrule={{required: true , message: "not empty"}}>
                    <input type="radio" value="apple" />Apple
                    <input type="radio" value="orange" />Orange
                    <input type="radio" value="watermelon" />Watermelon
            </RadioGroupFormField>
            <InputFormField   jsxtext="啦啦" jsxname="lala" />
            <SelectFormField   jsxtext="城市" jsxname="city">
                    <option >请选择</option>
                    <option value="bj" selected>北京</option>
                    <option value="nj">南京</option>
                    <option value="dj">东京</option>
                    <option value="xj">西京</option>
            </SelectFormField>
            <Button jsxtext="提交" onClick={_doClick} />
        </Form>
        </div>
        <ExampleCode>
                    {`
                    <Form jsxmode="EDIT" className="horizontal-form">
                        <InputFormField   jsxtext="姓名"  jsxname="name"  jsxrule={{required: true , message: "not empty"}}/>
                        <InputFormField   jsxtext="岗位" jsxname="job" />
                        <TextAreaFormField  jsxtext="简介" jsxname="introduce" ></TextAreaFormField>
                        <RadioGroupFormField   jsxtext="水果" jsxname="fruit" jsxvalue=""  jsxtips="sss" jsxrule={{required: true , message: "not empty"}}>
                                <input type="radio" value="apple" />Apple
                                <input type="radio" value="orange" />Orange
                                <input type="radio" value="watermelon" />Watermelon
                        </RadioGroupFormField>
                        <InputFormField   jsxtext="啦啦" jsxname="lala" />
                        <SelectFormField   jsxtext="城市" jsxname="city">
                                <option >请选择</option>
                                <option value="bj" selected>北京</option>
                                <option value="nj">南京</option>
                                <option value="dj">东京</option>
                                <option value="xj">西京</option>
                        </SelectFormField>
                        <Button jsxtext="提交" onClick={_doClick} />
                    </Form>
                   `}
                </ExampleCode>
        </div>;

React.render(App2, document.getElementById('box2'))