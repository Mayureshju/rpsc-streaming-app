import VideoPlayerProps from "../Types/VideoPlayerProps"
import React, { useEffect, useRef } from "react"
import FlvJs from 'flv.js'
const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (FlvJs.isSupported()) {
            let flvPlayer = FlvJs.createPlayer({
                type: 'flv',
                url: src
            });
            flvPlayer.attachMediaElement(videoRef.current!);
            flvPlayer.load();
            flvPlayer.play();
        }
    }, [src])
    return (
        <>
            <video ref={videoRef} controls style={{width:'300px', height:'300px', }} />
        </>
    )
}

export default VideoPlayer