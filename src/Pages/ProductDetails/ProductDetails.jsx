import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import RatingsReviews from "../../Components/Ratings&Reviews/RatingsReviews";
import SimilarProducts from "../../Components/SimilarProducts/SimilarProducts";
import useCart from "../../hooks/useCart";


const ProductDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [cartData] = useCart()
  console.log(location.state);
  const product = location?.state;

  const handleAddcart = () => {
    const email = user?.email;
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const productCode = product?.description?.productCode;
    const productName = product?.name;
    const productImg = product?.image;
    const price = product?.price;
    const cartdata = { email, productCode, productName, productImg, price };
    const findItems = cartData.find(product => product?.productCode === productCode && email=== user?.email)
    
    console.log(findItems)
    if(findItems){
      toast("Already added in the cart")
      return;
    }
    axiosSecure
      .post("/carts", cartdata)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          toast("Item added successfully");
         
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto bg-base-200 rounded-lg mb-10">
      <h1 className="text-sm text-gray-500 font-medium my-8 pl-4 py-4">
        Home/Products/{product?.name}
      </h1>
      <div className="md:flex justify-around mb-24">
        <div>
          <div className="w-[400px] h-auto md:h-[500px] px-4 md:px-2">
            <Carousel>
              <div className="hover:scale-150 ">
                <img
                  src={product?.image}
                  className="w-full h-full overflow-x-hidden "
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
              <div className="hover:scale-150 ">
                <img
                  src={product?.image}
                  className="w-full h-full overflow-x-hidden hover:scale-150"
                />
              </div>
              <div className="hover:scale-150 ">
                <img
                  src={product?.image}
                  className="w-full h-full overflow-x-hidden hover:scale-150"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className=" p-6 md:px-5 md:py-0 overflow-hidden">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Product Name: {product?.name}
          </h1>
          <p className="text-base my-4 ">Price: Tk {product?.price}</p>
          {/* Accordian */}
          <div>
            <h1 className="text-lg text-gray-500 font-semibold mb-4">
              Product Specification
            </h1>
            <div className="p-2  border-[1px] border-gray-300">
              <h1 className="text-base font-medium">Product Code</h1>
              <p>{product?.description?.productCode}</p>
            </div>

            <div className="p-2  border-[1px] border-gray-300">
              <h1 className="text-base font-medium">Product Color</h1>
              <p>{product?.description?.color}</p>
            </div>
            <div className="p-2  border-[1px] border-gray-300">
              <h1 className="text-base font-medium">Product Material</h1>
              <p>{product?.description?.material}</p>
            </div>
            <div className="p-2  border-[1px] border-gray-300 overflow-scroll">
              <h1 className="text-base font-medium">Product Details</h1>
              <p className="w-[500px] ">{product?.description?.details}</p>
            </div>
          </div>
          <div>
            {user ? (
              <button
                className="btn bg-black text-white w-full my-6 hover:text-black"
                onClick={handleAddcart}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn bg-black text-white w-full my-6 hover:text-black"
                disabled
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className=" w-full md:w-[70%] ">
          <RatingsReviews rating={product?.rating}></RatingsReviews>
        </div>
        <div className="w-full md:flex-1">
          <SimilarProducts category={product?.category} id={product?._id}></SimilarProducts>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
