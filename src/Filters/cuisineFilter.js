import React,{Component} from 'react';
import axios from 'axios';

// sessionStorage.setItem('meallId',mealId)

const url = "https://zomatoajulypi.herokuapp.com/filter/1?cuisine=1"

class CuisineFilter extends Component{

    render(){
        return(
            <>
                <center>Cuisine Filter</center>
                <div>
                    <label>

                    </label>
                </div>
            </>
        )
    }
}

export default CuisineFilter;  