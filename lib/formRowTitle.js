/**
 * @author: zhouquan.yezq
 * @time: 8/7 2015
 * Form Row Title
 */
import React from 'react';
import Constants from "./constants";
import ValidatorType from "./customValidatorType";
import classNames from 'classnames';

class FormRowTitle extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount () {}

    render() {
        let child= this.props.children
        if(child.slice) {
            child=[];
        }
        return (<div className={this.props.jsxprefixCls}>{this.props.title}
            {   
                child.map(function(item) {
                    return item;
                })
            }
        </div>);
    }

};

FormRowTitle.propTypes= {};

FormRowTitle.defaultProps = {
    jsxprefixCls: "kuma-form-row-title"
};

export default FormRowTitle;