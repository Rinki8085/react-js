import React from "react";

const Header = () => {
    return(
        <section>
            
            <div class="cover">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 d-flex align-items-center">
                            <p class="mb-0 phone pl-md-2">
                                <a href="#main-navbar" class="mr-2">
                                    <i class="fas fa-phone mr-1"></i>
                                    +55 65 2212 454
                                </a>
                                <a href="#main-navbar">
                                    <i class="fas fa-paper-plane mr-1"></i>
                                    krinki2604@gmail.com
                                </a>
                            </p>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center-md-end">
                            <div class="social-icon mr-4">
                                <p class="mb-0 d-flex">
                                    <a href="#main-navbar" class="d-flex align-items-center justify-content-center">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#main-navbar" class="d-flex align-items-center justify-content-center">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="#main-navbar" class="d-flex align-items-center justify-content-center">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="reg">
                                <a href="#main-navbar" class="mr-2 mb-0" >Sign-up</a>
                                <a href="#main-navbar">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav class="navbar navbar-expand-lg main-navbar bg-color main-navbar-color" id="main-navbar">
                <div class="container">
                    <a class="navbar-brand" href="#">Cherish <i class="fa fa-heart-o" style={{fontSize:'24px'}}></i> Your Journey</a>
                    <div class="order-lg-last btn-group">
                        <i class="fas fa-shopping-bag fa-2x"></i>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="mynav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="../Hotel_&_Resorts/Hotel_&_Resort.html" class="nav-link">Hotel & Resorts</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Flights</a>
                            </li>
                            <li class="nav-item">
                                <a href="../Trip_Ideas/trip_idea/trip_idea.html" class="nav-link">Trip Ideas</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Wallet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </section>
    )
}

export default Header;