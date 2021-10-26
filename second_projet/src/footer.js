import React from 'react';

const Footer = () => {
    return(
        <section class="footer">
            <div class="container">
                <div class="row">
                    <div class="col justify-content-center">
                        <p>&copy;COPYRIGHT RESERVED</p>
                    </div>
                </div>

                <div class="align-center">
                    <i class="fa fa-twitter" style={{fontSize:'20px',color:'white'}}></i>
                    <i class="fa fa-facebook" style={{fontSize:'20px',color:'white'}}></i>
                    <i class="fa fa-instagram" style={{fontSize:'20px',color:'white'}}></i>
                </div>
                
                <div class="align-right">
                    <i class="fab fa-cc-paypal" style={{fontSize:'20px',color:'white'}}></i>
                    <i class='fab fa-cc-mastercard' style={{fontSize:'20px',color:'white'}}></i>
                    <i class="fab fa-cc-visa" style={{fontSize:'20px',color:'white'}}></i>
                </div>
            </div>
        </section> 
    )
}

export default Footer;