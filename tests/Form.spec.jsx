import expect from 'expect.js';
import React from 'react';
import { mount } from 'enzyme';
import FormField from 'uxcore-form-field';
import FormRow from 'uxcore-form-row';

import Form from '../src/Form';
import FormRowTitle from '../src/FormRowTitle';

/* eslint-disable react/no-string-refs */
describe('Form', () => {
  let wrapper;
  it('className', () => {
    wrapper = mount(<Form className="test" />);
    expect(wrapper.find('.kuma-uxform').prop('className')).to.contain('test');
  });
  it('jsxprefixCls', () => {
    wrapper = mount(<Form jsxprefixCls="kuma-test" />);
    expect(wrapper.find('.kuma-test')).to.have.length(1);
  });
  it('jsxmode', () => {
    wrapper = mount(
      <Form jsxmode="view">
        <FormField jsxname="test" jsxlabel="test" />
      </Form>
    );
    expect(wrapper.find('FormField').prop('mode')).to.be('view');
  });
  it('jsxvalues', () => {
    wrapper = mount(
      <Form jsxvalues={{ test: '1' }}>
        <FormField jsxname="test" jsxlabel="test" />
      </Form>
    );
    expect(wrapper.find('FormField').prop('value')).to.be('1');
  });
  it('instantValidate', () => {
    wrapper = mount(
      <Form instantValidate={false}>
        <FormField jsxname="test" jsxlabel="test" />
      </Form>
    );
    expect(wrapper.find('FormField').prop('jsxinstant')).to.be(false);
  });
  it.skip('jsxonChange', (done) => {
    wrapper = mount(
      <Form
        jsxvalues={{ test: '1' }}
        jsxonChange={(values, name, pass) => {
          expect(JSON.stringify(values)).to.be(JSON.stringify({ test: '2' }));
          expect(name).to.be('test');
          expect(pass).to.be(true);
          done();
        }}
      >
        <FormField jsxname="test" jsxlabel="test" />
      </Form>
    );
    wrapper.node.handleDataChange(wrapper.find('FormField').node, { value: '2', pass: true });
  });

  it('use user FormRow key if specified', () => {
    wrapper = mount(
      <Form>
        <FormRow key="test" />
      </Form>
    );
    expect(wrapper.find('FormRow').key()).to.be('test');
  });
  describe('API', () => {
    it('getValues', () => {
      const values = { test: '1' };
      wrapper = mount(
        <Form jsxvalues={values}>
          <FormField jsxname="test" jsxlabel="test" />
        </Form>
      );
      expect(JSON.stringify(wrapper.node.getValues().values)).to.be(JSON.stringify(values));
    });

    it('resetValues', () => {
      const values = { test: '1' };
      wrapper = mount(
        <Form jsxvalues={values}>
          <FormField jsxname="test" jsxlabel="test" />
        </Form>
      );
      wrapper.node.handleDataChange(wrapper.find('FormField').node, { value: '2', pass: true });
      wrapper.node.resetValues();
      expect(JSON.stringify(wrapper.node.getValues().values)).to.be(JSON.stringify(values));
    });

    it('setValues', () => {
      const values = { test: '1' };
      wrapper = mount(
        <Form jsxvalues={values}>
          <FormField jsxname="test" jsxlabel="test" />
        </Form>
      );
      wrapper.node.setValues({
        test: '2',
      });
      expect(JSON.stringify(wrapper.node.getValues().values)).to.be(JSON.stringify({ test: '2' }));
    });

    it('isDirty', () => {
      const values = { test: '1' };
      wrapper = mount(
        <Form jsxvalues={values}>
          <FormField jsxname="test" jsxlabel="test" jsxrules={{ validator: value => value !== '1', errMsg: 'error' }} />
        </Form>
      );
      expect(wrapper.node.isDirty()).to.be(true);
    });

    it('doValidate', () => {
      const values = { test: '1' };
      wrapper = mount(
        <Form jsxvalues={values}>
          <FormField jsxname="test" jsxlabel="test" jsxrules={{ validator: value => value !== '1', errMsg: 'error' }} />
        </Form>
      );
      expect(wrapper.node.doValidate()).to.be(false);
    });
  });
  describe('FormRowTitle', () => {
    it('jsxtitle', () => {
      wrapper = mount(<FormRowTitle jsxtitle="test" />);
      expect(wrapper.text()).to.be('test');
    });
  });
  describe('Async', () => {
    it.skip('jsxonChange', (done) => {
      wrapper = mount(
        <Form
          asyncValidate
          jsxvalues={{ test: '1' }}
          jsxonChange={(values, name, pass) => {
            expect(JSON.stringify(values)).to.be(JSON.stringify({ test: '2' }));
            expect(name).to.be('test');
            expect(pass).to.be(false);
            done();
          }}
        >
          <FormField jsxname="test" jsxlabel="test" jsxrules={(value, resolve, reject) => { reject('error'); }} />
        </Form>
      );
      wrapper.node.handleDataChange(wrapper.find('FormField').node, { value: '2', pass: true });
    });
    it('doValidate', (done) => {
      wrapper = mount(
        <Form
          asyncValidate
          jsxvalues={{ test: '1' }}
        >
          <FormField jsxname="test" jsxlabel="test" jsxrules={(value, resolve, reject) => { reject('error'); }} />
        </Form>
      );
      wrapper.node.doValidate().then((pass) => {
        expect(pass).to.be(false);
        done();
      });
    });
  });
});
