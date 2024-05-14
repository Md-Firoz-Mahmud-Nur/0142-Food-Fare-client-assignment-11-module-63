import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const viewDetails = useLoaderData();
  console.log(viewDetails);
  // const viewDetail = viewDetails.find((viewDetail) => viewDetail._id == id);
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
    additionalNotes,
  );

  return <div>ami</div>;
};

export default ViewDetails;
