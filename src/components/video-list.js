import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {    
    return(
        <ul className="col-md-4 list-group">
            {
                props.videos.map(
                    (video) => {
                        return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />
                    }
                )
            }
        </ul>
    );
};

export default VideoList;