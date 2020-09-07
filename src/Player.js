import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player({ spotify }) {
  return (
    <div className="player">
       <div className="player_body">
        {/* 1. Sidebar */}
        <Sidebar />
        {/* 2. Body */}
        <Body />
       </div>

       {/* 2. Footer */}
    </div>
  )
}

export default Player
