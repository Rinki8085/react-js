import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return(
        <div>
            <Header></Header>
            <h1>Hii from react</h1>
            <h2>Test</h2>
            <Footer></Footer>        
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))