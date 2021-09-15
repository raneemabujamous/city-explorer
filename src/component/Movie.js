import React, { Component } from "react";
import {Row,Card,Col} from "react-bootstrap"

export class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.movieList);
    return <div>
  {this.props.movieList.map((e) => (
    

<Card style={{ width: '18rem' }}>
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

  ))}

    </div>;
  }
}

export default Movie;

