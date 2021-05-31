import React from 'react'
import Story from "./Story"
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://imagevars.gulfnews.com/2019/03/17/190317__Suresh_Raina_22_resources1_16a30b3701a_large.jpg" 
            profileSrc="https://static.iplt20.com/players/210/14.png"
            title="santha"
            />
            <Story image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/18/925900-815583-ms-dhoni-pti.jpg" 
            profileSrc="https://wallpapercave.com/wp/wp7191263.jpg"
            title="Dhoni"
            />
            <Story image="https://images.indianexpress.com/2021/04/JadejavsRCB.jpg"
            profileSrc="https://i.pinimg.com/originals/68/56/b4/6856b407341c57e50271665d95104a9a.jpg"
            title="Jadeja"/>
           <Story image="https://www.crictracker.com/wp-content/uploads/2019/04/Rishabh-Pant-1.jpg"
            profileSrc="https://static.toiimg.com/thumb/msid-71211816,imgsize-235604,width-400,resizemode-4/71211816.jpg"
            title="pant"/>
             <Story image="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/12/18/Pictures/ipl-7-in-bengaluru_5263ed64-0292-11e9-b709-b8f5f1e83cec.jpg"
            profileSrc="https://resources.platform.bcci.tv/bcci/photo/2018/11/24/d0f93d9c-dff5-4dc0-9f6d-dc29fe17d126/PqdVcOqO.jpg"
            title="Yuvi"/>
        </div>
    )
}

export default StoryReel
