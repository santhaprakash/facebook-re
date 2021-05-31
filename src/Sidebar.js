import React from 'react'
import SidebarRow from "./SidebarRow"
import {
    LocalHospital,EmojiFlags,People,Chat,Storefront,VideoLibrary,ExpandMoreOutlined
} from "@material-ui/icons";
import { Avatar } from '@material-ui/core'
import "./Sidebar.css"
import {
    selectUserName,
    
  } from "./features/user/userSlice";
  import { useSelector} from "react-redux";
function Sidebar() {

    const userName =useSelector(selectUserName);
    
    return (
        <div>
            <SidebarRow src={Avatar} title={userName}/>
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title='Friends' />
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='Marketplace' />
            <SidebarRow Icon={VideoLibrary} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    )
}

export default Sidebar
