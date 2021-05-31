import React from 'react'
import "./Story.css"
import { Avatar } from '@material-ui/core'
function Story({image,profileSrc,title}) {
    return (
        <div className="story" style={{backgroundImage:`url(${image})`}}>
        <Avatar src={profileSrc} className="story__avatar" ></Avatar>
        <h4>{title}</h4>
        </div>
    )
}

export default Story
