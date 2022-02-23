import React from 'react';
import { Container } from 'react-bootstrap';
import AirTicketsBanner from '../AirTicketsBanner/AirTicketsBanner';
import './AirTickets.css'

const AirTickets = () => {
    return (
        <div>
            <div className='my-5'>
               <AirTicketsBanner></AirTicketsBanner>
            </div>

            <Container>
               <h2>This is air tickets card</h2>
            </Container>
        </div>
    );
};

export default AirTickets;