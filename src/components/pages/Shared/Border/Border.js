import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Border = () => {
    return (
        <div>
            
            <div className='header_color'>---</div>
                
            <div className="header_section">
                <div className='text-end mx-5 my-2' collapseOnSelect expand="lg" bg="white" variant="dark">
                            <FontAwesomeIcon className='call_logo' icon={faPhoneVolume} /> <span>+8801875601033</span> <br /> <span>+8801712726632</span>
                        </div>
                    </div>
        </div>
    );
};

export default Border;