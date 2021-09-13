import React, { Component } from 'react'

export class Location extends Component {
    render() {
        return (
            <div>
            <h4 style={{fontSize:'30px', margin:'15px' , color:'gray'}}> city name :{this.props.display_name}</h4>
              
                <p style={{fontSize:'30px', margin:'15px' , color:'gray'}}>  latitude :{this.props.lat}</p>
                <p style={{fontSize:'30px', margin:'15px' , color:'gray'}}> longitude :{this.props.lon}</p>
             <img  style={{ margin:'45px' }} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY} &center=${this.props.lat},${this.props.lon}&zoom=1-18`}/> 
            </div>
        )
    }
}

export default Location
