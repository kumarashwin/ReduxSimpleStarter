import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

// Youtube API key
const APIkey = 'AIzaSyAqzmttximCsaCYpkZNutdmBkHVKMrPmJE';

// Create a new component that produces some HTML
const App = () => { return (
    <div>
        <SearchBar /> 
    </div> 
)};

// Put component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));