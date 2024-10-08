import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet-async";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const AllAvailableFoods = () => {
  const allAvailableFoods = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAllAvailableFoods, setSortAllAvailableFoods] =
    useState(allAvailableFoods);
  const [gridCols, setGridCols] = useState(6);

  const sortAllTouristSpotByCost = () => {
    setLoading(true);
    const sortedFood = [...sortAllAvailableFoods].sort((a, b) => {
      const dateA = new Date(a.expireDate);
      const dateB = new Date(b.expireDate);
      return dateA - dateB;
    });
    setSortAllAvailableFoods(sortedFood);
    setLoading(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const filteredFood = allAvailableFoods.filter((food) =>
      food.foodName.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setSortAllAvailableFoods(filteredFood);
  };

  const handleToggleGridCols = () => {
    setGridCols((prevCols) => (prevCols === 6 ? 4 : 6));
  };

  return (
    <div>
      <Helmet>
        <title>Food Fare | All Available Food</title>
      </Helmet>
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="my-5 rounded-t-lg  py-10 text-center text-4xl font-semibold text-lime-600"
      >
        All Available Food
        <p className="mt-2 text-lg">
          An immense spread encompassing every conceivable culinary delight and
          delicacy imaginable.
        </p>
      </h1>
      {loading && (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      <div className="mb-20 flex items-end justify-center md:justify-around lg:justify-between">
        <div className="w-0 lg:w-[164px]"></div>
        <div className="flex flex-col items-end justify-center md:flex-row ">
          <div className="mb-5 flex  flex-col items-center justify-center md:mb-0">
            <h3 className="mb-2">Type to Search</h3>
            <input
              type="text"
              placeholder="Search by food name..."
              className="input input-bordered mx-0 md:mx-2 w-[250px] md:w-[300px] border-lime-400 "
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="dropdown dropdown-bottom flex w-full justify-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline   border   border-lime-600   bg-transparent  text-lg text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white "
            >
              Sort By
              <RiArrowDropDownLine className="text-4xl " />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow "
            >
              <li>
                <button
                  className="btn btn-outline border-lime-600   bg-transparent pr-0  text-lg text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white"
                  onClick={sortAllTouristSpotByCost}
                >
                  Expire Date
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className=" hidden items-center justify-center md:flex">
          <button
            className="btn btn-outline border-lime-600   bg-transparent   text-lg text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white"
            onClick={handleToggleGridCols}
          >
            Switch Columns
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6">
        {sortAllAvailableFoods.map((foodCard) => {
          return (
            <FoodCard
              key={foodCard._id}
              foodCard={foodCard}
              gridCols={gridCols}
            ></FoodCard>
          );
        })}
      </div>
    </div>
  );
};

export default AllAvailableFoods;
