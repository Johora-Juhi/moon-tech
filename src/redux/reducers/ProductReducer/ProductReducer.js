import {
  ADD_PRODUCT,
  ADD_TO_CART,
  LOAD_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
} from "../../actionTypes/actionTypes";

const initialstate = {
  cart: [],
  products: []
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
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_LOADED:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
