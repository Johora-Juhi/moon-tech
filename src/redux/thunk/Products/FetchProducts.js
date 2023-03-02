import { loadProduct } from "../../actionCreators/ProductActions";

const fetchProduct = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json();

    if(data.data.length){
        dispatch(loadProduct(data.data))
    }
  };
};

export default fetchProduct;
