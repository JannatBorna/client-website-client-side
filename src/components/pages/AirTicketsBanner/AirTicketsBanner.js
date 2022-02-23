import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../Images/air/Air Ticket Banner Image.jpg';
import './AirTicketsBanner.css'

const AirTicketsBanner = () => {
    return (
        <div>
            <div className='airBanner_section my-4'>
                <Card className=" text-white">
                    <Card.Img className='airBanner_image' src={banner} alt="" />
                    <Card.ImgOverlay>
                        <p className='airBanner_text'>LET'S <span className='airBannerGo_text'>GO</span> TRAVEL</p>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default AirTicketsBanner;