import React, {Component} from 'react';
import './Search.css';

const locationurl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";

class Search extends Component {
    constructor(props) {
        super()

        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })
    }

    render(){
        
        return(
            <div className="container-fluid maincontainer"> 
                <button>DarkMode</button>        
                <div className="clearfix">  
                    <div className="p-3 float-right">
                    <button type="button" className="btn btn-outline-light text-light;">Log In</button>
                    <button type="button" className="btn btn-outline-light text-light;">Create an account</button>
                    </div>
                </div>

                <div className="p-1 d-flex justify-content-center">
                    <span className="mb-3 d-flex justify-content-center logo">e!</span>
                </div>

                <div className="container d-flex justify-content-center heading">
                    Find The Best Restaurent, Cafes and Bars
                </div>

                <div className="container d-flex justify-content-center">    
                    <form>
                        <select style={{width:'40%'}} className="custom-select" onChange={this.handleCity}>
                            {this.renderCity(this.state.location)}
                            <option>--select Location</option>
                        </select>

                        <select style={{width:'58%'}} className="custom-select">
                            {this.renderRestaurants(this.state.restaurant)}
                            <option>--select Restaurent</option>
                        </select>
                    </form>
                </div>
            </div>
        )
    }

     // on page load we have to call api
     componentDidMount(){
        fetch(locationurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search;