import React from 'react'
import { Link } from 'react-router-dom'
export const WorldNav = ({worldsData,setCurrentWorld}) => {
  return (
    <div className="world-nav">
        {Object.keys(worldsData).map(worldName=>{
            return (
              <div className="menu-world-option">
                <h3>{worldName}</h3>
                <img src={worldsData[worldName].imageURL}/>
                <Link className="world-nav-btn" to={"/highscores/"+worldName}>Highscores</Link>{"\n"}
                <Link to={"/"+worldName}>Play</Link>
              </div>
            )
        })}
    </div>
  )
}
