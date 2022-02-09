import React from 'react';
import logo1 from '../../../Images/account-logo/american-express.png';
import logo2 from '../../../Images/account-logo/bKash.png';
import logo3 from '../../../Images/account-logo/dutch-bangla.png';
import logo4 from '../../../Images/account-logo/mastercard.png';
import logo5 from '../../../Images/account-logo/nogot.png';
import logo6 from '../../../Images/account-logo/upai.png';
import logo7 from '../../../Images/account-logo/visa.png';
import './Footer.css'

const Footer = () => {
return (
    <div>
         
         <div>
             <h2 className='footer_text'>We Accept:</h2>
             <div>
                <img className='account_visa' src={logo7} alt="" /> 
                <img className='account_mastercard' src={logo4} alt="" />
                <img className='account_american' src={logo1} alt="" /> 
                <img className='account_dutch' src={logo3} alt="" />
                <img className='account_bKash' src={logo2} alt="" />
                <img className='account_upai' src={logo6} alt="" />
                <img className='account_nogot' src={logo5} alt="" />
                
               
                
             </div>
             
         </div>

        <div className='footer_color'>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
            <span className='footer_meddleColor'>---</span>
        </div>
    </div>     
           
                
    );
};

export default Footer;   
               
                

                

                
                
               