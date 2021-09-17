import React, { Component } from 'react'
import Form from './component/Form'
import Location from './component/Location'
import Error from './component/Error'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'bootstrap'
import Movie from './component/Movie';
import Weather from './component/Weather';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      imgSrc: "",
      showData: false,
weatherData: [],
      error: false,
      showWeather: false,
      movieList: [],
      showMoviData: false
    }
  }

  handleLocation = (e) => {
    let display_name = e.target.value;

    this.setState({
      display_name: display_name,


    })
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let responselocation = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}&format=json`)
      let dataLocation = responselocation.data[0]
      let responseWather = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lon=${this.state.lon}&lat=${this.state.lat}`)
      let DataWeather = responseWather.data
      const cityName = this.state.display_name.split(',')[0];

      let repinseMovie = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movie?api_key=${process.env.MOVIE_API_KEY}&query=${cityName}`)
      let movieData = repinseMovie.data

      

      this.setState({


        showData: true,
        display_name: dataLocation.display_name,
        lon: dataLocation.lon,
        lat: dataLocation.lat,
        imgSrc: dataLocation.imgSrc,
        country: this.data,
        weatherData: DataWeather,
        movieList: movieData,
        showMoviData: true,
        showWeather: true,
        error: false


      })
    } catch (error) {
      console.log("movieData",this.state.movieData)
      console.log("DataWeather",this.state.DataWeather)
      console.log("cityName",this.state.cityName)
      console.log("dataLocation",this.state.dataLocation)
      this.setState({
        showData: false,
        showWeather: false,
        showMoviData: false,
        error: true

      });
    
    }

}



    render() {




      return (
        <div>
          <h1 style={{ fontSize: '60px', textAlign: 'center', margin: '15px', color: 'gray' }} >Welcome to City explorer</h1>
          <Form handleSubmit={this.handleSubmit} handleLocation={this.handleLocation} />
     

{
            
            (this.state.showData && !this.state.error) &&
            <Location display_name={this.state.display_name}
              lat={this.state.lat}
              lon={this.state.lon}
              country={this.state.country}

            />

          }
          { this.state.showWeather &&
          <Weather display_name={this.state.display_name} weatherData={this.state.weatherData} />
          }
         
          {
            this.state.showMoviData &&
            <Movie movieList={this.state.movieList} />

          }
          {

            this.state.error && <Error />
          }
        </div>
      )
    }
  }

export default App

