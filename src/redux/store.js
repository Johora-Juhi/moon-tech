import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import RootReducer from "./reducers/RootReducer/RootReducer";
import CartCounter from "./middlewares/CartCounter";
import thunk from "redux-thunk";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(CartCounter, thunk)));

export default store;
