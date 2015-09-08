let FormField = require('./FormField');
let Constants = require("./Constants");
let assign = require('object-assign');
let Upload = require('uxcore-rc-upload');
let update = React.addons.update;

let isIE = /MSIE/i.test(navigator.userAgent);

class UploadFormField extends FormField {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    addSpecificClass() {
        let me = this;
        if (me.props.jsxprefixCls == "kuma-form-field") {
            return me.props.jsxprefixCls + " kuma-upload-form-field" ;
        }
        else {
            return me.props.jsxprefixCls
        }
    }

    renderField() {
        let me = this;
        let options = {
            action: me.props.jsxaction,
            data: me.props.jsxparams,
            onStart: (file) => {
                me.setState({
                    files: update(me.state.files, {$push: [{
                        name: file.name,
                        percent: "0%",
                        finished: false
                    }]})
                });
                me.props.jsxonStart();
            },
            onSuccess: (res, file) => {
                let files = update(me.state.files, {});
                files.forEach((item, index) => {
                    if (item.name == file.name) {
                        files[index].finished = true;
                    }
                });
                console.log("progress");
                me.setState({
                    files: files
                });
                me.props.jsxonSuccess(res, file);
            },
            onProgress: (step, file) => {
                let files = update(me.state.files, {});
                files.forEach((item, index) => {
                    if (item.name == file.name) {
                        files[index].percent = parseInt(step.percent) + "%";
                    }
                });
                me.setState({
                    files: files
                })
                me.props.jsxonProgress(step, file);
            },
            onError: (err, res, file) => {
                console.log(err);
                console.log(res);
                me.props.jsxonError(err, res, file);
            }
        };
        !!me.props.jsxfileName && (options.name = me.props.jsxfileName);
        let arr = [];
        arr.push(<Upload key="upload" {...options}></Upload>);
        arr = arr.concat(me.state.files.map((file, index) => {
            let str = file.name;
            if (!isIE) {
                str += " " + file.percent;
            }
            str += (file.finished ? " 完成" : "");
            return <div className="kuma-upload-file" key={index}>{str}</div>
        }));
        return arr;

    }
}

UploadFormField.propTypes = assign({}, FormField.propTypes, {
    jsxaction: React.PropTypes.string,
    jsxparams: React.PropTypes.object,
    jsxfileName: React.PropTypes.string,
    jsxonStart: React.PropTypes.func,
    jsxonError: React.PropTypes.func,
    jsxonSuccess: React.PropTypes.func,
    jsxonProgress: React.PropTypes.func
});
UploadFormField.defaultProps = assign({}, FormField.defaultProps, {
    jsxonStart: () => {},
    jsxonError: () => {},
    jsxonSuccess: () => {},
    jsxonProgress: () => {}
});
UploadFormField.displayName = "UploadFormField";

module.exports = UploadFormField