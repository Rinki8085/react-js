import React from 'react';
import './Header.css';

const Header = () => {
    return(
            <div id="headings">
                <div className="divisions">
                    <h1>e!</h1>
                </div>
                <div className="container">
                    <button type="button">Log In</button>
                    <button type="button">Create an account</button>
                </div>
            </div>
    )
}

export default Header;