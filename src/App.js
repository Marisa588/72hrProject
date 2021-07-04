import React from 'react'
import './App.css';
import TmComponent from './Components/ticketmaster'
import GeoComponent from './Components/geoLocator'
import Nasa from './Components/Nasa'

function App() {
  return (
    <div className="App">
      <TmComponent />
      <GeoComponent />
      <Nasa />
    </div>
  );
}

export default App;
