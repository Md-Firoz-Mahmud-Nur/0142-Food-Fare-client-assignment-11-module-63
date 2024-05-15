import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myEmailFood, setMyEmailFood] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/foodDonator/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyEmailFood(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/food/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food item has been deleted.",
                icon: "success",
              });
              const remaining = myEmailFood.filter((food) => food._id !== _id);
              setMyEmailFood(remaining);
            }
          });
      }
    });
  };

  return (
    <div className='"border-solid container mx-auto my-10 rounded-xl border border-black '>
      <Helmet>
        <title>My List</title>
      </Helmet>
      <div className="overflow-x-auto    ">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className="border-black text-lg md:text-2xl ">
              <th className="pl-2 pr-0 ">Spot</th>
              <th className="pl-2 pr-0">Country</th>
              <th className="pl-2 pr-0 text-lg">Cost</th>
              <th className="px-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {myEmailFood?.map((singleMyEmailFood) => (
              <tr
                key={singleMyEmailFood._id}
                className="border-base-300 font-medium"
              >
                <td className="pl-2 pr-0 text-lg md:text-xl">
                  {" "}
                  {singleMyEmailFood.foodName}{" "}
                </td>
                <td className=" pl-2 pr-0">{singleMyEmailFood.foodStatus}</td>
                <td className="pl-2 pr-0 text-lg">
                  {singleMyEmailFood.foodQuantity}{" "}
                </td>
                <td className="flex flex-col justify-center gap-3 px-2 md:flex-row">
                  <Link
                    className=" btn btn-outline p-1 text-base md:px-4  md:text-xl"
                    to={`/updateFood/${singleMyEmailFood._id}`}
                  >
                    <button>Update</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(singleMyEmailFood._id)}
                    className="btn btn-outline p-1  text-base md:px-4 md:text-xl "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
