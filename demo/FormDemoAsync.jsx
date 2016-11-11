import React from 'react';
import Button from 'uxcore-button';
import Form from '../src';

const {
  InputFormField,
} = Form;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange() {

  }

  handleClick() {
    this.form.getValues().then((data) => {
      console.log(data);
    });
  }

  saveRef(refName) {
    const me = this;
    return (c) => {
      me[refName] = c;
    };
  }
  render() {
    return (
      <div>
        <Form jsxonChange={this.handleChange} asyncValidate ref={this.saveRef('form')}>
          <InputFormField
            jsxname="input"
            jsxlabel="异步校验"
            jsxrules={(value, resolve, reject) => {
              if (/xw/.test(value || '')) {
                reject('输入的值不能含有 xw');
              } else if ((value || '').length > 5) {
                reject('输入的文字长度不能超过 5');
              }
              resolve();
            }}
          />
        </Form>
        <Button onClick={this.handleClick}>获取表单信息</Button>
      </div>
    );
  }
}

module.exports = Demo;
