import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    status: false,
    gameid:null,
    login : false,
}


const gameData = createSlice({
    name : "data",
    initialState,
    reducers: {
  gameId : (state,action) => {
    state.status  = true;
    state.gameid = action.payload.gameid;
  },
  loginStatus : (state,action)=>{

    state.status = action.payload.status
  }
    }
})

export const {gameId,loginStatus} = gameData.actions;

export default gameData.reducer;