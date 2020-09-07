import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
  //const [token, setToken] = useState(null);  <- this line was then added to the next line
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {   // Run Code based on a given condition -> //code
    const hash = getTokenFromUrl(); //TEST in CONSOLE: console.log("I have a token -> ", token or hash);
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });


      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        //console.log('Show me the user', user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    // console.log("I have a token ->", token);
  }, []);


// console.log('Show me the user', user);
// console.log('Show me the token', token);


  return (
    //BEM Convention
    <div className="app">
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }
    </div>
  );
}

export default App;
