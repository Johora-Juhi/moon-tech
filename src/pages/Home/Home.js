import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { loadProduct } from "../../redux/actionCreators/ProductActions";
import {
  TOGGLE_BRAND,
  TOGGLE_STOCK,
} from "../../redux/actionTypes/actionTypes";
import fetchProduct from "../../redux/thunk/Products/FetchProducts";

const Home = () => {

  const filters = useSelector((state) => state.filter.filters);
  const products = useSelector((state) => state.product.products);
  console.log(filters);
  const { brand, stock } = filters;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch]);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product}></ProductCard>
    ));
  }

  if (products.length && (stock || brand.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brand.length) {
          return brand.includes(product.brand);
        }
        return product;
      })
      .map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ));
  }
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => {
            dispatch({ type: TOGGLE_STOCK });
          }}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => {
            dispatch({ type: TOGGLE_BRAND, payload: "amd" });
          }}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brand.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => {
            dispatch({ type: TOGGLE_BRAND, payload: "intel" });
          }}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brand.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </div>
  );
};

export default Home;
