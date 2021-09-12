import React, { Component } from 'react'

export class LocationForm extends Component {
    render() {
        return (
            <div>
<form onSubmit={this.props.handleSubmit}>
    <label> Enter Country</label>
    <input type="text" onChange={this.props.handleLocation}/>
    <input type="submit" value="Exeplor"/>
</form>
            </div>
        )
    }
}

export default LocationForm
