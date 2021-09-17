import React, { Component } from "react";
import {Row,Card,Col} from "react-bootstrap"

export class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render()
  
  {
    console.log(this.props.movieList);
    return <div>
      <Row xs={1} md={3} className="g-4">

  {this.props.movieList.map((e) => (
      <Col>

<Card style={{ width: '18rem' }}  className='mx-5'>
                    <Card.Img variant="top" src={e.poster_path} />
                    <Card.Body>
                        <Card.Title>{e.title} </Card.Title>
                        <Card.Text>   {e.overview}    </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Card.Text>{e.popularity}    </Card.Text>
                        <Card.Text> {e.released_on}    </Card.Text>
                        <Card.Text> {e.vote_count}     </Card.Text>
                        <Card.Text> {e.vote_average}    </Card.Text>

                    </Card.Body>
                </Card>
                </Col>
  ))}
</Row >

    </div>;
  }
    
}

export default Movie;

