
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "表单容器",
    category: "表单",
    icon: require('./logo.svg'), // todo: require("./logo.svg"),
    componentName: "Form",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: false,
    isContainer: true,
    canDropto: true,
    canDroping: true,
    configure: [{
            name: "jsxmode",
            title: "显示模式",
            defaultValue: "edit",
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }, {
            name: "jsxvalues",
            title: "默认值",
            defaultValue: {},
            required: false,
            fieldStyle: "accordion",
            fieldCollapsed: false,
            setter: <JsonSetter />
        }, {
            name: "instantValidate",
            title: "是否即时校验",
            defaultValue: true,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <BoolSetter />
        }]
});
