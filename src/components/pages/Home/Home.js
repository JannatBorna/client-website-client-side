import React from 'react';
import Banner from '../Banner/Banner';
import icon from '../../Images/arrow-icon/arrow-1.png';
import './Home.css'



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='d-flex'>
                <div>
                    <img className='arrow_icon mx-4' src={icon} alt="" />
                    <a className='arrow_text' href="/package">Click Package</a>
                </div>
             
                <div>
                    <img className='arrow_icon mx-4' src={icon} alt="" />
                    <a className='arrow_text' href="/airTickets">Click Air Tickets</a>
                </div>
            </div>

            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 2,
                borderColor: '#000000',
                marginTop: "12px"
            }} />
        </div>
    );
};

export default Home;   
        