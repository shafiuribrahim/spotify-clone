import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";


function App() {

  // Run Code based on a given condition
  useEffect(() => {
    //code
    const hash = getTokenFromUrl();
    //TESTING in CONSOLE: console.log("I have a token -> ", token or hash);
    window.location.hash = "";

    const token = hash.access_token;
  } []);



  return (
    //BEM Convention
    <div className="app">
      <Login/>
    </div>
  );
}

export default App;
