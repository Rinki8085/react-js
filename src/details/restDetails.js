import React, {Component} from 'react';
import Header from '../Header';

class Details extends Component {
    render(){
        return(
            <>
            <Header/>
            <div className="container">
                <div className="card" style={{width:'80%'}}>
                    <img className="card-img-top" src="https://i.ibb.co/7XHrT6B/Jacob_garden_hotel.webp" alt="Card" style={{width:'100%'}}/>
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <div className="btn btn-primary">See Profile</div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Details;