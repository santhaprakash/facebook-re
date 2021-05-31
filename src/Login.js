import React from 'react'
import {
    selectUserName,
    setUserLoginDetails,
    setSignOutState,
  } from "./features/user/userSlice";
  import { auth,provider } from "./firebase";
  import { useDispatch, useSelector} from "react-redux";
  import "./Login.css"
  function Login() {
    const dispatch =useDispatch();
    const userName =useSelector(selectUserName);
    const signIn = () => {
        if (!userName) {
          auth
            .signInWithPopup(provider)
            .then((result) => {
              setUser(result.user);
              console.log(result);
            })
            .catch((error) => {
              alert(error.message);
            });
        } else if ( userName ) {
          auth
            .signOut()
            .then(() => {
              dispatch(setSignOutState());
            })
            .catch((err) => {
              alert(err.message);
        });
      };
    };
    const setUser =(user)=>{
        dispatch(
            setUserLoginDetails({
        name :user.displayName,
        email :user.email,
        photo :user.photoURL,
             } )
        );
    };
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" alt="fb circle" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="fb text"/>
            </div>
            <span type='submit' onClick={signIn}>Sign In</span>
        </div>
    )
}

export default Login
