import useProducts from "../../hooks/useProducts";
import {PropTypes} from "prop-types"
import Card from "../Shared/Card/Card";

const SimilarProducts = ({category, id}) => {
    const [products] = useProducts()
    console.log(typeof(id))
    // console.log(products)
    const filterProducts = products.filter(product => product?.category === category && product._id != id ) 
    console.log(filterProducts)
    return (
        <div className="md:my-20 overflow-x-auto md:mx-10 px-4 md:bg-base-100">
            <h1 className="text-xl text-gray-500 py-3 font-medium border-b-2 px-2">You may also like</h1>
            <div className="pb-10 flex md:flex-col gap-8 my-6">
                {
                    filterProducts.length > 0 && filterProducts?.slice(0,6).map(product=><Card key={product?._id} product={product}></Card>)
                }
            </div>
        </div>
    );
};
SimilarProducts.propTypes={
    category: PropTypes.string,
    id: PropTypes.string
}
export default SimilarProducts;