import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

const App = () => {
    return(
        <div id='container-fluid'>
            <Search></Search>
            <QuickSearch></QuickSearch>
        </div>
    )
}

export default App;