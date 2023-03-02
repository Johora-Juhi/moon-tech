import { combineReducers } from "redux";
import FilterReducer from "../FilterReducer/FilterReducer";
import ProductReducer from "../ProductReducer/ProductReducer";

const RootReducer = combineReducers({
  product: ProductReducer,
  filter: FilterReducer,
});

export default RootReducer;
