import {combineReducers} from "redux"

import favoriteReducer from "./favorite/reducer"
import productsReducer from "./products/reducer"
import userReducer from "./user/reducer"

export default combineReducers({
    favorite: favoriteReducer,
    products: productsReducer,
    users:userReducer
})