import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => {
    return(
        <div>
            <Header>
            <h1>Hii From Rinki</h1>
            <h2>Test</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))