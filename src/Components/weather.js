import React from 'react';
//import { useState } from 'react';
 

 const Weather = () => { //lines 5-16 is the only code i can get to pull info
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.9867904&lon=-86.163456&appid=dc08a8fc02d5c6a52577cdccec773eaa`)
    .then (res => res.json())
    .then (data => console.log(data))
    
     return (
         <div className= 'App'>
             <h1> Local Weather </h1>
             
         </div>
     )
 }

// const Weather = () => {
//     const [current, setCurrent] = useState()
//     const [location, setLocation] = useState('');
//     const fetcher = () => {
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.9867904&lon=-86.163456&appid=dc08a8fc02d5c6a52577cdccec773eaa`)
//         .then(res => res.json())
//         .then(data =>console.log(data))
//     }


//     return(
//         <div className= "app">
//             <h5> {Weather[0]} </h5>
//         </div>
//     )
// }
 


//     const [temperature, setTemperature] = useState("");
//     const [lat, setlat] = useState("39.9867904");
//     const [lng, setlng] = useState("-86.163456");
//     const [city, setCity] = useState("Indianapolis");
//     const [state, setState] = useState("IN");
//     const weatherURL = 'https://api.openweathermap.org/data/2.5/onecall'
//     const owmApiKey = "dc08a8fc02d5c6a52577cdccec773eaa"

    
//     const getWeatherData = (, state) => {
//         fetch({
//             method: "GET",
//             url:`https://api.openweathermap.org/data/2.5/onecall?lat=39.9867904&lon=-86.163456&appid=dc08a8fc02d5c6a52577cdccec773eaa`
//         })
//             .then((response) => {
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 console.log(error)
//             });
//     }
  

export default Weather;