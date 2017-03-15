import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


// Youtube API key
const APIkey = 'AIzaSyAqzmttximCsaCYpkZNutdmBkHVKMrPmJE';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null  
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YouTubeSearch(
            { key: APIkey, term: term },
            (videos) => this.setState({
                videos: videos, 
                selectedVideo: videos[0]
            })
        );
    }

    render() {
        return(
            <div>
                <SearchBar onSearchTermChange={_.debounce(term => {this.videoSearch(term)}, 300)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }/>
            </div> 
        );
    }
}

// Put component in DOM
ReactDOM.render(<App />, document.querySelector('.container'));