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
            <h1>This is a test!</h1>
            <Table dark>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Distance</th>
                    </tr>    
                </thead>
                {/* return () */}
                {eventData.length > 0 && eventData.map((finalEventData, index) => {
                    return (
                        <tr key={index}>
                            <td>{finalEventData.name}</td>
                        </tr>
                    )
                })}
            </Table>
        </div>

    )
}

export default TmComponent