// src/VideoScreen.js
import React from 'react';
//import VideoPlayer from "./components/VideoPlayer";
import VideoPlayer from "./VideoPlayer";

export default function VideoScreen({ route }) {
//const VideoScreen = ({ route }) => {
    return (
    <VideoPlayer source={route.params.source}/>
    );
};

//export default VideoScreen;
