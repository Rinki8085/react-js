import React from 'react';
import './mainContainer.css'

const MainContainer = () => {
    return(
        <div>
            <section id="variety" className="variety pt-4">
                <div className="container">
                    <div className="section title">
                        <h2 className="text-center font-weight-bold">Offers</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src="https://i.ibb.co/5G2Bzvp/offer1.webp" alt="offers"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="#variety">Offers On Booking Hotel</a>
                                    </h5>
                                    <p className="card-text">
                                        Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th.Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th
                                    </p>
                                </div>
                                <div className="read more">
                                    <a href="#variety">
                                        <i className="fas fa-arrow-circle-right"></i>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src="https://i.ibb.co/y8DJCKL/offers2.webp" alt="offers"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="#variety">Offers On Flights</a>
                                    </h5>
                                    <p className="card-text">
                                        Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th.Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th
                                    </p>
                                </div>
                                <div className="read more">
                                    <a href="#variety">
                                        <i className="fas fa-arrow-circle-right"></i>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src="https://i.ibb.co/18CJZsC/offers3.webp" alt="offers"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="#variety">Offers with paying from HDFC bank</a>
                                    </h5>
                                    <p className="card-text">
                                        Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th.Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th
                                    </p>
                                </div>
                                <div className="read more">
                                    <a href="#variety">
                                        <i className="fas fa-arrow-circle-right"></i>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src="https://i.ibb.co/18CJZsC/offers3.webp" alt="offers"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="#variety">Offer for members </a>
                                    </h5>
                                    <p className="card-text">
                                        Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th.Hello, welcome to my eportfolio.This program is free software; you can redistribute it and/or modify it under the terms of th
                                    </p>
                                </div>
                                <div className="read more">
                                    <a href="#variety">
                                        <i className="fas fa-arrow-circle-right"></i>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="trip-section bg-img py-3">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-7 heading-section text-center">
                            <h2 className="font-weight-bold text-color glow">
                                Trip ideas
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div className="img d-flex align-item-center justify-content-center" 
                                style={{background: `url(${'https://i.ibb.co/N9d3v42/trip1img.jpg'})`}}>
                                </div>

                                <div className="text text-center">
                                    <span className="out">10% Discount</span>
                                    <h2>Beach Places</h2>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div className="img d-flex align-item-center justify-content-center" 
                                style={{background:  `url(${'https://i.ibb.co/WnXK6n0/trip2img.jpg'})`}}>
                                </div>

                                <div className="text text-center">
                                    <span className="day">9% Discount</span>
                                    <h2>Trekking Places</h2>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div className="img d-flex align-item-center justify-content-center" 
                                style={{background:  `url(${'https://i.ibb.co/0KGqnSv/trip3img.jpg'}`}}>
                                </div>

                                <div className="text text-center">
                                    <span className="week">12% Discount</span>
                                    <h2>Peaceful place</h2>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div className="img d-flex align-item-center justify-content-center" 
                                style={{background:  `url(${'https://i.ibb.co/yBYkhrb/trip4img.jpg'}`}}>
                                </div>

                                <div className="text text-center">
                                    <h2>International Place</h2>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div className="img d-flex align-item-center justify-content-center" 
                                style={{background:  `url(${'https://i.ibb.co/y0rwNDt/trip5img.jpg'}`}}>
                                </div>

                                <div className="text text-center">
                                    <h2>Religious Place</h2>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div className="img d-flex align-item-center justify-content-center" 
                                style={{background:  `url(${'https://i.ibb.co/LRxBFwh/trip6img.jpg'}`}}>
                                </div>

                                <div className="text text-center">
                                    <h2>Romantic Place</h2>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div clclassNameass="img d-flex align-item-center justify-content-center" 
                                style={{background: `url(${'https://i.ibb.co/JqNkyt1/trip7img.jpg'}`}}>
                                </div>

                                <div className="text text-center">
                                    <h2>Place</h2>
                                </div>
                            </div>    
                        </div>

                        <div className="col-md-3 col-sm-6 d-flex">
                            <div className="trip idea">
                                <div className="img d-flex align-item-center justify-content-center" 
                                style={{background: `url(${'https://i.ibb.co/8NnNsf9/trip8img.jpg'}`}}>
                                </div>

                                <div className="text text-center">
                                    <h2>Weekend Gateway</h2>
                                </div>
                            </div>    
                        </div>
                    
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-md-4">
                            <a href="#variety" className="btn btn-trip d-block">
                                View all places
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonal my-5">
                <div className="container">
                    <h2 className="text-center my-3 mb-3">
                        Testimonial
                    </h2>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-6 b-3">
                            <div className="media border p-3 person">
                                <img src="https://i.ibb.co/4SDV9CQ/testimonial1.png" alt="John Doe" className="mr-3 mt-3 rounded-circle"
                                style={{width:'60px'}}/>
                                <div className="media-body">
                                    <h4>John Doe</h4>
                                    <small><i>Posted on February19,2016</i></small>
                                    <p>This website is ossum. It's is trustable.</p>
                                </div>
                            </div>
                        </div>
                

                        <div className="col-md-4 col-lg-4 col-sm-6 mb-3">
                            <div className="media border p-3 person">
                                <img src="https://i.ibb.co/gT6ddJb/testimonial2.jpg" alt="John Doe" className="mr-3 mt-3 rounded-circle"
                                style={{width:'60px'}}/>
                                <div className="media-body">
                                    <h4>John Doe</h4>
                                    <small><i>Posted on February19,2016</i></small>
                                    <p>This website is ossum. It's is trustable.</p>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-md-4 col-lg-4 col-sm-6 b-3">
                            <div className="media border p-3 person">
                                <img src="https://i.ibb.co/xSnCwKz/testimonial3.png" alt="John Doe" className="mr-3 mt-3 rounded-circle"
                                style={{width:'60px'}}/>
                                <div className="media-body">
                                    <h4>John Doe</h4>
                                    <small><i>Posted on February19,2016</i></small>
                                    <p>This website is ossum. It's is trustable.</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContainer;