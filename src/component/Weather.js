import React, { Component } from 'react'
import {Table} from "react-bootstrap"

export class Weather extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            <div >

<Table striped bordered hover className='m-5'   variant="dark" style={{width:'40%' , textAlign: 'left' }} >
  <thead>
    <tr>
      <th>date</th>
      <th>description</th>
    </tr>
  </thead>

                {this.props.weatherData.map((e)=>(
  <tbody>
  <tr>
    <td>{e.date}</td>
    <td>{e.description}</td>
  </tr>
  
</tbody>

                ))}
  
</Table>

            </div>
        )
    }
}

export default Weather




// import React, { Component } from 'react'
// import {Table} from "react-bootstrap"

// export class Weather extends Component {
//     constructor(props) {
//         super(props);
//       }
    
//     render() {
//         {console.log(this.props.weatherData ,"from weather")}
//         return (
//             <div>
//     <Table striped bordered hover variant="dark">

  

//    { this.props.weatherData.map(item => {
//      {console.log(this.props.weatherData ,"inside")}

//  <tbody>
//    <tr>
//      <td>description</td>
//      <td>{item.date} {console.log(item.date)}</td>

//    </tr>
//    <tr>
//      <td>date</td>
//      <td>{item.description}</td>
   
//    </tr>
   
//  </tbody>
//         })}
//     </Table> 

//             </div>
//         )
//     }
// }

// export default Weather
