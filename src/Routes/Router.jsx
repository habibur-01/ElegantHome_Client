import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    }
  ]);

export default router;