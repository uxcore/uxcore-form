let FormField = require('./FormField');
let Constants = require("./Constants");
let Tinymce = require("uxcore-tinymce");
let assign = require('object-assign');

class EditorFormField extends FormField {
    constructor(props) {
        super(props)
    }

    handleChange(e, editor) {
        console.log(editor.getContent());
    }

    handleKeyup(e, editor) {
        console.log(editor.getContent());
    }

    renderField() {
        let me = this;
        let config = {
            plugins: "textcolor hr link image preview table",
            toolbar: "undo redo | fontselect fontsizeselect | styleselect | bold italic | link image | forecolor backcolor | hr | preview ",
            font_formats: '宋体=simsun;黑体=simhei;楷体=kaiti;隶书=隶书;幼圆=幼圆;微软雅黑=微软雅黑;Arial=arial;Arial Black=arial black;Book Antiqua=book antiqua;Calibri=calibri;Comic Sans MS=comic sans MS;Courier New=courier new;Garamond=garamond;Georgia=georgia;Helvetica=helvetica;Impact=impact;Narrow=narrow;Sans Serif=sans-serif;Serif=serif;Symbol=@symbol;Tahoma=tahoma;Times New Roman=times new roman;Trebuchet MS=trebuchet MS;Verdana=verdana;Webdings=@webdings;Wide=wide;Wingdings=@wingdings'
        };
        config = assign({}, config, me.props.jsxconfig)
        return <Tinymce config={config} 
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