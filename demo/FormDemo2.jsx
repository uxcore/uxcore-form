/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import assign from 'object-assign';

import React from 'react';
import Form from '../src';

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
      placeholder: '姓名/手机号/工号',
      jsxfetchUrl: 'http://suggest.taobao.com/sug',
      onSelect() {
        console.log('select');
      },
      // advancedOptions: [
      //   {
      //     value: '1',
      //     text: '选项一',
      //   },
      //   {
      //     value: '2',
      //     text: '选项二',
      //   },
      // ],
      // advancedConfig: {
      //   placeholder: '高级选项',
      // },
      classOptions: [
        {
          value: '1',
          text: '用户',
        },
        {
          value: '2',
          text: '商品',
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

export default Demo;
