var React = require('react');
var classNames= require("classNames");

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	componentDidMount: function() {
        //this.props.attachFormField(this);
    },

    componentDidUpdate: function() {
        //this.props.attachFormField(this);
    },
    attachFormField: function (field) {
        var name = field.getName();
        name?(this.fields[name] = field):"";
    },
    detachFormField: function(field) {
        delete this.fields[field.getName()];
    },
	render() {
		// classes
		var className = classNames('kuma-form-row', this.props.className);
		var children = this.props.children.map?this.props.children:[this.props.children];
		var form= this.props.form;
        var self=this;
        return (
            <div className={className} >
                {children.map(function(child) {
                    var _value= form.state.data[child.props.jsxname],_metaValue=child.props.jsxvalue;
                    if(!_value) {
                        if(_metaValue) {
                            form.state.data[child.props.jsxname]=_metaValue;
                            _value=_metaValue;
                        }
                    }                   
                    return React.cloneElement(child, {
                        jsxmode:form.state.jsxmode,
                        form:form,
                        jsxvalue: _value,
                        attachFormField: form.attachFormField,
                        detachFormField: form.detachFormField,
                        handleDataChange: form.handleDataChange
                    });

                    return child;
                })}
            </div>
        );

	}
});
