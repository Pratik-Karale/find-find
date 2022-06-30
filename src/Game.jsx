import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addHighscore, getWorld } from './LoginManager'
import { useEffect } from 'react'
import { setChar } from './LoginManager'
import { GameDropdown } from './components/GameDropdown'
import { GameFoundProgress } from './components/GameFoundProgress'
import { TimeCounter } from './components/TimeCounter'
import { getAuth } from 'firebase/auth'
export const Game = () => {
  const [imageURL, setImageURL] = useState("")
  const [allChars, setAllChars] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [dropdownPageCoords, setDropdownPageCoords] = useState({x:-100,y:-100})
  const [foundChars, setFoundChars] = useState({})
  const [notFoundChars, setNotFoundChars] = useState(allChars)
  const [timeCount, setTimeCount] = useState(0)
  const [clickedImageCoords, setClickedImageCoords] = useState([])
  const worldName=useParams().worldName
  const [isGameStarted, setIsGameStarted] = useState(false)
  
  useEffect(()=>{
    getWorld(worldName).then((worldData)=>{
      setImageURL(worldData.imageURL)
      setAllChars(worldData.chars)
      setIsLoaded(true)
    })}
  ,[worldName])
  
  useEffect(() => {
    setNotFoundChars(Object.keys(allChars).filter((char)=>!Object.keys(foundChars).includes(char)))
    console.log(notFoundChars)
  }, [foundChars,allChars])

  // useEffect(()=>{
  //   if(notFoundChars.length!=0 && Object.keys(foundChars).length==3 && isGameStarted)return;
  //   setIsGameStarted(false)
  //   alert(`completed in ${timeCount} ms.`)
  //   addHighscore(worldName,getAuth().currentUser.displayName||prompt("Enter your name:","Guest"),timeCount)
  // },[notFoundChars])

  useEffect(()=>{
    if(!isGameStarted)return;
    setTimeout(()=>{setTimeCount(timeCount+1)},100)
  },[isGameStarted,timeCount])

  function gameOver(){
    // if(Object.keys(foundChars).length==Object.keys(allChars).length){
      setIsGameStarted(false)
      alert(`completed in ${timeCount} ms.`)
      addHighscore(worldName,prompt("Enter your name:","Guest"),timeCount)
    // }
  }

  function onImageClickHandler(e){
    setClickedImageCoords([e.pageX-e.target.offsetLeft,e.pageY-e.target.offsetTop])
    setDropdownPageCoords([e.pageX,e.pageY])
  }
  function charOptionClickedHandler(charName){
    if(Math.hypot(allChars[charName].x-clickedImageCoords[0] , allChars[charName].y-clickedImageCoords[1])<80){
      if(notFoundChars.length==1)gameOver();
      setFoundChars({...foundChars,[charName]:allChars[charName]})
      setDropdownPageCoords({x:-100,y:-100})
    }
  }
  if(isLoaded){
    return (
      <div id="game">
        <div className="top-bar" style={{position:"sticky",top:0,left:0,display:'flex',justifyContent:'space-around',background:'white'}}>
          <GameFoundProgress foundChars={foundChars} allChars={allChars}/>
          <h2>findfind</h2>
          <TimeCounter timeMilliSecs={timeCount}/>
        </div>
        <img src={imageURL} style={{width:"100vw"}} onClick={onImageClickHandler} onLoad={()=>setIsGameStarted(true)}/>
        <GameDropdown notFoundChars={notFoundChars} onCharOptionClicked={charOptionClickedHandler} dropdownPageCoords={dropdownPageCoords}/>
      </div>
    )
  }else{
    return(
      <h1>Loading...</h1>
    )
  }
}
