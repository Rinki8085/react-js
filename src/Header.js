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
                    <button type="button" className="btn btn-outline-light text-light;">Log In</button>
                    <button type="button" className="btn btn-outline-light text-light;">Create an account</button>
                  </div>
                  <button onClick={changeMode}>Dark Mode</button>
               </div>
               
            </header>
    )
}

/*
const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

 function changeMode(){
      var mybody = document.body;
      // if body have class mybody it will remove the class else add
      mybody.classList.toggle('myDark');
  }
*/

export default Header;