import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import YourCart from "../Pages/YourCart/YourCart";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/PaymentSuccess/PaymentFail";
import FindStore from "../Pages/FindStore/FindStore";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoute from "../Components/Shared/PrivateRoute/PrivateRoute";

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
        },
        {
          path: "/products/:id",
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
        },
        {
          path: "/viewcart",
          element: <YourCart></YourCart>
        },
        {
          path: "/payments/success/:transid",
          element: <PaymentSuccess></PaymentSuccess>
        },
        {
          path: "/payments/fail/:transid",
          element: <PaymentFail></PaymentFail>
        },
        {
          path: "/findstore",
          element: <FindStore></FindStore>
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>
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
    },
   
  ]);

export default router;