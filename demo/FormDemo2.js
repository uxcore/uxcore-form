/**
 * Form Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let assign = require('object-assign');

let Form = require('../src');

let {
    Constants,
    FormRowTitle,
    FormRow,
    SearchFormField   
} = Form;


class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        let me = this;

        let searchOptions = {
            jsxname: "search", 
            dataType: "jsonp",
            searchPlaceholder: "请勿泄露员工信息", 
            jsxfetchUrl: "http://suggest.taobao.com/sug",
            advancedOptions: [
               {
                   value: '1',
                   text: '选项一'
               },
               {
                   value: '2',
                   text: '选项二'
               }
            ], 
            advancedConfig: {
               placeholder: '高级选项'
            },
            classOptions: [
               {
                   value: '1',
                   text: '类别一'
               },
               {
                   value: '2',
                   text: '类别二'
               }
            ],
            classConfig: {
               placeholder: '类别'
            },
            afterFetch: (obj) => {
               let data = {};
               obj.result.forEach((item, index) => {
                   data[item[1]] = item[0];
               });
               return data;
            },
            onIconClick: (e) => {
              console.log(me.refs.form.getValues());
            }
        };

        let tidyVer = assign({}, searchOptions, {
          jsxname: 'tidy',
          tidy: true
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
};

module.exports = Demo;
