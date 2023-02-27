import {createStore} from "redux"
import ProductReducer from "./reducers/ProductReducer/ProductReducer"

const store = createStore(ProductReducer);

export default store;