import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { QueryClient } from "react-query";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const viewDetails = useLoaderData();
  console.log(user, viewDetails);
  const {
    _id,
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
  } = viewDetails;

  const handleConfirmRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodID = form.foodID.value;
    const foodImageURL = form.foodImageURL.value;
    const pickupLocation = form.pickupLocation.value;
    const foodStatus = form.foodStatus.value;
    const expireDate = form.expireDate.value;
    const donatorUserName = form.donatorUserName.value;
    const donatorUserEmail = form.donatorUserEmail.value;
    const requestedUserEmail = form.requestedUserEmail.value;
    const additionalNotes = form.additionalNotes.value;

    const requestedFood = {
      foodName,
      foodID,
      foodImageURL,
      pickupLocation,
      foodStatus,
      expireDate,
      donatorUserName,
      donatorUserEmail,
      requestedUserEmail,
      additionalNotes,
    };
    console.log(requestedFood);

    try {
      const response = await fetch("http://localhost:3000/requestedFood", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(requestedFood),
      });

      if (!response.ok) {
        throw new Error("Failed to add food");
      }

      const data = await response.json();

      if (data.insertedId) {
        document.getElementById("my_modal_3").close();

        Swal.fire({
          title: "Success!",
          text: " Added Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        form.reset();
        QueryClient.invalidateQueries("foodList");
      }
    } catch (error) {
      console.error("Error requesting food:", error);
    }
  };

  return (
    <div className="container mx-auto mt-12 flex-col gap-10 rounded-3xl border-2 border-black p-10 lg:flex lg:flex-row ">
      <Helmet>
        <title>Food Fare | {foodName}</title>
      </Helmet>
      <div className="rounded-2xl ">
        <img
          className="rounded-2xl   lg:w-[650px] "
          src={foodImageURL}
          alt=""
        />
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
          <span className="pl-1 text-xl font-medium ">{expireDate}</span>
        </h3>
        <h2 className="text-xl font-bold ">
          Travel Time :
          <span className="pl-1  text-xl font-medium ">{foodQuantity}</span>
        </h2>
        <h2 className="text-xl font-bold ">
          location :<span className="pl-1  text-xl font-medium ">{}</span>
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
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Request
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                ✕
              </button>
            </form>
            {/*  */}
            <div className=" container mx-auto mt-10 rounded-2xl ">
              <h2 className="text-center   text-4xl font-bold text-lime-600">
                Add Food
              </h2>

              <form onSubmit={handleConfirmRequest} className="mt-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={foodName}
                        name="foodName"
                        placeholder="Enter Food Name"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text">Food Id</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={_id}
                        name="foodID"
                        placeholder="Enter Food Quantity"
                        required
                        disabled
                      />
                    </label>
                  </div>

                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">Food Image URL</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={foodImageURL}
                        name="foodImageURL"
                        placeholder="Enter Image URL"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">Pickup Location</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        defaultValue={pickupLocation}
                        name="pickupLocation"
                        placeholder="Enter Pickup Location"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">Food Status</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        name="foodStatus"
                        defaultValue="Requested"
                        placeholder="Enter Total Visitors Count"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">Expire Date</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="date"
                        className="input input-bordered w-full"
                        defaultValue={expireDate}
                        name="expireDate"
                        placeholder=""
                        required
                        disabled
                      />
                    </label>
                  </div>

                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">Donor Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        name="donatorUserName"
                        defaultValue={user?.displayName}
                        placeholder="Enter Your Name"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">Donor Email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="email"
                        className="input input-bordered w-full"
                        name="donatorUserEmail"
                        defaultValue={donatorUserEmail}
                        placeholder="Enter Your Email"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">User Email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        name="requestedUserEmail"
                        defaultValue={user?.email}
                        placeholder="Enter Your Photo URL"
                        required
                        disabled
                      />
                    </label>
                  </div>
                  <div className="form-control col-span-2 w-full md:col-span-1">
                    <label className="label">
                      <span className="label-text ">Additional Notes</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        name="additionalNotes"
                        placeholder="Your additional notes"
                        required
                      />
                    </label>
                  </div>
                  <button className="btn btn-outline col-span-2  border-2 border-lime-600 bg-transparent   text-xl  text-lime-600 hover:border-lime-600 hover:bg-lime-600    hover:text-white">
                    Confirm Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ViewDetails;
