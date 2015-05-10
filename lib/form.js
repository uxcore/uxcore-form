import React from 'react';
import Constants from "./constants"

/**
 * React.Component vs React.createClass
 * 1: getInitialState method, React.Component没有，直接在constructor方法里面初始化
 * 2: getDefaultProps 方法没有，propTypes and defaultProps可以直接定义在constructor上，instead of in the class body.
 */
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.fields = {};
        this.errors={};
        this.state= {
            data: this.props.data,
            dirty:false,
            mode: this.props.mode
        };
        ['attachFormField', 'detachFormField', 'handleInputChange'].forEach((m)=> {
            this[m] = this[m].bind(this);
        });
    }
    render() {
        var children = this.props.children;
        var self=this;
        return (
            <ul className={this.props.bsStyle} >
                {children.map(function(child) {
                    //if (child.type === Validator) {
                    return React.cloneElement(child, {
                        mode:self.state.mode,
                        parent:self,
                        value: self.state.data[child.props.keyMap],
                        attachFormField: self.attachFormField,
                        detachFormField: self.detachFormField,
                        handleInputChange: self.handleInputChange
                    });

                   /* } else if (child.props && child.props.children) {
                        return React.cloneElement(child, {}, self.attachValidators(child.props.children));
                    }*/

                    return child;
                })}
            </ul>
        );
    }
    componentDidMount () {
    }
    attachFormField(field) {
        var name = field.getName();
        name?(this.fields[name] = field):"";
    }
    detachFormField(field) {
        delete this.fields[field.getName()];
    }
    handleInputChange(field, value, fn){
        this.props.data[field.props.keyMap]=value;
    }
    /**
     * check all the field, and store the error state, use error state
     */
    doSave() {
        let flag=true;
        Object.keys(this.fields).map(function(key){
            let _flag=this.fields[key].doValidate();
            this.errors[key]=_flag;
            flag=flag && !_flag;
        }.bind(this));
        var _mode=flag?Constants.MODE.view:Constants.MODE.edit;
        this.setState({mode:_mode});
    }
}

Form.defaultProps = {
    bsStyle: "kuma-form",
    mode:Constants.MODE.edit,
    data:{}
};