import React, { useEffect, useState } from 'react'
import {
    Table
} from 'reactstrap'

const tmRootUrl = "https://app.ticketmaster.com/discovery/v2/events.json?"
const tmApiKey = "c7AGPZOyCV1Y4tUM7Nfa1OirwIRKx0VD"

const TmComponent = (props) => {

    useEffect(() => {
        async function getEvents() {
            try {
                const response = await fetch(
                    `${tmRootUrl}latlong=${props.lat},${props.lng}&radius=50&unit=miles&apikey=${tmApiKey}`
                )
                const json = await response.json()
                const data = json._embedded.events
                console.log({ data })
            } catch (error) { }
        }
        getEvents()
    })

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
                return ()
                {data.length > 0 && data.map((eventData, index) => {
                    return (
                        <tr key={index}>
                            <td>{eventData.name}</td>
                        </tr>
                    )
                })}
            </Table>
        </div>

    )
}

export default TmComponent