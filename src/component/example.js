 //   try {
  //     let responselocation = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}&format=json`)
  //     let dataLocation = responselocation.date[0]
  //     let responseWather = await axios.get('http://${process.env.REACT_APP_BACKEND_URL}/weather?lon=${this.state.lon}&lat=${this.state.lat}')
  //     let DataWeather = responseWather.date
  //     const cityName = this.state.display_name.split(',')[0];

  //     let repinseMovie = await axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/movie?api_key=${process.env.MOVIE_API_KEY}&query=${cityName}`)
  //     let movieData = repinseMovie.date

  //     console.log("movieData",movieData)
  //     console.log("DataWeather",DataWeather)
  //     console.log("cityName",cityName)
  //     console.log("dataLocation",dataLocation)

  //     this.setState({


  //       showData: true,
  //       display_name: dataLocation.display_name,
  //       lon: dataLocation.lon,
  //       lat: dataLocation.lat,
  //       imgSrc: dataLocation.imgSrc,
  //       country: this.data,
  //       weatherData: DataWeather,
  //       movieList: movieData,
  //       showMoviData: true,
  //       showWeather: true,
  //       error: false


  //     })
  //   } catch (error) {
  //     this.setState({
  //       showData: false,
  //       showWeather: false,
  //       showMoviData: false,
  //       error: true

  //     });
  //     console.log("movieData",this.setate.movieData)
  //     console.log("DataWeather",this.setate.DataWeather)
  //     console.log("cityName",this.setate.cityName)
  //     console.log("dataLocation",this.setate.dataLocation)
  //   }
  // }

  