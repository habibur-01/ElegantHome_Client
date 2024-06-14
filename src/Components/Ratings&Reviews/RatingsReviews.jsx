import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import Container from "../Shared/Container/Container";
import { PropTypes } from "prop-types";
const RatingsReviews = ({ rating }) => {
  return (
    <Container>
      <div className="md:mt-20 mx-10 ">
        <h1 className="text-xl text-gray-500 py-2 border-b-2 px-2">
          Ratings & Reviews
        </h1>
      
      <div className="px-2">
        <p className="text-base font-medium text-gray-500 py-4">
          Over All Ratings: {rating}
        </p>
        <div className="pb-4 border-b-2">
          <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
        </div>
      </div>
      <div className="py-10">
        <div className=" px-2 space-y-2 text-gray-500 border-t-2 border-b-2 p-4">
          <div className="flex justify-between">
            <div className="flex justify-start gap-x-8">
              <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
              <p>Name</p>
            </div>
            <div>
              <p>1 days ago</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            eligendi, quia aut voluptates vero accusantium.
          </p>
        </div>
      </div>
      </div>
    </Container>
  );
};
RatingsReviews.propTypes = {
  rating: PropTypes.any,
};

export default RatingsReviews;
