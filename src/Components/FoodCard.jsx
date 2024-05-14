import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({foodCard}) => {
  const {
    _id,
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserPhotoURL,
    additionalNotes,
  }=foodCard
  console.log(
    _id,
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserPhotoURL,
    additionalNotes,
  );

  return (
    <div
    data-aos="fade-up"
    data-aos-duration="1500"
    className="col-span-6 md:col-span-3 lg:col-span-2 "
  >
    <div className="card flex h-full w-full border border-black bg-base-100 shadow-xl">
      <figure className="max-h-56 flex-grow">
        <img className="h-full w-full object-cover" src={foodImageURL} alt="" />
      </figure>
      <div className="card-body flex-grow-0 p-6">
        <h2 className="card-title text-3xl">
          {foodName}
          <div className="badge badge-outline">
            {foodQuantity} Visitors
          </div>
        </h2>

        <p>
          Best Time Fot visit :
          <span className="text-lg font-bold">{pickupLocation}</span>
        </p>
        <p>
          Average Travel Time :
          <span className="text-lg font-bold">{expireDate}-Days</span>
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline bg-black p-4 text-2xl text-white">
            {additionalNotes} $
          </div>
        </div>

        <Link
          to={`/food/${_id}`}
          className="btn btn-outline mt-3 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
  );
};

FoodCard.propTypes = {
  foodCard: PropTypes.object.isRequired,
};

export default FoodCard;