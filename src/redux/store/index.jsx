import { combineReducers, createStore } from "redux";
import { favListReducer } from "../reducers/favList.reducer";
import { cartListReducer } from "../reducers/cartList.reducer";
const reducers = combineReducers({
  favList: favListReducer,
  cartList: cartListReducer,
});

export const globalState = createStore(reducers);
