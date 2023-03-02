import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Main/Dashboard/Dashboard";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Cart from "../../pages/Cart/Cart";
import Home from "../../pages/Home/Home";
import ProductList from "../../pages/ProductList/ProductList";
import TopRated from "../../pages/TopRated/TopRated";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/top-rated',
                element:<TopRated></TopRated>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            }
        ]
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard",
          element: <ProductList />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
      ],
    },
  ]);


export default routes;