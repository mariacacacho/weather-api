import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Location = (props) => {  
  return (    
    <Card style={{ width: '20rem' }} className="location_weather">
      <Card.Img className="location_weather_img" variant="top" src={`https://www.weatherbit.io/static/img/icons/${props.weather.weather.icon}.png`} />
      <Card.Body>
        <Card.Title>{props.weather.weather.description}</Card.Title>        
        <hr />
        <ListGroup variant="flush">
          <ListGroup.Item><strong className="location_att">Location:</strong>{props.weather.city_name}, {props.weather.country_code}</ListGroup.Item>
          <ListGroup.Item><strong className="location_att">Temperature:</strong>{props.weather.temp} C</ListGroup.Item>
          <ListGroup.Item><strong className="location_att">Rel. Humidity:</strong>{props.weather.rh}%</ListGroup.Item>
          <ListGroup.Item><strong className="location_att">Clouds:</strong>{props.weather.clouds}%</ListGroup.Item>          
          <ListGroup.Item><strong className="location_att">Sunrise:</strong>{props.weather.sunrise}</ListGroup.Item>
          <ListGroup.Item><strong className="location_att">Sunset:</strong>{props.weather.sunset}</ListGroup.Item>
          <ListGroup.Item><strong className="location_att">Wind Speed:</strong>{props.weather.wind_spd} m/s</ListGroup.Item>
          <ListGroup.Item><strong className="location_att">Wind Direction:</strong>{props.weather.wind_cdir_full}</ListGroup.Item>
          <ListGroup.Item><strong className="location_att">Date & Time:</strong><br />{props.weather.ob_time}</ListGroup.Item>
        </ListGroup>        
      </Card.Body>
    </Card>
  );
}

export default Location;
