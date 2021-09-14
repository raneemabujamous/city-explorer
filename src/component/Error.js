import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
export class Error extends Component {
    render() {
        return (
            <div>
<h3>error</h3>


               <Alert variant={'danger'}>
    you must write right country
  </Alert>
 
            </div>
        )
    }
}

export default Error
