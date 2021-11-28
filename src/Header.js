import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  const changeMode = () => {
      var mybody = document.body;
      // if body have class mybody it will remove the class else add
      mybody.classList.toggle('myDark');
  }

    return(
            <header id="headings">
              
                <div className="divisions row justify-content-center">
                    <Link to="/"><span>e!</span></Link>
                </div>
                <div className="clearfix">  
                  <div className="p-3 float-right">
                    <Link to="/register">
                      <button type="button" className="btn btn-outline-light text-light;">signUp</button>
                    </Link>
                    <Link to="/login">
                      <button type="button" className="btn btn-outline-light text-light;">LogIn</button>
                    </Link> 
                  </div>
                  <button onClick={changeMode}>Dark Mode</button>
               </div>
               
            </header>
    )
}

export default Header;