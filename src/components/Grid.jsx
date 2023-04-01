import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import "../css/Rating.css";
import 'font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const element = <FontAwesomeIcon icon={faEnvelope} />

export default function Grid() {
  const [rating, setRating] = useState(25)
  const handleRating = (rate) => {
    setRating(rate)
  }
  return (
    <div>
      <Container className="star-container">
        <Row>
          <Rating
            onClick={handleRating}
            allowFraction
            readonly={true}
            initialValue={2.5} />
        </Row>
      </Container>

      <Container className="details-container">
        <Row className="col-heading">
          <Col xs={2}>Co2</Col>
          <Col xs={10}>Details</Col>
        </Row>

        <Row className='details-row'>
          <Col xs={2} >72.9 kgco2 
          <img src="../logos/co2_1.png" alt="co2" />
          </Col>
          <Col xs={10}>
          <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} /> // Defaults to Classic family
          <div className='badge-container'>
          <Badge bg="info">Your Choice</Badge>
          </div>
          </Col>
        </Row>

        <Row className='details-row'>
          <Col xs={2} >72.9 kgco2 
          <img src="../logos/co2_1.png" alt="co2" />
          </Col>
          <Col xs={10}>
          <ListGroup>
            <ListGroup.Item>Apple iPhone 12 (128GB) - Black</ListGroup.Item>
            <ListGroup.Item>Manufacture: Apple</ListGroup.Item>
          </ListGroup>
          <div className='badge-container'>
          <Badge bg="success">Co2 Winner</Badge>
          </div>
          </Col>
        </Row>

        <Row className='details-row'>
          <Col xs={2} >72.9 kgco2 
          <img src="../logos/co2_1.png" alt="co2" />
          </Col>
          <Col xs={10}>
          <ListGroup>
            <ListGroup.Item>Apple iPhone 12 (128GB) - Black</ListGroup.Item>
            <ListGroup.Item>Manufacture: Apple</ListGroup.Item>
          </ListGroup>
          <div className='badge-container'>
          <Badge bg="primary">Statisfaction Winner</Badge>
          </div>
          </Col>
        </Row>

        <Row className='details-row'>
          <Col xs={2} >72.9 kgco2 
          <img src="../logos/co2_1.png" alt="co2" />
          </Col>
          <Col xs={10}>
          <ListGroup>
            <ListGroup.Item>Apple iPhone 12 (128GB) - Black</ListGroup.Item>
            <ListGroup.Item>Manufacture: Apple</ListGroup.Item>
          </ListGroup>
          <div className='badge-container'>
          <Badge bg="warning">Best Value</Badge>
          </div>
          </Col>
        </Row>

        <Row className='details-row'>
          <Col xs={2} >72.9 kgco2 
          <img src="../logos/co2_1.png" alt="co2" />
          </Col>
          <Col xs={10}>
          <ListGroup>
            <ListGroup.Item>Apple iPhone 12 (128GB) - Black</ListGroup.Item>
            <ListGroup.Item>Manufacture: Apple</ListGroup.Item>
          </ListGroup>
          <div className='badge-container'>
          <Badge bg="danger">Highest Co2</Badge>
          </div>
          </Col>
        </Row>

      </Container>
    </div>


  )
}
