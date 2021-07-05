import React, { useState, useEffect } from 'react'
import {
    Table,
    Button
} from 'reactstrap'

const TmComponent = (props) => {

    useEffect(() => {
        // API vars
        const tmRootUrl = "https://app.ticketmaster.com/discovery/v2/"
        const tmApiKey = "c7AGPZOyCV1Y4tUM7Nfa1OirwIRKx0VD"
        console.log(tmApiKey)

        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lng = position.coords.longitude

            console.log(lat)
            console.log(lng)
        })
        
    }, [])

    // const getEvents = () => {
    //     async function
    // }
    
    return (
        <div>
            <h1>This is a test!</h1>
            <Table dark>

            </Table>
        </div>

    )
}

export default TmComponent