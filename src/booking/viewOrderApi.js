import React, {Component} from 'react';
import ViewOrder from './viewOrder';
import Header from '../Header';
import axios from 'axios';

const url = "https://zomatoajulyapi.herokuapp.com/viewOrder"

class ViewOrderApi extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <Header/>
                <ViewOrder orderData={this.state.orders}/>
                
            </>
        )
    }

    //get orders
    componentDidMount(){
        axios.get(url).then((res) => {
            this.setState({orders:res.data}
                )}
            )
    }
}

export default ViewOrderApi;