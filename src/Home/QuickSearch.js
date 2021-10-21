import React from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
    return(
        <div class="container-flui p-4 ml-4">
          <h2 id="off">Coupon Prize</h2>
          <div class="container-fluid" style={{fontSize:'20px', fontWeight: 'bold'}}>
            <h2 class="ml-4" style={{color:'navy',fontWeight: 'bold'}}>Quick Searches</h2>
            <p class="ml-4" style={{color:'slategray'}}>Discover Restaurent By the Type Of Meal</p>
          </div>
 
          <div class="container-fluid p-2">

            <div class="row">
              <div class="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="breakfast.png" alt="For Breakfast" class="tile_img"/></div>
                <div class="text mb-2 mt-2">Breakfast</div>
                <div style={{color:'slategray'}}>Start your day ,<br/>with our<br/> exclusive <br/>breakfast options.</div>
              </div>

              <div class="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="lunch.png" alt="For Lunch" class="tile_img"/></div>
                <div class="text mb-2 mt-2" mb-2>Lunch</div>
                <div style={{color:'slategray'}}>Lunch stay fall<br/>with our never<br/>ending hoarde of<br/>luncheon</div>
              </div>
             
              <div class="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="snacks.png" alt="For Snacks" class="tile_img"/></div>
                <div class="text mb-2 mt-2">Snacks</div>
                <div style={{color:'slategray'}}>Trust yourself<br/>with endless<br/>bursts of tanginess,<br/>sourness<br/>spiceness.</div>
              </div>

              <div class="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="dinner.png" alt="For Dinner" class="tile_img"/></div>
                <div class="text mb-2 mt-2">Dinner</div>
                <div style={{color:'slategray'}}>End your day<br/>with an aromatic<br/>and befining bite.</div>
              </div>
              
              <div class="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="drinks.png" alt="For Drinks" class="tile_img"/></div>
                <div class="text mb-2 mt-2">Drinks</div>
                <div style={{color:'slategray'}}>Wash away all<br/>your stress with<br/>our eloquent<br/>booze.</div>
              </div>
              
              <div class="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="nightlife.png" alt="For Nightful" class="tile_img"/></div>
                <div class="text mb-2 mt-2">Nightlife</div>
                <div style={{color:'slategray'}}>Come celebrate <br/>all kinds of<br/>occassions with<br/>friends and<br/>family.</div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default QuickSearch;