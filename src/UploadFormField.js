let FormField = require('./FormField');
let Constants = require("./Constants");
let assign = require('object-assign');
let Upload = require("uxcore-uploader")['default'];
let update = React.addons.update;

class UploadFormField extends FormField {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    addSpecificClass() {
        let me = this;
        if (me.props.prefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-upload-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        let options = {
            // 上传文件字段名称
            name: me.props.fileName,
            // 上传目标
            url: me.props.url,
            // 上传文件额外参数
            params: me.props.params,
            // 上传文件额外头, `flash下不支持`
            headers: me.props.headers,
            // 上传文件是否自动附带cookie等信息, `flash下不支持`
            withCredentials: me.props.withCredentials,
            // 上传超时
            timeout: me.props.withCredentials,
            // 是否允许分片上传, `flash下不支持`
            chunkEnable: me.props.chunkEnable,
            // 文件分片大小, 默认单位b，0不分片
            chunkSize: me.props.chunkSize,
            // 文件分片上传重试次数
            chunkRetries: me.props.chunkRetries,
            // 分片上传并发数
            chunkProcessThreads: me.props.chunkProcessThreads,
            // 文件上传并发数
            processThreads: me.props.processThreads,
            // 是否选择后自动等待上传
            autoPending: me.props.autoPending,
            // 队列容量，0无限
            queueCapcity: me.props.queueCapcity,
            // 是否多选
            multiple: me.props.multiple,
            // 允许文件类型
            accept: me.props.accept,
            // 文件大小限制
            fileSizeLimit: me.props.fileSizeLimit,
            // 是否防止文件重复
            preventDuplicate: me.props.preventDuplicate,
            // 过滤器
            filters:me.props.filters
        }
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