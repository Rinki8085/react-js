import React from "react";
import './Header.css'

const Header = () => {
    return(
        <>
        <section>
            
            <div className="cover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <p className="mb-0 phone pl-md-2">
                                <a href="#main-navbar" className="mr-2">
                                    <i className="fas fa-phone mr-1"></i>
                                    +55 65 2212 454
                                </a>
                                <a href="#main-navbar">
                                    <i class="fas fa-paper-plane mr-1"></i>
                                    krinki2604@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center-md-end">
                            <div className="social-icon mr-4">
                                <p className="mb-0 d-flex">
                                    <a href="#main-navbar" className="d-flex align-items-center justify-content-center">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#main-navbar" className="d-flex align-items-center justify-content-center">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#main-navbar" className="d-flex align-items-center justify-content-center">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </p>
                            </div>
                            <div className="reg">
                                <a href="#main-navbar" className="mr-2 mb-0" >Sign-up</a>
                                <a href="#main-navbar">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav className="navbar navbar-expand-lg main-navbar bg-color main-navbar-color" id="main-navbar">
                <div className="container">
                    <a className="navbar-brand" href="#Cherish_your_journey.html">Cherish <i className="fa fa-heart-o" style={{fontSize:'24px'}}></i> Your Journey</a>
                    <div className="order-lg-last btn-group">
                        <i className="fas fa-shopping-bag fa-2x"></i>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="mynav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="../Hotel_&_Resorts/Hotel_&_Resort.html" className="nav-link">Hotel & Resorts</a>
                            </li>
                            <li className="nav-item">
                                <a href="Flights.html" className="nav-link">Flights</a>
                            </li>
                            <li className="nav-item">
                                <a href="../Trip_Ideas/trip_idea/trip_idea.html" className="nav-link">Trip Ideas</a>
                            </li>
                            <li className="nav-item">
                                <a href="Booknow.html" className="nav-link">Wallet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </section>
        <section id="hero">
            <div className="hero-container">
                <div className="hero-logo">
                    <h1 className="font-weight-bold">Cherish <i className="fa fa-heart-o" style={{fontSize:'24px'}}></i> Your Journey</h1>
                </div>
                <h2 className="font-weight-bold">Choose Your Hotel</h2>
                <div className="actions">
                    <a href="booknow.html" className="btn-get-started bg-warning">Book Now</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Header;