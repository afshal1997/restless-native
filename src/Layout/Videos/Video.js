import React from 'react'

const Video = ({videoClass, url}) => {
    return (
        <>
            <video
                autoPlay="true"
                loop="true"
                muted="true"
                playsInline="true"
                className={`${videoClass}`}
                src={url}
                type="video/mp4" />
        </>
    )
}

export default Video