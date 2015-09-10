let classnames = require('classnames');
let {Button} = require('uxcore-button');

class FormButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let me = this;
        let props = {
            size: me.props.size,
            color: me.props.color,
            disabled: me.props.disabled,

        }
        return <Button type
    }
}

FormButton.propTypes = {
    type: React.propTypes.string
}

FormButton.defaultProps = {
    type: "submit"
}

FormButton.displayName = "FormButton";

module.exports = FormButton;