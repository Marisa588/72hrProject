import React from 'react'


const Nasa = () => {
    
    fetch("https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=GhRyAVIU6OMKX2g6Odn1NkUpGWNkFLQenfVcKR4f") // this is currently calling to /assets endpoint when it should be "imagery". When I change to the "imagery" endpoint, I get an error. Not sure why
    .then(res => res.json())
    .then(data=>console.log(data))
  

    return(
        <div>
            <h1>Testing Nasa</h1>
        </div>
    )
    
}

export default Nasa; 