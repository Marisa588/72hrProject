import React, { useState, useEffect } from 'react'

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?'
const key = 'GhRyAVIU6OMKX2g6Odn1NkUpGWNkFLQenfVcKR4f'


const Nasa = (props) => {

    const [nasaImg, setNasaImg] = useState(null);

    useEffect(() => { // can I add an if/then statement here to pull only after lat and long have been populated?
        fetch(baseURL + "lon=" + props.lng + "&lat=" + props.lat + "&date=2021-06-01&&dim=.15&api_key=" + key)
            .then(res => res.blob())
            .then(function (myBlob) {
                setNasaImg(URL.createObjectURL(myBlob))
            })
            .catch(err => console.log(err));

    }, [setNasaImg])

    return (
        <div>
            <h1>Testing Nasa</h1>
            <h1>{props.lat}, {props.lng}</h1>
            <img alt="Overhead shot of location based on current lat and long" src={nasaImg} />
        </div>
    )

}

export default Nasa;