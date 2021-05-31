import React from 'react'
import "./Header.css"
import {
    selectUserName,
    selectUserPhoto
  } from "./features/user/userSlice";
            import {
                Search,Home,Flag,SubscriptionsOutlined,StorefrontOutlined,SupervisedUserCircle,Add,Forum,NotificationsActive,ExpandMore,
  } from "@material-ui/icons";
  import { useSelector} from "react-redux";
  import { Avatar, IconButton } from '@material-ui/core'
function Header() {
    const userName =useSelector(selectUserName);
    const userPhoto =useSelector(selectUserPhoto);
    return (
        <div className="header">
        <div className="header__left">
            <img src="https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg" alt=""></img>
              <div className="header__search">
              <Search />
              <input type="text" />
              </div>
        </div>
        <div className="header__center">
                <div className="header__option header__option--active">
                    <Home fontsize='large' />
                </div>
                <div className="header__option">
                    <Flag fontsize='large' />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontsize='large' />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontsize='large' />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontsize='large' />
                </div>
        </div>
        <div className="header__right">
        <div className="header__info">
                    <Avatar className="avatar_icon" src={userPhoto} />
                    <h4>{userName}</h4>
                </div>

                <IconButton>
                    <Add />
                </IconButton>

                <IconButton>
                    <Forum />
                </IconButton>

                <IconButton>
                    <NotificationsActive />
                </IconButton>

                <IconButton>
                    <ExpandMore />
                </IconButton>

        </div>
        </div>
    )
}

export default Header
