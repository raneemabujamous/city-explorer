import React, { Component } from 'react'
import Form from './component/Form'
import Location from './component/Location'
import Error from './component/Error'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      imgSrc: "",
      showData: false,
      country: [],
      weatherData: [],
      error:true
    }
  }

  handleLocation = (e) => {
    let display_name = e.target.value;
    this.setState({
      display_name: display_name,


    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let config = {
      method: "GET",
      baseURL: `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}&format=json`,

    }
    axios(config).then(res => {
      let responseData = res.data[0]
      this.setState({

        showData: true,
        display_name: responseData.display_name,
        lon: responseData.lon,
        lat: responseData.lat,
        imgSrc: responseData.imgSrc,
        country: this.data,

      })

    }).then(() => {
      axios.get(`http://localhost:8000/weather?lon=${this.state.lon}&lat=${this.state.lat}`)
        .then(res => {

          console.log()
          this.setState({
            weatherData: res.data
          })
        }
        )
    }).catch(e=>{
      this.setState={
        error:false
     
      }
     
     
    })
  }

  
  render() {

    


    return (
      <div>
        <h1 style={{ fontSize: '60px', textAlign: 'center', margin: '15px', color: 'gray' }} >Welcome to City explorer</h1>
        <Form handleSubmit={this.handleSubmit} handleLocation={this.handleLocation} />
        {
          this.state.weatherData.map(item => {
            return <>

              <h3>date : {item.date}</h3>
              <h3> description :{item.description}</h3>


            </>
          })

        }
        {
         ( this.state.showData && this.state.error) &&
          <Location display_name={this.state.display_name}
            lat={this.state.lat}
            lon={this.state.lon}
            country={this.state.country}

          />
          
        }
        {
          
          !this.state.error&& <Error/>
        }
      </div>
    )
  }
}

export default App
