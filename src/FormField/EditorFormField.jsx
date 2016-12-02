const React = require('react');
const FormField = require('uxcore-form-field');
const Constants = require('uxcore-const');
const Tinymce = require('uxcore-tinymce');
const assign = require('object-assign');
const deepEqual = require('lodash/isEqual');

class EditorFormField extends FormField {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const me = this;
    if (!deepEqual(nextProps.value, me.props.value)) {
      me.handleDataChange(nextProps.value, false, true);
    }
  }

  componentDidUpdate(prevProps) {
    const me = this;
    const prevMode = prevProps.jsxmode || prevProps.mode;
    const mode = me.props.jsxmode || me.props.mode;
    if (prevMode === Constants.MODE.VIEW && mode === Constants.MODE.EDIT) {
      me.tinymce.resetValue((me.state.value === undefined || me.state.value === null) ? '' : me.state.value);
    }
  }

  saveRef(refName) {
    const me = this;
    return (c) => {
      me[refName] = c;
    };
  }
  handleChange(e, editor) {
    const me = this;
    me.handleDataChange(editor.getContent());
  }

  handleKeyup(e, editor) {
    const me = this;
    me.handleDataChange(editor.getContent());
  }

  addSpecificClass() {
    const me = this;
    if (me.props.jsxprefixCls === 'kuma-uxform-field') {
      return `${me.props.jsxprefixCls} kuma-editor-uxform-field`;
    }
    return me.props.jsxprefixCls;
  }

  setContent(content) {
    this.tinymce.resetValue(content);
  }

  renderField() {
    const me = this;
    const mode = me.props.jsxmode || me.props.mode;
    if (me.state.fromReset && mode === Constants.MODE.EDIT && me.tinymce) {
      me.tinymce.resetValue(me.state.value || me.props.jsxcontent);
    }
    if (mode === Constants.MODE.EDIT) {
      return (
        <Tinymce
          ref={me.saveRef('tinymce')}
          placeholder={me.props.placeholder}
          config={me.props.jsxconfig}
          content={me.state.value || ''}
          onChange={me.handleChange}
          onKeyup={me.handleKeyup}
        />
      );
    }
    return <span key="text" dangerouslySetInnerHTML={{ __html: me.state.value }} />;
  }

}

EditorFormField.propTypes = assign({}, FormField.propTypes);
EditorFormField.defaultProps = assign({}, FormField.defaultProps, {
  jsxconfig: {},
  jsxcontent: '',
});
EditorFormField.displayName = 'EditorFormField';

module.exports = EditorFormField;
