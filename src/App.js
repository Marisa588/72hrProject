import React, { useState } from 'react'
import './App.css';
import TmComponent from './Components/ticketmaster'
import GeoComponent from './Components/geoLocator'
import Nasa from './Components/nasa'
import Weather from './Components/weather'
import { Spinner } from 'reactstrap';

const App = () => {

  const [lat, setLat] = useState('lat')
  const [lng, setLng] = useState('lng')

  navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)

  })

  return (
    <div className="App">
      <TmComponent />
      {typeof lat == "string" || typeof lng == "string" ? null : <Nasa lat={lat} lng={lng}/>}
      <Weather />
    </div>
  );
}

export default App;
