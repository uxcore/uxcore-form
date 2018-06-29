import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormField from 'uxcore-form-field';
import FormRow from 'uxcore-form-row';
import Form from '../src/Form';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/no-string-refs */
describe('FormRow', () => {
  let wrapper;
  it('className', () => {
    wrapper = mount(
      <Form>
        <FormRow className="test" />
      </Form>
    );
    expect(wrapper.find('.kuma-uxform-row').prop('className')).to.contain('test');
  });
  it('jsxprefixCls', () => {
    wrapper = mount(
      <Form>
        <FormRow className="kuma-row-test" />
      </Form>
    );
    expect(wrapper.find('div.kuma-row-test')).to.have.length(1);
  });
  it('should be able to wrap FormField', () => {
    wrapper = mount(
      <Form>
        <FormRow>
          <FormField jsxname="test" />
        </FormRow>
      </Form>
    );
    expect(wrapper.find('FormField')).to.have.length(1);
  });
});
