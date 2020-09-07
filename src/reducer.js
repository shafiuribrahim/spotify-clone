export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "BQCyNJafk2cPzWaU4YD07JunG", //null in production, token used for debugging purposes
};


const reducer = (state, action) => {
  console.log(action);


  // Action has two things: 1. Type and 2. [payload]

  switch (action.type) {
    case "SET_USER":   // Action
    return {
      ...state,
      user: action.user, // Payload
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
  }
}

export default reducer;
