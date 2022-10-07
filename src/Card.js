import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
function Cards(props){
    return(
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={props.schoolImg} />
        <Card.Body>
          <Card.Title>{props.schoolName}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.aboutSchool}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
        
        
    )
}
export default Cards