import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../Images/background/banner.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner_section my-4'>
            <Card className="text-white">
                <Card.Img className='banner_image' src={banner} alt="Card image" />
                <Card.ImgOverlay>
                    <p className='banner_text'>LET'S <span className='go_text'>GO</span> TRAVEL</p>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;