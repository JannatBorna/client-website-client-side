import React from 'react';
import { Button, Container } from 'react-bootstrap';
import AirTicketsBanner from '../AirTicketsBanner/AirTicketsBanner';
import airTickets1 from '../../Images/air/Air Ticket Banner Image.jpg'
import airTickets2 from '../../Images/air/International.jpg'
import airTickets3 from '../../Images/air/Indian Domestic.jpg'
import airTickets4 from '../../Images/air/Domestic Airbus.jpg'
import airTickets5 from '../../Images/air/Special Air.jpg'

import './AirTickets.css'



const AirTickets = () => {
   
    return (
<div>
    <div className='my-5'>
        <AirTicketsBanner></AirTicketsBanner>
    </div>

    <h2 className='ariHeader_text my-3'>AIR TICKETS</h2>
 <Container className='air_container'>     
         
           <div className="box">
        <div className="imgBox">
            <img src={ airTickets1} alt="" />
        </div>
        
        <div className="content">
            <Button className='air_button'>DOMESTIC</Button>
                
            {/* <br /><span>Chartered Accountant C.A</span></ */}
           
        </div>
    </div>

      <div className="box">
        <div className="imgBox">
            <img src={ airTickets2} alt="" />
        </div>
        
        <div className="content">
        <Button className='air_button'>INTERNATIONAL</Button>
                {/* <br /> <span>Chartered Accountant C.A</span> */}
           
        </div>
    </div>

    <div className="box">
        <div className="imgBox">
            <img src={ airTickets3} alt="" />
        </div>
        
        <div className="content">

            <Button className='air_button'>DOMESTIC</Button>
             {/*<h2>Aakash Agrawal
            <br /> <span>Chartered Accountant C.A</span> </h2> */}
           
        </div>
    </div>


       <div className="box">
        <div className="imgBox">
            <img src={ airTickets4} alt="" />
        </div>
        
        <div className="content">
            <Button className='air_button'>INDIAN</Button>
            {/* <h2>Aakash Agrawal
            <br /> <span>Chartered Accountant C.A</span></h2>  */}
           
        </div>
    </div>

       <div className="box">
        <div className="imgBox">
            <img src={ airTickets5} alt="" />
        </div>
        
        <div className="content">
            <Button className='air_button'>SPECIAL</Button>
            {/* <h2>Aakash Agrawal
            <br /> <span>Chartered Accountant C.A</span></h2>  */}
           
        </div>
    </div>

       {/*  <div className="box">
        <div className="imgBox">
            <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
        </div>
        
        <div className="content">
            <Button>Domestic</Button>
           <h2>Aakash Agrawal</h2> <br /> <span>Chartered Accountant C.A</span> 
           
        </div>
    </div>*/}
    

    </Container>
</div>
    );
};

export default AirTickets;