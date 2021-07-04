import React, { useState } from 'react'
import { Button } from 'reactstrap'

const baseURL = 'https://api.nasa.gov/planetary/earth/assets?'
const key = 'GhRyAVIU6OMKX2g6Odn1NkUpGWNkFLQenfVcKR4f'


const Nasa = () => {
    
    const [ nasaImg, setNasaImg] = useState(null);

    const fetchNasa = () => {
    fetch(baseURL + "lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=" + key)
    .then(res => res.json())
    .then(data => setNasaImg(data.url))
    .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchNasa();
    }

    return(
        <div>
            <h1>Testing Nasa</h1>
            <Button onClick={handleSubmit}>Handle Submit</Button>
            <img src={nasaImg}/>
        </div>
    )
    
}

export default Nasa; 