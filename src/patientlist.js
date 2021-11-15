import React, { Component } from 'react'

export default class patientlist extends Component {
    render() {
        return (
            <tr key={this.props.key}>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.last_name}</td>
                <td>{this.props.data.age}</td>
                <td>{this.props.data.cancer_origin}</td>
            </tr>
        )
    }
}
