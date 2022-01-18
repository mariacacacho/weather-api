import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Search from './components/Search';

function App() {  
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [location, setLocation] = useState("");
  const [weather, setWeather]   = useState(undefined);


  const getWeather = async (lat, lon) => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
    }

    const token = await executeRecaptcha('submit');
    const timestamp = new Date().toUTCString();

    var options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
      params: {lon: lon, lat: lat},
      headers: {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': '9fe72b685fmshe6825cbd7a3f811p10fd1djsn1b2353f7e64b',
        timestamp,
        token
      }
    };
    
    axios.request(options).then(function (response) {
      setWeather(response.data.data[0]);
    }).catch(function (error) {
      console.error(error);
    });
  }

  const fwdGeoLocation = async (loc) => {  
    const token = await executeRecaptcha('submit');
    const timestamp = new Date().toUTCString();

    let location = [];
    let options = {
      method: 'GET',
      url: 'https://clemensd.kor-test.com/geolocation-api/',
      params: {q: loc, 'accept-language': 'en', polygon_threshold: '0.0'},
      headers: {      
        'x-api-key': 'wwVGdfNfsi2NBzb34gP9t6Fk0Rkbg0XF4FgU4ZpD',
        token, 
        timestamp
      }
    };  
    axios.request(options).then(function (response) {      
      location = [response.data[0].lat, response.data[0].lon];   
      getWeather(location[0], location[1])
    }).catch(function (error) {
      console.error(error);
    });
  }


  useEffect(() => {
  }, [executeRecaptcha]);

  useEffect(() => {
    if (document.querySelector('.grecaptcha-badge')) {
      const el = document.querySelector('.grecaptcha-badge');
      el.style.display = 'none';
    }
  }, []);

  return (
    <div className="App">      
        <Container>
          <Header />    
          <Search
            location={location}
            setLocation={setLocation}
            weather={weather}
            setWeather={setWeather}
            getWeather={getWeather}
            fwdGeoLocation={fwdGeoLocation}
          />
        </Container>
    </div>
  );
}

export default App;
