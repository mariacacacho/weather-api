import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = () => {  
  return (    
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>
            Weather App
          </h1>          
        </Col>
      </Row>        
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h6>
            Geolocation + Weather retrieval with secured API keys through 
            &nbsp;<a href="https://korconnect.io" rel="noreferrer" target="_blank">KOR Connect</a>
          </h6>
        </Col>
      </Row>
    </>
  );
}

export default Header;
