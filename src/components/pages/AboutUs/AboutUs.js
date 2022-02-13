import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../Images/about/About-01-01.jpg';
import background from '../../Images/background/header-background.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='my-5'>
            <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: 4,
                borderColor: '#000000',
                marginTop: "-22px"
            }} />
            
            <div>
                <img className='about_image' src={about} alt="" />
            </div>
            <Container style={{ backgroundImage: `url(${background})`, backgroundSize: "contain", height: "487px", marginTop: "-70px" }}>
                <div className='about_section'>
                    <h2 className='about_text text-center'>ABOUT US</h2>
                    <p className='text-start'><b>HIMALAYAN TRAVELS</b> was formed in the year 1984 by <b>MASBAH UL BARI PAPPU</b>. This company projects a different view of tourism on the current scenario of the Bangladeshi Tourism Industry. Leisure and relaxation has always been the best way to comfort oneself and adjust with the troubles of everyday life and tourism is a way of life which assists one to bring peace within the mind. The company owns and operates two destination management companies in Asia. <b>HIMALAYAN TRAVELS</b>. Started off as an inbound and outbound tourism for operating tours and travel service. The company is experienced in providing special services and unique tourism products to luxury global travelers. The company’s depth of experience and large infrastructure enable it to create unique itineraries with the operational confidence to fulfill client expectation. For the past several years, the company served huge numbers of satisfied customers. Cosmos targets families and the young generation especially and ensures good quality the maintenance. 24 hour support innovative tour planning and a priority in sightseeing Cosmos offers the best tourism at a reasonable price with no hidden costs.</p>
                </div>

                <div className='about_section me-5'>
                    <h2 className='about_text text-center'>WHAT WE OFFER</h2>
                    <p className='text-start'>All Kind of Holiday package, Hotel Booking, Travel planning, Air Ticket, Doctor Appointment, Visa Processing, Reservation, Indian Domestic Air & Rail Ticket. We have a dedicated and experienced team to look after your reservation calls. Due to our close contact in the industry, we are able to give, all kinds of domestic & international Air Ticket, resort and hotel availability at most difficult periods. We can fulfill Airlines target seat sell. Indian domestic flight ticket & Rail ticket also sell from Bangladesh. Our affiliation with airlines and hotels give us the opportunity to keep our trusted allies and clients happy most of the time. We can guarantee fast replies and reliability in our service.</p>
                </div>

                <div>
                    <h2 className='about_text3 my-4'>SLOGAN, VISION, MISSION & GOAL</h2>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;