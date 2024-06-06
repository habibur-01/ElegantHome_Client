import { PropTypes } from "prop-types";
import { FaRegStar } from "react-icons/fa";

const Card = ({ product }) => {
  return (
    <div className="card card-compact w-[366px] bg-base-100 shadow-xl hover:cursor-pointer hover:scale-105">
      <figure>
        <img
          src={product.image}
          alt="product image"
          className="w-full h-[400px] object-fill overflow-hidden"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{product.name}</h2>
          <h2 className="card-title"><FaRegStar color="orange" />{product.rating}</h2>
        </div>
        <div className="flex justify-between ">
          <p className="text-base font-semibold text-gray-500">Price </p>
          <p className="text-base font-semibold text-right text-gray-500"> $ {product.price}</p>
         
        </div>
        
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
