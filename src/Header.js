import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
            <header id="headings">
                <div className="divisions row justify-content-center">
                    <Link to="/"><span>e!</span></Link>
                </div>
                <div class="clearfix">  
            <div class="p-3 float-right">
              <button type="button" class="btn btn-outline-light text-light;">Log In</button>
              <button type="button" class="btn btn-outline-light text-light;">Create an account</button>
            </div>
          </div>
            </header>
    )
}

export default Header;