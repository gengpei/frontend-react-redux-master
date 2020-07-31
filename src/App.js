import React from 'react';
import './App.css';
import {Favorite} from "./components/Favorite";
import {PlayList} from "./components/PlayList";
import {Listened} from "./components/Listened";

function App() {
  return (
    <div className="App">
        <div className="Col">
            <Favorite/>
        </div>
        <div className="Col">
            <Listened/>
        </div>
        <div className="Col">
            <PlayList/>
        </div>
    </div>
  );
}

export default App;
