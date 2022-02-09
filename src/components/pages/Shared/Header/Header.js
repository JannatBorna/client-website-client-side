import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../../Images/logo/Logo.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <div fixed="top">
            
            <div>
                <div className='header_color'>---</div>
                {/* <img  src={back} alt=""/>  */}
                <div className="header_section">
                    <div className='text-end mx-5'> <span>+8801875601033</span> <br /> <span>+8801712726632</span>
                    </div>



                    <div>
                        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" >
                            <Container>
                                <Navbar.Brand href="#home">
                                    <img className="header_image" src={logo} alt="" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav" >

                                    <Nav className="navbar_text">
                                        <Nav.Link as={HashLink} to="/home" className="text-dark">Home</Nav.Link> 
                                        <Nav.Link as={HashLink} to="/services" className="text-dark">Services</Nav.Link> 
                                        <Nav.Link as={HashLink} to="/aboutUs" className="text-dark d-flex">AboutUs</Nav.Link>
                                        <Nav.Link as={HashLink} to="/ourTeam" className="text-dark">OurTeam</Nav.Link>
                                        <Nav.Link as={HashLink} to="/gallery" className="text-dark">Gallery</Nav.Link>
                                        <Nav.Link as={HashLink} to="/contactUs" className="text-dark">ContactUs</Nav.Link>
                                        <Nav className='search_bar mx-3'>
                                            <form id='search_input' className="d-flex">
                                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="search_button me-5" type="submit">Search</button>
                                            </form>
                                        </Nav>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div> 
          </div>
           </div>
        </div>
    );
};

export default Header;