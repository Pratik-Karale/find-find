import React from 'react'
import { LoginBtn } from '../components/LoginBtn'
import { useState } from 'react'
import { WorldNav } from '../components/WorldNav'
import { getWorlds } from '../LoginManager'
import { Outlet } from 'react-router-dom'
const MainMenu = () => {
  const [worldsData, setWorldsData] = useState({"Loading":{imageURL:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}})
  const [currentWorld, setCurrentWorld] = useState(Object.keys(worldsData)[0])

  getWorlds().then(worldsData=>setWorldsData(worldsData))

  return (
    <div>
      <nav>FindFind{<LoginBtn/>}</nav>
      <WorldNav worldsData={worldsData} setCurrentWorld={setCurrentWorld}/>
      <Outlet/>
    </div>
  )
}

export {MainMenu}