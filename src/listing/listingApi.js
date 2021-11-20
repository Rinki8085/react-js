import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import Header from '../Header';
import CuisineFilter from '../Filters/cuisineFilter'
import CostFilter from '../Filters/costFilter';
import './listing.css';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component {
    constructor(props){
        super()

        this.state={
            restaurantList:''
        }
    }

    setDataAsPerFilter = (sortData) => {
        this.setState({restaurantList:sortData})
    }

    render(){
        return(
            <>
            <Header/>
            <div className="row">
                    <div id="filter">
                    <h3>Filters</h3>
                        <CuisineFilter restPerCuisine={(data) => {this.setDataAsPerFilter(data)}}/> 
                        <CostFilter restPerCost={(data) => {this.setDataAsPerFilter(data)}}/> 
                </div>
                <ListingDisplay listData={this.state.restaurantList}/>
            </div>
            </>
        )
    }

    // callapi local
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default Listing;