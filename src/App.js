import React, { useState } from 'react'
import './App.css';
import TmComponent from './Components/ticketmaster'
import GeoComponent from './Components/geoLocator'
import Nasa from './Components/nasa'

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
      <Nasa lat={lat} lng={lng}/>
    </div>
  );
}

export default App;
