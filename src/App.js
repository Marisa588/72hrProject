import React, { useState } from 'react'
import './App.css';
import TmComponent from './Components/ticketmaster'
import Nasa from './Components/nasa'
import Weather from './Components/weather'
import Header from './Components/header';
import { Container } from 'reactstrap';

const App = () => {

  const [lat, setLat] = useState('lat')
  const [lng, setLng] = useState('lng')

  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude)
    setLng(position.coords.longitude)

  })

  return (
    <Container className="themed-container" fluid={true}>
       <div className="App">
      <Header />
      <hr />
      <br />
      {typeof lat == "string" || typeof lng == "string" ? null : <Weather lat={lat} lng={lng}/>}
      <br />
      {typeof lat == "string" || typeof lng == "string" ? null : <Nasa lat={lat} lng={lng} />}
      <br />
       {typeof lat == "string" || typeof lng == "string" ? null : <TmComponent lat={lat} lng={lng} />}
    </div> 
    </Container>
   

  );
}

export default App;
