import React from 'react'
import video from "../assets/british_museum_(540p).mp4"
import front from "../assets/museum_front.jpg"
import frontMobile from "../assets/mobile.jpg"

function VideoPresentation() {
  return (
    <>
        <div className='videoDesktop relative'>
            <video autoplay autoPlay muted playsinline playsInline loop id="myVideo">
                <source src={video} type="video/mp4" />
            </video>
            <div className='presentationText'>
                <p>Welcome to the Shadows and Echoes Museum</p>
            </div>
        </div>
        <div className='imageTablet relative'>
            <img className='frontImage' src={front} alt="Museum cover image" />
            <div className='presentationText'>
            <p>Welcome to the Shadows and Echoes Museum</p>
            </div>
        </div> 
        <div className='imageMobile relative'>
            <img className='frontImage' src={frontMobile} alt="Museum cover image" />
            <div className='presentationText'>
            <p>Welcome to the Shadows and Echoes Museum</p>
            </div>
        </div>

    </>
  )
}

export default VideoPresentation