import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../../Images/logo/Logo.png';
// import background from '../../../Images/background/header-background.png';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Border from '../Border/Border';
import './Header.css'
const Header = () => {

    
return (
    <div>
      <Border></Border>
           
      

   {/* style={{ backgroundImage: `url(${background})`, backgroundSize: "contain", height: "117px", marginTop: "-10px" }}   */}        
   
   <Navbar collapseOnSelect expand="lg" bg="white" variant="dark"  className="navbar_container" sticky="top">  
        <Container>
            <Navbar.Brand href="#home">
                <img className="header_image my-5" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >

                <Nav className="navbar_text">
                <Nav.Link as={HashLink} to="/home#home" className="navbar_item text-dark">Home</Nav.Link> 
                               
                <NavDropdown title="Services" id="basic-nav-dropdown" menuVariant="white">
                
                <div className='dropdown_section'>
                <div className='navDropdown_item'>
                <p className='mx-5 my-3'> PACKAGES</p>
                <NavDropdown.Divider />
                <NavDropdown.Item className='mx-5 my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Regular Package</NavDropdown.Item>
                
                <NavDropdown.Item className='mx-5 my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  Group Package</NavDropdown.Item>
                
                <NavDropdown.Item className='mx-5 my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  Eid Package</NavDropdown.Item>
                
                <NavDropdown.Item className='mx-5 my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Umrah</NavDropdown.Item>
                
                </div> 
                                            
                <div className='navDropdown_item'>
                <p className='my-3'> VISA</p>
                <NavDropdown.Divider />
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Africa</NavDropdown.Item>
                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Antarctica</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  Asia</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  Australia</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  Combo Package</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  Europe</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> North America</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  On Arrival</NavDropdown.Item>
                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} />  South America</NavDropdown.Item>
                                            
        </div>    
                                            
                                            
            <div className='navDropdown_item'>
                <p className='my-3'> AIR TICKETS</p>
                
                <NavDropdown.Divider />
                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Domestic</NavDropdown.Item>
                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Indian Domestic</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> International</NavDropdown.Item>
                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Special</NavDropdown.Item>
            </div>
                                           
                <div className='navDropdown_item'>
                <p className='my-3'> OTHERS</p>
                <NavDropdown.Divider />
                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> VISA</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Hotel Booking</NavDropdown.Item>
                                                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Transport</NavDropdown.Item>
                
                <NavDropdown.Item className='my-2' href=""><FontAwesomeIcon icon={faAngleRight} /> Tours Ans Attractions</NavDropdown.Item>
            
            </div>
        </div>
        </NavDropdown>

                                       
                {/*<Link className='text-black ms-4 text-decoration-none' to='/about'>About-Us</Link>*/}                        
     
                <Nav.Link as={HashLink} to="/aboutUs#aboutUs" className="text-dark navbar_item">AboutUs</Nav.Link>

                <Nav.Link as={HashLink} to="/ourTeam#ourTeam" className="text-dark navbar_item">OurTeam</Nav.Link>

                <Nav.Link as={HashLink} to="/gallery#gallery" className="text-dark navbar_item">Gallery</Nav.Link>

                <Nav.Link as={HashLink} to="/contactUs#contactUs" className="text-dark navbar_item">ContactUs</Nav.Link>
                            
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
             {/* </div> */}
             {/* </div>  
             </div> */}
       
    </div>
    );
};

export default Header;