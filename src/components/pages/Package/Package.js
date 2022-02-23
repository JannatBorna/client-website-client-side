import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

import picture1 from '../../Images/package/Regular Package-02.jpg';
import picture2 from '../../Images/package/Family Packages.jpg';
import picture3 from '../../Images/package/Eid Packages.jpg';
import picture4 from '../../Images/package/Group Packages.jpg';
import picture5 from '../../Images/package/Medical Packages.jpg';
import picture6 from '../../Images/package/Umrah-Hajj-packages.jpg';
import PackageBanner from './../PackageBanner/PackageBanner';
import './Package.css'

const Package = () => {
    return (
        <div>
            <div className='my-5'>
                <PackageBanner></PackageBanner>
            </div>
         
            <Container>
                <h2 className='package_text my-3'>OUR PACKAGES</h2>
                <div className='packages_section'>
                    <Card style={{ width: '18rem', height: '10rem' }}>
                        <Card.Img variant="top" src={picture1} />
                        <Card.Body>
                            <Button variant="success"
                                className="package_button">REGULAR PACKAGE</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', height: '10rem' }}>
                        <Card.Img variant="top" src={picture2} />
                        <Card.Body>
                            <Button variant="success"
                                className="package_button">FAMILY PACKAGE</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', height: '10rem' }}>
                        <Card.Img variant="top" src={picture3} />
                        <Card.Body>
                            <Button variant="success"
                                className="package_button">EID PACKAGE</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', height: '10rem' }}>
                        <Card.Img variant="top" src={picture4} />
                        <Card.Body>
                            <Button variant="success"
                                className="package_button">GROUP PACKAGE</Button>
                        </Card.Body>
                    </Card>
               </div>

                <div className='packages_sectionTwo my-5'>
                    <Card style={{ width: '18rem', height: '10rem' }} className="card_five my-5">
                        <Card.Img variant="top" src={picture5} />
                        <Card.Body>
                            <Button variant="success" className="package_button">MEDICAL</Button>
                        </Card.Body>
                        
                    </Card>

                    <Card style={{ width: '16rem', height: '10rem' }} className="card_six my-5">
                        <Card.Img variant="top" src={picture6} />
                        <Card.Body>
                            <Button variant="success" className="package_button">UMRAH</Button>
                        </Card.Body>
                    </Card>
                </div>    
            </Container>    
        </div>
    );
};

export default Package;          
                    
                
               
            
        