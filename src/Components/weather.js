import React, { useState, useEffect } from 'react';



//import geoLocation from './geoLocator'

//baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
//const key = '86cc28d4b00312819c950c9c2d6c8efc'


 
    const WeatherApp = (props) => {

        
     const[weather, setWeather] = useState({});
     const [lat, setLat] = useState('lat')
     const [lng, setLng] = useState('lng')
   
     navigator.geolocation.getCurrentPosition((position) => {
         setLat(position.coords.latitude)
         setLng(position.coords.longitude)
     });
   
    


     useEffect(() => {
    //fetch('https://api.openweathermap.org/data/2.5/weather?lat=39.9867904&lon=-86.163456&units=imperial&appid=86cc28d4b00312819c950c9c2d6c8efc')
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + props.lat + '&lon=' + props.lng +'&units=imperial&appid=86cc28d4b00312819c950c9c2d6c8efc')
        .then (res => res.json())
        .then (result => setWeather(result))

        
        .catch(err => console.log(err));


     }, []); 
    
    const [temp, setTemp] = useState();
    const [unit, setUnit] = useState("F");
    const oppositeUnit = unit === "F" ? "C" : "F";

    const convert = () => {

        if (unit === "F") {
            const newT = ((temp - 32) * 5) / 9;
            setTemp(Math.round(newT));
            setUnit(oppositeUnit);
        }

        if (unit === "C") {
            const newT = temp * 1.8 + 32;
            setTemp(Math.round(newT));
            setUnit(oppositeUnit);
        }

        
    };
    
     return (
        <div className= 'weatherapp'>
            {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location"> {weather.name} </div>
                    <div className="weather-box">
                        <div className="temp">
                             {Math.round(weather.main.temp)}
                              {unit}
                            <br></br>
                             <button onClick={convert}>Convert to {oppositeUnit}</button> 
                        </div>
                    <div className="weather">{weather.weather[0].main}</div>
                </div>
             </div>
            ) : ('')}
        </div>
    );


    }


     
        

export default WeatherApp;