import React from 'react';
import './QuickSearch.css';

const QuickSearch = (props) => {

  const listMeal = ({quickData}) => {
    if(quickData){
      return quickData.map((item) => {
        return (
          <div className="col-md-5 col-xs-12 col-lg-3 tilecontainer" key={item.mealtype_id}>
                <div><img src={item.meal_image} alt="For Breakfast" className="tile_img"/></div>
                <div className="text mb-2 mt-2">{item.mealtype}</div>
                <div style={{color:'slategray'}}>{item.content}</div>
            </div>
        )
      })
    }
  }

    return(
        <div className="container-flui p-4 ml-4">
          <h2 id="off">Coupon Prize</h2>
          <div className="container-fluid" style={{fontSize:'20px', fontWeight: 'bold'}}>
            <h2 className="ml-4" style={{color:'navy',fontWeight: 'bold'}}>Quick Searches</h2>
            <p className="ml-4" style={{color:'slategray'}}>Discover Restaurent By the Type Of Meal</p>
          </div>
 
          <div className="container-fluid p-2">
            <div className="row">
            {listMeal(props)}
            </div>
          </div>
        </div>
    )
}

export default QuickSearch;