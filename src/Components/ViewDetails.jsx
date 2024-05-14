import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewDetails = useLoaderData();
  console.log(viewDetails);
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
  } = viewDetails;
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
    additionalNotes
  );

  return (
    <div className="container mx-auto mt-12 flex-col gap-10 rounded-3xl border-2 border-black p-10 lg:flex lg:flex-row ">
      <Helmet>
        <title>
          Food Fare | {foodName}
        </title>
      </Helmet>
      <div className="rounded-2xl ">
        <img className="rounded-2xl   lg:w-[650px] " src={foodImageURL} alt="" />
      </div>
      <div className="flex-grow">
        <div className="gap-5 md:flex">
          <p className="flex items-center py-2 text-3xl font-semibold md:text-4xl md:font-bold ">
            {_id}
          </p>
          <span className="m-2 flex items-center rounded-full border border-black px-4 py-3  text-3xl font-semibold md:text-4xl md:font-bold ">
            <CiLocationOn /> {pickupLocation}
          </span>
        </div>

        <p className="my-1 text-xl font-bold ">
          Seasonality : <span className="font-medium ">{foodStatus}</span>
        </p>

        <h3 className="text-xl font-bold ">
          Total Visitors Per Year :
          <span className="pl-1 text-xl font-medium ">
            {expireDate}
          </span>
        </h3>
        <h2 className="text-xl font-bold ">
          Travel Time :
          <span className="pl-1  text-xl font-medium ">{foodQuantity}</span>
        </h2>
        <h2 className="text-xl font-bold ">
          location :
          <span className="pl-1  text-xl font-medium ">{}</span>
        </h2>
        <div>
          <h2 className="flex text-xl font-bold ">
            Added By :
            <span className="pl-1  text-xl font-medium   md:flex ">
              {donatorUserPhotoURL}

            </span>
          </h2>
        </div>
        <h2 className="text-xl font-bold">Price: {donatorUserName} $</h2>
        <div className="gap-5   md:my-4 md:flex">
          <h2 className="text-xl font-bold ">
            Short Description :{" "}
            <span className="text-xl font-medium ">{additionalNotes}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
