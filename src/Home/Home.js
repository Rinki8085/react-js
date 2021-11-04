import React from 'react';
import Search from './Search';
import QuickApi from './QuickApi';

const Home = () => {
    return(
        <div id='container-fluid'>
            <Search/>
            <QuickApi/>
        </div>
    )
}

export default Home;