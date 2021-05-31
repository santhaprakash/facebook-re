import React,{useState} from 'react'
import './MessageSender.css'
import { Avatar} from '@material-ui/core'
import {Videocam,PhotoLibrary,InsertEmoticon} from   "@material-ui/icons";
import { useSelector} from "react-redux";
import {
    selectUserName,
    selectUserPhoto
  } from "./features/user/userSlice";
import db from "./firebase"
import firebase from "firebase"

const MessageSender = () => {
    const userName =useSelector(selectUserName);
    const userPhoto =useSelector(selectUserPhoto);
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: userPhoto,
            username: userName,
            image: imageUrl
        })
        
        setImageUrl('')
        setInput('')
    }
    return (
        <div className='messageSender' >
            <div className="messageSender__top">
                <Avatar src={userPhoto} />
                <form >
                <input type="text" className='messageSender__input' placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)} />
                    <input type="text" value={imageUrl} placeholder="imageUrl" onChange={(e) => setImageUrl(e.target.value)}/>
                    <button onClick={handleSubmit} type='submit' >Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender