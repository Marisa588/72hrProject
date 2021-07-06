import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = () => {


    return (
        <div className="App">
            <Jumbotron fluid>
                <Container fluid>
                    <div className="header">
                        <h1 className="display-3">Based on your Location...</h1>
                        <p className="lead">Weather data, a satellite image of your location, and events around you will populate below</p>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Header;
