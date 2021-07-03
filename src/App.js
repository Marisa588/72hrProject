import React from 'react'
import './App.css';
import TmComponent from './Components/ticketmaster'
import GeoComponent from './Components/geoLocator'

function App() {
  return (
    <div className="App">
      <TmComponent />
      <GeoComponent />
    </div>
  );
}

export default App;
