import axios from 'axios';
import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Location from './Location';

const Search = (props) => {  

  return (        
    <>
    <Form className="search_form">
      <Row className="justify-content-md-center">
        <Col md={{ offset: 3 }}>
          <Form.Control placeholder="Address, city or country name." onChange={event => props.setLocation(event.target.value)}/>
        </Col>
        <Col>
          <button type="button" className="btn btn-primary" onClick={() => props.fwdGeoLocation(props.location)}>
            Search
          </button>
        </Col>
      </Row>
    </Form>   

    <Row className="justify-content-md-center">
      <Col md="auto">
        { typeof props.weather === 'undefined' ?
          <h4 className="empty_state">Search the weather at any location.</h4>
          :
          <Location weather={props.weather} />
        }
      </Col>
    </Row>

    </>
  );
}

export default Search;
