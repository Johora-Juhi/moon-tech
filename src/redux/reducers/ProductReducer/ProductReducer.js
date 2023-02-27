import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actionTypes/actionTypes";

const initialstate = {
  cart: [],
};

const ProductReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export default ProductReducer;
