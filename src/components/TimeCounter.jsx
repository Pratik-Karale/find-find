import React from 'react'

export const TimeCounter = ({timeMilliSecs}) => {
  // const getFormattedTime=(milliSecs)=>{
  //   const dateObj=new Date(milliSecs * 100)
  //   return `${dateObj.toISOString().slice(14, 19)}:${dateObj.getMilliseconds()}`
  // }
  return (
    <h2>{timeMilliSecs}</h2>
  )
}
