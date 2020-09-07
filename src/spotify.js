// Documentation for spotify SDK
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "35863b88bab14ba89be62dd4dcef3010"

const scopes = [
  "user-top-read",
  "playlist-modify-public",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // .split function is allowing the program to split after & sign **READ Documentation**
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
