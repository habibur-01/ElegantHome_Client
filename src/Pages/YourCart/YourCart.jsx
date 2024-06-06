import { useEffect, useState } from "react";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Container from "../../Components/Shared/Container/Container";
import toast from "react-hot-toast";

const YourCart = () => {
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
  }, [axiosSecure, setCartData, user?.email]);
  const total = cartData.reduce((initial, price) => initial + (parseInt(price.price)), 0 )
  const finalTotal = total + 120
  console.log(total)

  const handleItemDelete = (id) => {
    console.log(id);
    axiosSecure
      .delete(`/carts/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data?.deletedCount > 0) {
          toast("Item deleted");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <div className="flex justify-between gap-8">
        <div className="w-[60%]">
          <div className="flex justify-between my-6 px-6 bg-[#f5f4f4] py-4 rounded-lg">
            <h1 className="text-base text-gray-500 font-medium  ">
              Find Your Cart Items
            </h1>
            <p className="text-base text-gray-500 font-medium ">
              Items Number: {cartData.length}
            </p>
          </div>
          <div>
            {cartData.length > 0 ? (
              <>
                <div className="sm:overflow-x-auto lg:overflow-hidden bg-[#f5f4f4] rounded-lg">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {cartData.map((cart) => (
                        
                          <tr key={cart._id}>
                            <th>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </th>
                            <td>
                              <div className="flex items-center gap-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-20 h-20">
                                    <img
                                      src={cart?.productImg}
                                      alt="Product image"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {cart?.productName}
                                  </div>
                                  <div className="text-sm opacity-50">
                                    {cart?.productCode}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{cart?.price}</td>

                            <td>
                              <button
                                className="btn bg-yellow-400 btn-xs"
                                onClick={() => handleItemDelete(cart?._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        
                      ))}
                    </tbody>
                    {/* foot */}
                    <tfoot></tfoot>
                  </table>
                </div>
                {/* {
                    cartData.map(cart=> )
                } */}
              </>
            ) : (
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-xl font-medium text-gray-400">
                  There is no data availble
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="w-[40%] my-6 bg-[#f5f4f4] py-6 px-10 rounded-lg">
            <h1 className="text-xl font-semibold mb-4 mt-3">Order Summary</h1>
            <div className="flex justify-between p-2">
                <p>{`Subtotal ( ${cartData.length} Items)`}</p>
                <p>Tk {total}</p>
            </div>
            <div className="flex justify-between p-2">
                <p>Shippinf Fee</p>
                <p> Tk 120</p>
            </div>
            <div className="flex justify-between p-2">
                <p className="font-medium">Total</p>
                <p> {finalTotal}</p>
            </div>
            <div className="mt-8">
                <button className="btn w-full bg-primary text-base text-white hover:bg-transparent hover:text-black">Proceed to checkout</button>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default YourCart;
