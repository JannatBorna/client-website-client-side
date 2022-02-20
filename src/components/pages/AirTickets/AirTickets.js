import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import picture1 from '../../Images/package/Regular Package-02.jpg';
import picture2 from '../../Images/package/Family Packages.jpg';
import picture3 from '../../Images/package/Eid Packages.jpg';
import picture4 from '../../Images/package/Group Packages.jpg';
import picture5 from '../../Images/package/Medical Packages.jpg';
import picture6 from '../../Images/package/Umrah-Hajj-packages.jpg';
import AirTicketsBanner from './AirTicketsBanner';
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