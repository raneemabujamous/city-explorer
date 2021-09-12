import React, { Component } from 'react'
import Form from './component/Form'
import Location from './component/Location'
import axios from 'axios';

export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      display_name :"",
      lat:"",
      lon:"",
      showData:false,
      
        }}

    handleLocation=(e)=>{
      let display_name=e.target.value;
      this.setState({
        display_name:display_name,
      
    
      })
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(this.props.lon)

      let config={
        method:"GET",
        baseURL:`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}&format=json`,

      } 
      axios(config).then(res=>{
        let responseData=res.data[0]
        console.log(responseData)
        this.setState({
          
          showData:true,
          display_name:responseData.display_name,
          lon:responseData.lon,
          lat:responseData.lat,
          imgSrc:responseData.imgSrc
          
  
        })
        
      })
    }
  render() {
    


    return (
      <div>
         <h1 style={{fontSize:'50px' , textAlign :'center' , color :'turquoise'}}>Welcome to City explorer</h1>
        <Form  handleSubmit={this.handleSubmit} handleLocation={this.handleLocation} />
        {
          this.state.showData&&
          <Location display_name={this.state.display_name}
                    lat={this.state.lat}
                    lon={this.state.lon}
          />
        }
      </div>
    )
  }
}

export default App
