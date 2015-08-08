/**
*  table test case
*/
import React from 'react';

class TableTest extends React.Component {
    constructor(props) {
        super(props);
    }
    //use data, we could do lots of thing for valdiate
    doValiate(data){
        return false;
    }
    getValue() {
        return this.refs.el.getDOMNode().value
    }

    handleChange(e) {
        var value = e.target ? e.target.value : e;
        this.props.context.handleDataChange(this, value);
    }

    render(){

        if (this.props.jsxmode=='EDIT') {
            return <table>
            <tr>
                <td><input type="text" ref="el" value={this.props.jsxvalue} onChange={this.handleChange.bind(this)}/></td>
                <td>002</td>
                <td>003</td>
            </tr>
            <tr>
                <td>0011</td>
                <td>0021</td>
                <td>0031</td>
            </tr>
            <tr>
                <td>0012</td>
                <td>0022</td>
                <td>0032</td>
            </tr>
            </table>
        }else {
            return <table>
            <tr>
                <td>{this.props.jsxvalue}</td>
                <td>002</td>
                <td>003</td>
            </tr>
            <tr>
                <td>0011</td>
                <td>0021</td>
                <td>0031</td>
            </tr>
            <tr>
                <td>0012</td>
                <td>0022</td>
                <td>0032</td>
            </tr>
        </table>
        }
        
    }
}
export default TableTest;