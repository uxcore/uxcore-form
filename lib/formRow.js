var React = require('react');
var classNames= require("classNames");

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		var className = classNames('kuma-form-row', this.props.className);
        var props= this.props;
		var children = props.children.map?props.children:[props.children];
        var me=this;
        return (
            <div className={className} >
                {children.map(function(child) {
                    var _value= props.data[child.props.jsxname],_metaValue=child.props.jsxvalue;
                    if(!_value) {
                        if(_metaValue) {
                            props.data[child.props.jsxname]=_metaValue;
                            _value=_metaValue;
                        }
                    }                   
                    return React.cloneElement(child, {
                        jsxmode:props.jsxmode,
                        jsxvalue: _value,
                        data: props.data,
                        attachFormField: props.attachFormField,
                        detachFormField: props.detachFormField,
                        handleDataChange: props.handleDataChange
                    });

                    return child;
                })}
            </div>
        );

	}
});
