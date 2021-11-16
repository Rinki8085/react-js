import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Listing from './listing/listingApi';
import Home from './Home/Home';
import RestDetails from './details/restDetails';
import PlaceOrder from './booking/placeOrder';
import ViewOrderApi from './booking/viewOrderApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:mealId" component={Listing}/>
            <Route path="/details/:restId" component={RestDetails}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewOrderApi" component={ViewOrderApi}/>
        </BrowserRouter>
    )
}

export default Routing