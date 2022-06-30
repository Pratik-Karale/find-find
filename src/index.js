import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { setChar } from './LoginManager';
import {loginUser,getAuth,addHighscore,getWorlds,getIsLoggedIn} from "./LoginManager"
import {MainMenu} from "./pages/MainMenu.jsx"
import {App} from "./App.jsx"
import {HighscoreSection} from "./components/HighscoreSection"
import {Game} from "./Game.jsx"
import { WorldNav } from './components/WorldNav';
let Yo=()=>{
  return <h3>OK</h3>;
}
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="" element={<MainMenu/>}>
            <Route path="highscores">
              <Route path=":worldName" element={<HighscoreSection/>}/>
            </Route>
          </Route>
          <Route path=":worldName" element={<Game/>}/>
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);