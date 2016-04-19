let FormField = require('./FormField');
let Constants = require("uxcore-const");
let Tinymce = require("uxcore-tinymce");
let assign = require('object-assign');

class EditorFormField extends FormField {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        let me = this;
        if (!me._isEqual(nextProps.value, me.props.value)) {
            me.handleDataChange(nextProps.value, true);
        }
    }

    componentDidUpdate(prevProps) {
        let me = this;
        let prevMode = prevProps.jsxmode || prevProps.mode;
        let mode = me.props.jsxmode || me.props.mode;
        if (prevMode == Constants.MODE.VIEW && mode == Constants.MODE.EDIT) {
            me.refs.tinymce.resetValue((me.state.value == undefined || me.state.value == null) ? "" : me.state.value);
        }
    }

    _isEqual(a, b) {
        return JSON.stringify(a) == JSON.stringify(b);
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
        let mode = me.props.jsxmode || me.props.mode;
        if (me.state.fromReset && mode == Constants.MODE.EDIT) {
            me.refs.tinymce.resetValue(me.props.jsxcontent);
        }
        if (mode == Constants.MODE.EDIT) {
            return <Tinymce ref="tinymce"
                            placeholder={me.props.placeholder}
                            config={me.props.jsxconfig}
                            content={me.state.value || ""}
                            onChange={me.handleChange.bind(me)}
                            onKeyup={me.handleKeyup.bind(me)}/>
        }
        else {
            return <span key="text" dangerouslySetInnerHTML={{__html: me.state.value}}></span>
        }
    }

}

EditorFormField.propTypes = assign({}, FormField.propTypes);
EditorFormField.defaultProps = assign({}, FormField.defaultProps, {
    jsxconfig: {},
    jsxcontent: ""
});
EditorFormField.displayName = "EditorFormField";

module.exports = EditorFormField;
