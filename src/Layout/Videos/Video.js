import React from 'react'

const Video = ({videoClass, url}) => {
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={`${videoClass}`}
                src={url}
                type="video/mp4" />
        </>
    )
}

export default Video