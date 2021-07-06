import React, { useEffect, useState } from 'react'
import {
    Table
} from 'reactstrap'

const tmRootUrl = "https://app.ticketmaster.com/discovery/v2/events.json?"
const tmApiKey = "4CnjdPVobI1pEGhACetscWjiostGcJ3h"



const TmComponent = (props) => {

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetch(`${tmRootUrl}latlong=${props.lat},${props.lng}&radius=50&unit=miles&apikey=${tmApiKey}`)
            .then(response => response.json())
            .then(data => setEventData(data._embedded.events))
            .catch(err => console.log(err));
            console.log(eventData)
    }, [])


    return (
        
        <div>
            <h1>Events within 50 miles of your location</h1>
            <Table dark>
                <thead>
                    <tr>
                        <th align="left">Event Name</th>
                        <th align="left">Distance</th>
                    </tr>    
                </thead>
                {/* return () */}
                {eventData.length > 0 && eventData.map((finalEventData, index) => {
                    return (
                        <tr key={index}>
                            <td align="left">{finalEventData.name}</td>
                            <td align="left">{finalEventData.distance} miles</td>
                        </tr>
                    )
                })}
            </Table>
        </div>

    )
}

export default TmComponent