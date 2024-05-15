import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet-async";

const AllAvailableFoods = () => {
  const allAvailableFoods = useLoaderData();
  return (
    <div>
      <Helmet><title>Food Fare | All Available Food</title></Helmet>
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="my-5 rounded-t-lg  py-10 text-center text-4xl font-semibold "
      >
        Popular Tourist Spot.
        <p className="mt-2 text-lg">
          Explore the most sought-after destinations with breathtaking scenery
          and rich cultural experiences.
        </p>
      </h1>
      <div className="grid grid-cols-6 gap-6">
        {allAvailableFoods.map((foodCard) => {
          return <FoodCard key={foodCard._id} foodCard={foodCard}></FoodCard>;
        })}
      </div>
    </div>
  );
};

export default AllAvailableFoods;
