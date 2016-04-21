
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "表单",
    category: "表单",
    icon: "", // todo: require("./logo.svg"),
    componentName: "Form",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: false,
    isContainer: false,
    canDropto: true,
    conDroping: false,
    configure: [{
            name: "jsxprefixCls",
            title: "@title: 类名前缀/PrefixCls",
            defaultValue: "kuma-uxform",
            required: false,
            fieldStyle: "block",
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "jsxmode",
            title: "@title: 显示模式/mode",
            defaultValue: "edit",
            required: false,
            fieldStyle: "block",
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "jsxvalues",
            title: "@title: 默认值/values",
            defaultValue: {},
            required: false,
            fieldStyle: "accordion",
            setter: <JsonSetter />
        }, {
            name: "instantValidate",
            title: "@title: 是否即时校验/instantValidate",
            defaultValue: true,
            fieldStyle: "block",
            setter: <BoolSetter />
        }]
});
