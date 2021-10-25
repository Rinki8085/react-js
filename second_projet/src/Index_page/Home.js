import React from 'react';
import maincontainer from './maincontainer';
import Header from './header';
import footer from './footer';

const App = () => {
    return(
        <div>
            <Header/>
            <maincontainer/>
            <Footer />
        </div>
    )
}

export default App;