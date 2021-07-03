import React from 'react'
import './App.css';
import TmComponent from './Components/ticketmaster'
import GeoComponent from './Components/geoLocator'
import Nasa from './Components/nasa'
import Weather from './Components/weather'

function App() {
  return (
    <div className="App">
      <TmComponent />
      <GeoComponent />
      <Nasa />
      <Weather />
    </div>
  );
}

export default App;
