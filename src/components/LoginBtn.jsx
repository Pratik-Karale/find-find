import React from 'react'
import { loginUser } from '../LoginManager'
import { getIsLoggedIn } from '../LoginManager'
import { useState } from 'react'


export const LoginBtn = ({onClick}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  setTimeout(()=>{setIsLoggedIn(getIsLoggedIn())},2000)
  if(isLoggedIn){
    return <span>Logged In</span>
  }else{
    return (
      <button className="login-btn" onClick={()=>{
        onClick && onClick()
        loginUser()
      }}>Log In</button>
      )
  }
}
