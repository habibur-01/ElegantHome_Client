import { useEffect, useState } from "react";
import useAxiosSecure from "../api/AxiosSecure/useAxiosSecure";


const useProducts = () => {
    const axiosSecure = useAxiosSecure()
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axiosSecure
      .get(`/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data)
        
      })
      .catch((err) => {
        console.log(err);
      });
    },[axiosSecure])
    return [products];
};

export default useProducts;