import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import SidebarOption from "./SidebarOption";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
       <div className="player_body">
         <Sidebar />
         <Body />
       </div>

       {/* 2. Footer */}
       <Footer />
    </div>
  )
}

export default Player
