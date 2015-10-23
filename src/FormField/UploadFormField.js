let FormField = require('./FormField');
let Constants = require("uxcore-const");
let assign = require('object-assign');
let Upload = require("uxcore-uploader");

class UploadFormField extends FormField {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-uxform-field") {
            return me.props.jsxprefixCls + " kuma-upload-uxform-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;

        let {
            jsxflex,
            jsxinstant,
            jsxlabel,
            jsxname,
            jsxplaceholder,
            jsxprefixCls,
            jsxshow,
            jsxshowLabel,
            jsxtips,
            jsxtype,
            mode,
            style,
            onfileuploadcompleted,
            ...options
        } = me.props;

        assign(options, {
            onfileuploadcompleted: (file, status) => {
                console.log(file);
            }
        });

        return <Upload {...options}/>
    }
}

UploadFormField.propTypes = assign({}, FormField.propTypes, {
});
UploadFormField.defaultProps = assign({}, FormField.defaultProps, {
    // 上传文件字段名称
    fileName: 'file',
    // 上传目标
    url: '',
    // 上传文件额外参数
    params: {},
    // 上传文件额外头, `flash下不支持`
    headers: [],
    // 上传文件是否自动附带cookie等信息, `flash下不支持`
    withCredentials: true,
    // 上传超时
    timeout: 0,
    // 是否允许分片上传, `flash下不支持`
    chunkEnable: false,
    // 文件分片大小, 默认单位b，0不分片
    chunkSize: 0,
    // 文件分片上传重试次数
    chunkRetries: 0,
    // 分片上传并发数
    chunkProcessThreads: 2,
    // 文件上传并发数
    processThreads: 2,
    // 是否选择后自动等待上传
    autoPending: true,
    // 队列容量，0无限
    queueCapcity: 0,
    // 是否多选
    multiple: true,
    // 允许文件类型
    accept: null,
    // 文件大小限制
    fileSizeLimit: 0,
    // 是否防止文件重复
    preventDuplicate: true,
    // 过滤器
    filters: []
});
UploadFormField.displayName = "UploadFormField";

module.exports = UploadFormField
