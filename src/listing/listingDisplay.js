import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';
import Header from '../Header';

const ListingDisplay = (props) => {

    const renderList = ({listData}) => {
        if(listData){
            return listData.map((item) => {
                return(
                    <div className="item" key={item.restaurant_id}>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="Image" src={item.restaurant_thumb} alt="restaurant_image"/>
                            </div>
                            <div className="col-md-7">
                                <div className="hotel_name">
                                    <Link to={`/details/${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                    <div className="city_name">{item.address}</div>
                                    <div className="city_name rating">{item.rating_text}</div>
                                    <div className="city_name rating">Rs.{item.cost}</div>
                                    <div className="labelDiv">
                                        <span className="badge badge-primary">
                                            {item.mealTypes[0].mealtype_name}
                                        </span> &nbsp;
                                        <span className="badge badge-success">
                                            {item.mealTypes[1].mealtype_name}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="badge badge-danger">
                                            {item.cuisines[0].cuisine_name}
                                        </span> &nbsp;
                                        <span className="badge badge-info">
                                            {item.cuisines[1].cuisine_name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )
            })
        }else{
            return(
                <div>

                    <div className="spinner-border text-muted"></div>
                    <div className="spinner-grow text-muted"></div>
                    <div className="spinner-border text-success"></div>
                    <div className="spinner-grow text-success"></div>
                   
                    <div className="spinner-border text-danger"></div>
                    <div className="spinner-grow text-danger"></div>
                    <div className="spinner-border text-dark"></div>
                    <div className="spinner-grow text-dark"></div>
                    
                    <div className="spinner-border text-warning"></div>
                    <div className="spinner-grow text-warning"></div>
                    <div className="spinner-border text-info"></div>
                    <div className="spinner-grow text-info"></div>

                </div>
            )
            
        }

    }

    return(
        <>
        <Header/>
        <div id="mainListing">
            <div id="filter">
                <div style={{marginLeft:'20px'}}>
                    <h3>Filters</h3>
                    
                    <p>Cuisne</p>
                    <input type="checkbox"/>North Indian<br/>
                    <input type="checkbox"/>South Indian<br/>
                    <input type="checkbox"/>Chinese<br/>
                    <input type="checkbox"/>Fast Food<br/>
                    <input type="checkbox"/>Stroot food<br/>
                    
                    <p>Cost for two</p>
                    <input type="radio"/>less than 500rs<br/>
                    <input type="radio"/>500rs to 1000rs<br/>
                    <input type="radio"/>1000rs to 1500rs<br/>
                    <input type="radio"/>1500rs to 2000rs<br/>
                    <input type="radio"/>2000rs
                </div>
            </div>
            <div id="content">
                {renderList(props)}
            </div>
        </div>
        </>
    )
}

export default ListingDisplay