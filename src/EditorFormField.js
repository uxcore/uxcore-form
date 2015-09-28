let FormField = require('./FormField');
let Constants = require("./Constants");
let Tinymce = require("uxcore-tinymce");
let assign = require('object-assign');

class EditorFormField extends FormField {
    constructor(props) {
        super(props)
    }

    handleChange(e, editor) {
        let me = this;
        // me.handleDataChange(editor.getContent())
        console.log(editor.getContent())
    }

    handleKeyup(e, editor) {
        let me = this;
        console.log(editor.getContent())
        // me.handleDataChange(editor.getContent())
    }

    renderField() {
        let me = this;
        return <Tinymce config={me.props.jsxconfig}
                        content={me.state.value}
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