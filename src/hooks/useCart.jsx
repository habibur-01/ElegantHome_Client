import { useEffect, useState } from "react";
import useAxiosSecure from "../api/AxiosSecure/useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/carts?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setCartData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure, user?.email]);
  return [cartData];
};

export default useCart;
