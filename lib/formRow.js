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
                    //if (child.type === Validator) {
                    	//debugger
                    return React.cloneElement(child, {
                        mode:form.state.mode,
                        form:form,
                        value: form.state.data[child.props.keyMap],
                        attachFormField: form.attachFormField,
                        detachFormField: form.detachFormField,
                        handleInputChange: form.handleInputChange
                    });

                   /* } else if (child.props && child.props.children) {
                        return React.cloneElement(child, {}, self.attachValidators(child.props.children));
                    }*/

                    return child;
                })}
            </div>
        );

	}
});
