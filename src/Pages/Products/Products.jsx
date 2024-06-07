import { useEffect, useState } from "react";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
import { FaSearch } from "react-icons/fa";
import Container from "../../Components/Shared/Container/Container";
import Card from "../../Components/Shared/Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [searchData, setSearchData] = useState();
  const [isTrue, setIsTrue] = useState(false)
  console.log(searchData);

  useEffect(() => {
    axiosSecure
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);
  console.log(products);
  const desiredData = products.filter(
    (product) =>
     ( product.name.slice(0, 3)).toLowerCase().startsWith(searchData) ||
      product.name.includes(searchData)
  );
  console.log(desiredData);


  return (
    <div>
      <Container>
        <div className="flex justify-between  items-center mx-16 h-[150px] ">
          <div className=" flex justify-between items-center gap-10 ">
            <h1 className="text-2xl font-semibold text-gray-600">
              Find Products
            </h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search item"
                name="data"
                id=""
                onChange={(e) => setSearchData(e.target.value)}
                className="border-[1px] h-11 w-96 px-4 border-gray-300 rounded-l-3xl inline-flex"
              />
              <button className="border-[1px] border-gray-300 h-11 px-6 rounded-r-3xl" onClick={()=>setIsTrue(true)}>
                <FaSearch size={20} />
              </button>
            </div>
          </div>
          <p className="text-xl font-bold">Total: {products.length}</p>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold text-gray-600 border-b-[1px] py-2 ">
            Show Products
          </h1>
          <div className="grid lg:grid-cols-3 gap-14 justify-center mt-6 mb-20">
            {
              isTrue? <>
              {
                desiredData?.map(product=><Card key={product._id} product={product}></Card>
                  
                )
              }
              </>:<>{products?.map((product) => (
              <Card key={product._id} product={product}></Card>
            ))}</>
            }
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
