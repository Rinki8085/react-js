import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomoajulypi.herokuapp.om.restaurant?mealtype_id=";

class Listing extends Component {
    constructor(props){
        super()
        
        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
            <div className="row">
                <listingDisplay listData={this.state.restaurantList}/>
            </div>
        )
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem("mealId",mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default Listing;