import { ADD_TO_CART } from "../actionTypes/actionTypes";

const CartCounter = (store) => (next) => (action) => {
  const state = store.getState();
  const cart = state.product.cart;
  console.log(cart);

  if (action.type === ADD_TO_CART) {
    const newAction = {
      ...action,
      payload: { ...action.payload, cartPosition: cart.length },
    };
    return next(newAction);
  }

  console.log("Action", action);

  return next(action);
};

export default CartCounter;
