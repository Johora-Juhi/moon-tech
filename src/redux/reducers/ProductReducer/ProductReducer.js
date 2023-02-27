import { ADD_TO_CART, REMOVE_FROM_CART } from "../../actionTypes/actionTypes";

const initialstate = {
  cart: [],
};

const ProductReducer = (state = initialstate, action) => {
  const addedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (addedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );

        addedProduct.quantity = addedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, addedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (addedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );

        addedProduct.quantity = addedProduct.quantity - 1;
        return {
          ...state,
          cart: [...newCart, addedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
