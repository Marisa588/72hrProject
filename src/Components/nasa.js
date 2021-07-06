import React, { useState, useEffect } from 'react'
import { Spinner } from 'reactstrap'

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?'
const key = 'GhRyAVIU6OMKX2g6Odn1NkUpGWNkFLQenfVcKR4f'


const Nasa = (props) => {

    const [nasaImg, setNasaImg] = useState(null);

    useEffect(() => {
        fetch(baseURL + "lon=" + props.lng + "&lat=" + props.lat + "&date=2021-06-01&&dim=.15&api_key=" + key)
            .then(res => res.blob())
            .then(function (myBlob) {
                setNasaImg(URL.createObjectURL(myBlob))
            })
            .catch(err => console.log(err));

    },[])

    return (
        <div>
            <h1>You are here:</h1>
            {typeof nasaImg == "object" ? <Spinner type="grow" children="" color="secondary" /> : <img alt="Overhead shot of location based on current lat and long" src={nasaImg} />}
        </div>
    )

}

export default Nasa;