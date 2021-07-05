import React, { useState } from 'react'
import './App.css';
import TmComponent from './Components/ticketmaster'
import GeoComponent from './Components/geoLocator'
import Nasa from './Components/nasa'
import Weather from './Components/weather'

function App() {

  const [lat, setLat] = useState('lat')
  const [lng, setLng] = useState('lng')

  navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)

  })

  return (
    <div className="App">
      <TmComponent />
      <GeoComponent />
 
    
    
    
    
    develop
      <Nasa lat={lat} lng={lng}/>

      <Nasa />
      <Weather />
 Marisa
    </div>
  );
}

export default App;
