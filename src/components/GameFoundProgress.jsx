import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export const GameFoundProgress = ({foundChars,allChars}) => {
  const [bordersStyle, setBordersStyle] = useState([])
  useEffect(()=>{
    setBordersStyle(Object.keys(allChars).map((char)=>Object.keys(foundChars).includes(char)?"green solid 3px":"red solid 3px"))
  },[foundChars])
  return (
    <div className="found-progress" style={{display:"flex",gap:10}}>
      {Object.keys(allChars).map((char,i)=>{
        return(
          <div key={i} className="found-progress-char">
            <img src={allChars[char].icon} style={{border:bordersStyle[i],borderRadius:"50%",width:"80px"}}/>
          </div>
        )
      })}
    </div>
  )
}
