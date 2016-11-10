/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const assign = require('object-assign');
const React = require('react');

const Form = require('../src');

const {
  FormRowTitle,
  SearchFormField,
} = Form;


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const me = this;

    const searchOptions = {
      jsxname: 'search',
      jsxlabel: '搜索框',
      dataType: 'jsonp',
      searchPlaceholder: '请勿泄露员工信息',
      placeholder: '请勿泄露员工信息',
      jsxfetchUrl: 'http://suggest.taobao.com/sug',
      advancedOptions: [
        {
          value: '1',
          text: '选项一',
        },
        {
          value: '2',
          text: '选项二',
        },
      ],
      advancedConfig: {
        placeholder: '高级选项',
      },
      classOptions: [
        {
          value: '1',
          text: '类别一',
        },
        {
          value: '2',
          text: '类别二',
        },
      ],
      classConfig: {
        placeholder: '类别',
      },
      afterFetch: (obj) => {
        const data = {};
        obj.result.forEach((item) => {
          data[item[1]] = item[0];
        });
        return data;
      },
      onIconClick: () => {
        console.log(me.refs.form.getValues());
      },
    };

    const tidyVer = assign({}, searchOptions, {
      jsxname: 'tidy',
      tidy: true,
      advancedOptions: [],
      classOptions: [],
    });


    return (
      <div className="demo">
        <Form ref="form">
          <FormRowTitle jsxtitle="标准搜索" />
          <SearchFormField {...searchOptions} />
          <FormRowTitle jsxtitle="精简搜索" />
          <SearchFormField {...tidyVer} />
        </Form>
      </div>
    );
  }
}

module.exports = Demo;
