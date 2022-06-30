import React from 'react'
import { getWorld } from '../LoginManager'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
export const HighscoreSection = () => {
    const [highscores, setHighscores] = useState([])
    getWorld(useParams().worldName).then((worldData)=>setHighscores(worldData.highscores))
  return (
    <div>
        <h3>Highscores</h3>
        <ul className="highscores-list">
            {highscores.sort().map((highscore,i)=>{
                const playerName=Object.keys(highscore)[0]
                const playerScore=highscore[playerName]
                return <li key={i}>{playerName+"----"+playerScore}</li>
            })}
        </ul>
    </div>
  )
}
