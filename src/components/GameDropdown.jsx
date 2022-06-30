import React from 'react'

export const GameDropdown = ({notFoundChars,onCharOptionClicked,dropdownPageCoords}) => {
  const x=dropdownPageCoords[0]
  const y=dropdownPageCoords[1]
  console.log("gamedropdown",notFoundChars)
  return (
    <div style={{display:"flex",flexDirection:"column",width:"150px",position:"absolute",top:y,left:x}}>
      {notFoundChars.map(charName=>{
        return <button key={charName} className="game-dropdown-option" onClick={()=>onCharOptionClicked(charName)}>
          {charName}
        </button>
      })}
    </div>
  )
}
