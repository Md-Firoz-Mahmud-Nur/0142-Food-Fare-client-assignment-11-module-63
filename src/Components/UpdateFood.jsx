import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
  const updateFoodData = useLoaderData();
  console.log(updateFoodData);

  const {
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserEmail,
    donatorUserPhotoURL,
    additionalNotes,
  } = updateFoodData;

  console.log(
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserEmail,
    donatorUserPhotoURL,
    additionalNotes,
  );

  return <div>ami</div>;
};

export default UpdateFood;
