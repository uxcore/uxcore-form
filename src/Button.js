import Constants from "./Constants";

const Button = React.createClass({
    propTypes: {
        mode: React.PropTypes.oneOf([Constants.MODE.view, Constants.MODE.edit]),
        isRequire: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            bsStyle: "kuma-button"
        };
    },
    getForm() {
        return this.props.form;
    },
    doClick: function() {
        this.props.onClick.apply(null,[]);
    },
    
    componentWillUnmount: function() {
        this.props.parent=null;
    },
    render() {
        if (this.props.jsxmode==Constants.MODE.edit) {
            return <div className="kuma-button kuma-button-lblue" onClick={this.doClick.bind(this,{context:this})}>{this.props.jsxtext}</div>;
        }else {
            return <span></span>;
        }
    }

});

export default Button;