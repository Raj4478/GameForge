import {configureStore} from  "@reduxjs/toolkit"
import gameData from "./detailProvider.js"


const store = configureStore({
    reducer:{
        data:gameData,
    }
})

export default store