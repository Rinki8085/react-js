import React from 'react';
import Search from './Search';
import QuickApi from './QuickApi';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
    return(
        <>
        <Header/>
        <Search/>
        <QuickApi/>   
        <Footer/>
        </>
    )
}

export default Home;