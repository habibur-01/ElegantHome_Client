import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  console.log(location.state);
  const product = location?.state;

  const handleAddcart = () => {
    const email = user?.email;
    const productCode = product?.description?.productCode;
    const productName = product?.name;
    const productImg = product?.image;
    const cartdata = { email, productCode, productName, productImg };
    axiosSecure.post("/carts", cartdata)
    .then(res => {
        console.log(res.data)
        if(res.data.acknowledged){
            toast("Item added successfully")
        }
    }).catch(err=>{
        console.log(err)
    })
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-sm text-gray-500 font-medium my-8">
        Home/Products/{product?.name}
      </h1>
      <div className="md:flex justify-around">
        <div>
          <div className="w-[400px] h-[500px]">
            <img
              src={product?.image}
              className="w-full h-full object-fill overflow-hidden"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">
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
            <div className="p-2  border-[1px] border-gray-300">
              <h1 className="text-base font-medium">Product Details</h1>
              <p className="w-[500px]">{product?.description?.details}</p>
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
    </div>
  );
};

export default ProductDetails;
