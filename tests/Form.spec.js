import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, { Simulate } from 'react-addons-test-utils';
import Form from '../src';
import FormField from 'uxcore-form-field';

describe('Form', () => {
  let div;
  let instance;
  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });
  it('mode should be passed to field', (done) => {
    const Demo = React.createClass({
      render() {
        return (
          <Form jsxmode="view">
            <FormField ref="formfield" jsxname="test" jsxlabel="test" />
          </Form>
        )
      }
    });

    instance = ReactDOM.render(<Demo />, div);
    expect(instance.refs.formfield.props.mode).to.be('view');
    done();
  })
});