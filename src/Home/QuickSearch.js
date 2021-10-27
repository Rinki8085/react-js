import React from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
    return(
        <div className="container-flui p-4 ml-4">
          <h2 id="off">Coupon Prize</h2>
          <div className="container-fluid" style={{fontSize:'20px', fontWeight: 'bold'}}>
            <h2 className="ml-4" style={{color:'navy',fontWeight: 'bold'}}>Quick Searches</h2>
            <p className="ml-4" style={{color:'slategray'}}>Discover Restaurent By the Type Of Meal</p>
          </div>
 
          <div className="container-fluid p-2">
            <div className="row">
              <div className="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="https://i.ibb.co/mvgkNms/breakfast.jpg" alt="For Breakfast" className="tile_img"/></div>
                <div className="text mb-2 mt-2">Breakfast</div>
                <div style={{color:'slategray'}}>Start your day ,<br/>with our<br/> exclusive <br/>breakfast options.</div>
              </div>

              <div className="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="https://i.ibb.co/8bLHwCs/lunch.jpg" alt="For Lunch" className="tile_img"/></div>
                <div className="text mb-2 mt-2" mb-2>Lunch</div>
                <div style={{color:'slategray'}}>Lunch stay fall<br/>with our never<br/>ending hoarde of<br/>luncheon</div>
              </div>
             
              <div className="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="https://i.ibb.co/SvsSr7J/snacks.jpg" alt="For snacks"  className="tile_img"/></div>
                <div className="text mb-2 mt-2">Snacks</div>
                <div style={{color:'slategray'}}>Trust yourself<br/>with endless<br/>bursts of tanginess,<br/>sourness<br/>spiceness.</div>
              </div>

              <div className="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="https://i.ibb.co/PYYTS27/dinner.png" alt="For Dinner" className="tile_img"/></div>
                <div className="text mb-2 mt-2">Dinner</div>
                <div style={{color:'slategray'}}>End your day<br/>with an aromatic<br/>and befining bite.</div>
              </div>
              
              <div class="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="https://i.ibb.co/LCkPYq9/drinks.jpg" alt="For Drinks" className="tile_img"/></div>
                <div className="text mb-2 mt-2">Drinks</div>
                <div style={{color:'slategray'}}>Wash away all<br/>your stress with<br/>our eloquent<br/>booze.</div>
              </div>
              
              <div className="col-md-5 col-xs-12 col-lg-3 tilecontainer">
                <div><img src="https://i.ibb.co/vH9SfB1/nightlife.jpg" alt="For Nightlife" className="tile_img"/></div>
                <div className="text mb-2 mt-2">Nightlife</div>
                <div style={{color:'slategray'}}>Come celebrate <br/>all kinds of<br/>occassions with<br/>friends and<br/>family.</div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default QuickSearch;