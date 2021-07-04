import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?'
const key = 'GhRyAVIU6OMKX2g6Odn1NkUpGWNkFLQenfVcKR4f'


const Nasa = () => {

    const [lat, setLat] = useState('lat')
    const [lng, setLng] = useState('lng')
    const [nasaImg, setNasaImg] = useState(null);

    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)

    })

    useEffect(() => {
        fetch(baseURL + "lon=" + lng + "&lat=" + lat + "&date=2021-06-01&&dim=.5&api_key=" + key)
            .then(res => res.blob())
            .then(function (myBlob) {
                setNasaImg(URL.createObjectURL(myBlob))
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <div>
            <h1>Testing Nasa</h1>
            <h1>{lat}, {lng}</h1>
            <img alt="Overhead shot of location based on current lat and long" src={nasaImg} />
        </div>
    )

}

export default Nasa;