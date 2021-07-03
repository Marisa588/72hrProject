import React, { useState } from 'react'
const baseURL = 'https://api.nasa.gov/planetary/earth/assets?'
const key = 'GhRyAVIU6OMKX2g6Odn1NkUpGWNkFLQenfVcKR4f'


const Nasa = () => {
    
    const [ nasaImg, setNasaImg] = useState([]);

    //eventually lon and lat will be inputs
    //useState is making too many calls 

    fetch(baseURL + "lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=" + key)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));


    return(
        <div>
            <h1>Testing Nasa</h1>
            <img src={''} />
        </div>
    )
    
}

export default Nasa; 