import React from 'react'
import "./SidebarRow.css"

import { Avatar } from '@material-ui/core'
import {
  
    selectUserPhoto
  } from "./features/user/userSlice";
  import { useSelector} from "react-redux";


function SidebarRow({src,Icon,title}) {

    
    const userPhoto =useSelector(selectUserPhoto);
    return (
        <div className="sidebarRow">
            {src && <Avatar src={userPhoto} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
