import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col justify-content-center">
                        <p>&copy;COPYRIGHT RESERVED</p>
                    </div>
                </div>

                <div className="align-center">
                    <i className="fa fa-twitter" style={{fontSize:'20px',color:'white'}}></i>
                    <i className="fa fa-facebook" style={{fontSize:'20px',color:'white'}}></i>
                    <i className="fa fa-instagram" style={{fontSize:'20px',color:'white'}}></i>
                </div>

                <div className="align-right">
                    <i className="fab fa-cc-paypal" style={{fontSize:'20px',color:'white'}}></i>
                    <i className='fab fa-cc-mastercard' style={{fontSize:'20px',color:'white'}}></i>
                    <i className="fab fa-cc-visa" style={{fontSize:'20px',color:'white'}}></i>
                </div>
            </div>
        </section> 
    )
}

export default Footer;