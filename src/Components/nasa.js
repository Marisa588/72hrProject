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


    // const [ nasaImg, setNasaImg] = useState(null);

    // useEffect(() => {

    //     navigator.geolocation.getCurrentPosition((position) => {
    //         let lat = position.coords.latitude
    //         let lng = position.coords.longitude

    //         console.log(lat)
    //         console.log(lng)
    //     })

    // }, [])


    // const fetchNasa = () => {
    // fetch(baseURL + "lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=" + key)
    // .then(res => res.json())
    // .then(data => setNasaImg(data.url))
    // .catch(err => console.log(err));
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetchNasa();
    // }

    return (
        <div>
            <h1>Testing Nasa</h1>
            {/* <Button onClick={handleSubmit}>Handle Submit</Button> */}
            <img src={nasaImg} />
        </div>
    )

}

export default Nasa;