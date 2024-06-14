import { useEffect, useState } from "react";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
import { FaSearch } from "react-icons/fa";
import Container from "../../Components/Shared/Container/Container";
import Card from "../../Components/Shared/Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [searchData, setSearchData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(searchData);
  const [productsPerPage, setProductPerPage] = useState(21);

  useEffect(() => {
    axiosSecure
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        setOriginalProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);
  console.log(products);

  const handleSearch = () => {
    const desiredData = originalProducts.filter((product) =>
      product.name.toLowerCase().includes(searchData.toLowerCase())
    );

    setProducts(desiredData);
    setCurrentPage(1);
  };
  console.log(productsPerPage);

  const numOfPages = Math.ceil(products.length / productsPerPage);
  let pages = [];
  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = parseInt(startIndex) + parseInt(productsPerPage);
  const paginatedData = products.slice(startIndex, endIndex);

  // console.log(currentPage);
  // console.log(startIndex);
  // console.log(endIndex);
  // console.log(paginatedData);

  return (
    <div>
      <Container>
        <div className="flex justify-between  items-center mx-16 h-[150px] ">
          <div className=" lg:flex justify-between items-center gap-10 ">
            <h1 className="text-2xl font-semibold text-gray-600 mb-4 lg:mb-0">
              Find Products
            </h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search item"
                name="data"
                id=""
                onChange={(e) => setSearchData(e.target.value)}
                className="border-[1px] h-11 w-72 md:w-96 px-4 border-gray-300 rounded-l-3xl rounded-r-none inline-flex"
              />
              <button
                className="border-[1px] border-gray-300 h-11 px-6 rounded-r-3xl"
                onClick={handleSearch}
              >
                <FaSearch size={20} />
              </button>
            </div>
          </div>
          <p className="text-xl font-bold">Total: {products.length}</p>
        </div>
        <div className="">
          <div className="flex justify-between border-b-[1px] mx-8 xl:mx-0 py-2">
            <h1 className="text-xl font-semibold text-gray-600  ">
              Show Products
            </h1>

            <div>
              <span className="text-xl font-semibold text-gray-400">
                Products per page
              </span>
              <select
                className="border-2 inline-flex border-[#30cfbd] ml-4 px-3 py-1"
                onChange={(e) => setProductPerPage(e.target.value)}
              >
                <option value={20}>21</option>
                <option value={15}>15</option>
                <option value={9}>9</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center xl:flex-none xl:block mb-20">
            
              {products.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-14 justify-center mt-6 ">
                  {paginatedData?.map((product) => (
                    <Card key={product._id} product={product}></Card>
                  ))}
                </div>
              ) : (
                <div className="w-full flex justify-center items-center ">
                  <h1 className="text-base font-light my-20">
                    No data matched.
                  </h1>
                </div>
              )}
            
          </div>
          <div className="my-20 w-[40%] mx-auto text-center flex gap-2 xl:text-left xl:w-full xl:mx-0">
            <button
              className="btn btn-sm md:btn-md "
              disabled={currentPage === 1}
              onClick={handlePrevPage}
            >
              Prev
            </button>
            {pages.map((page) => (
              <button
                className={`btn btn-sm md:btn-md  ${
                  currentPage === page && "bg-gray-600 text-white"
                }`}
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {page}
              </button>
            ))}
            <button
              className="btn btn-sm md:btn-md "
              disabled={currentPage === pages.length}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
