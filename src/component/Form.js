import React, { Component } from 'react'

export class LocationForm extends Component {
    render() {
        return (
            <div>
<form onSubmit={this.props.handleSubmit}>
    <label style={{fontSize:'50px', margin:'20px' , color:'darksalmon'}}  > Enter Country</label>
    <input style={{width:'200px' , height:'25px'}}  type="text" onChange={this.props.handleLocation}/>
    <input type="submit" value="Exeplor" style={{fontSize:'20px', margin:'10px' , color:'darksalmon'}}/>
</form>
            </div>
        )
    }
}

export default LocationForm
