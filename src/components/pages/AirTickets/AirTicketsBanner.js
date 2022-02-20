import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../Images/air/Air Ticket Banner Image.jpg';

const AirTicketsBanner = () => {
    return (
        <div>
            <div className='banner_section my-4'>
                <Card className=" text-white">
                    <Card.Img className='banner_image' src={banner} alt="" />
                    <Card.ImgOverlay>
                        <p className='banner_text'>LET'S <span className='go_text'>GO</span> TRAVEL</p>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default AirTicketsBanner;