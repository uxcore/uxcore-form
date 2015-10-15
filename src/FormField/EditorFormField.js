let FormField = require('./FormField');
let Constants = require("../Constants");
let Tinymce = require("uxcore-tinymce");
let assign = require('object-assign');

class EditorFormField extends FormField {
    constructor(props) {
        super(props)
    }

    handleChange(e, editor) {
        let me = this;
        me.handleDataChange(editor.getContent())
    }

    handleKeyup(e, editor) {
        let me = this;
        me.handleDataChange(editor.getContent())
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-editor-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        if (me.state.fromReset) {
            me.refs.tinymce.resetValue(me.props.jsxcontent);
        }
        return <Tinymce ref="tinymce"
                        config={me.props.jsxconfig}
                        content={me.props.jsxcontent}
                        onChange={me.handleChange.bind(me)}
                        onKeyup={me.handleKeyup.bind(me)}/>
    }

}

EditorFormField.propTypes = assign({}, FormField.propTypes);
EditorFormField.defaultProps = assign({}, FormField.defaultProps, {
    jsxconfig: {},
    jsxcontent: ""
});
EditorFormField.displayName = "EditorFormField";

module.exports = EditorFormField;