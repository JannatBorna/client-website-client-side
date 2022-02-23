import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../Images/package/Home Page-02.jpg';
import './PackageBanner.css'

const PackageBanner = () => {
    return (
        <div>
            <div className='packageBanner_section my-4'>
                <Card className="text-white">
                    <Card.Img className='packageBanner_image' src={banner} alt="Card image" />
                    <Card.ImgOverlay>
                        <p className='packageBanner_text'>LET'S <span className='packageBannerGo_text'>GO</span> TRAVEL</p>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default PackageBanner;