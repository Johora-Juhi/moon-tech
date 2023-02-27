import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import Cart from "../../pages/Cart/Cart";
import Home from "../../pages/Home/Home";
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
    }
])

export default routes;