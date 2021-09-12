import React, { Component } from 'react'

export class Location extends Component {
    render() {
        return (
            <div>
            <h1> city name :{this.props.city_name}</h1>
              
                <p>  latitude :{this.props.lat}</p>
                <p> longitude :{this.props.lon}</p>
              
  {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY} &center=${this.state.lat},${this.state.lon}&zoom=1-18`}/> */}
            </div>
        )
    }
}

export default Location
