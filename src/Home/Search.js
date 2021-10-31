import React, {Component} from 'react';
import './Search.css';

const locationurl = "https://zomoapp.herokuapp.com/location";
//const resturl = "https://zomoapp.herokuapp.com/restaurant?stateId=1";

class Search extends Component {
    constructor(props){
        super()

        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                <option value={item.state_id}>{item.state}</option>
            })
        }
    }

    render(){
        return(
            <div className="container-fluid maincontainer"> 
                <button onclick="changeMode()">DarkMode</button>        
                <div className="clearfix">  
                    <div class="p-3 float-right">
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

                <div class="container d-flex justify-content-center">    
                    <form>
                        <select style={{width:'40%'}} name="Location" id="city" className="custom-select">
                            {this.renderCity(this.state.location)}
                        </select>

                        <select style={{width:'58%'}} name="Restaurent_Places" class="custom-select">
                            
                        </select>
                    </form>
                </div>
            </div>
        )
    }

    // on page load we hae to call api
    componentDidMount(){
        fetch(locationurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search;