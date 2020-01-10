import React from 'react'
import video from "../Video/video1.mp4"
import "./Video.css"

function Video() {
    return (
        <div className="banner">
        <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4"/>
        </video>
        <h2 className="contactVideo">Contact</h2>
            
        </div>
    )
}

export default Video
