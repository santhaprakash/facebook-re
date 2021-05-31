
import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Post.css"
import {
    ThumbUp,ChatBubbleOutline,NearMe 
} from "@material-ui/icons";


function Post({message,timestamp,profilePic,username,image}) {
    
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
               <div className="post__top__info">
                   <h4>{username}</h4>
                   <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
               </div>
            </div>
            <div className="post__middle">
                <h2>{message}</h2>
            </div>
            <div className="post__bottom">
                <img src={image} alt=""></img>
            </div>
            <div className="post__options">
            <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
