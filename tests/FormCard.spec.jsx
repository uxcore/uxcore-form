import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormField from 'uxcore-form-field';
import FormRow from 'uxcore-form-row';
import Form, { FormCard } from '../src/Form';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/no-string-refs */
describe('FormCard', () => {
  let wrapper;
  it('className', () => {
    wrapper = mount(
      <Form>
        <FormCard className="test" />
      </Form>
    );
    expect(wrapper.find('.uxcore-card').prop('className')).to.contain('test');
  });
  it('should be able to wrap FormField', () => {
    wrapper = mount(
      <Form>
        <FormCard>
          <FormField jsxname="test0" />
          <FormRow>
            <FormField jsxname={'test1'} />
            <FormField jsxname={'test2'} />
          </FormRow>
        </FormCard>
      </Form>
    );
    expect(wrapper.find('FormField')).to.have.length(3);
  });
});
