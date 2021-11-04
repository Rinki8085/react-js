import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch = (props) => {

  const listMeal = ({quickData}) => {
    if(quickData){
      return quickData.map((item) => {
        return (
          <Link to={`/list/${item.mealtype_id}`}>
            <div className="col-md-6 col-sm-10 col-lg-10 mr-2 mb-2 tilecontainer" key={item.mealtype_id}>                        
                <div className="image_con">
                    <img src={item.meal_image} alt="Business" style={{width:'150px', height:'150px', borderRadius:'5px;'}}/>
                </div>
                <div>
                    <div className="txt1">{item.mealtype}</div>
                    <div className="txt2">{item.content}</div>
                </div>
            </div>
          </Link>
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
            
            <div className="container mt-4">
              <div className="row">
                {listMeal(props)}
              </div>
            </div>
          </div>
        </div>
    )
}

export default QuickSearch;