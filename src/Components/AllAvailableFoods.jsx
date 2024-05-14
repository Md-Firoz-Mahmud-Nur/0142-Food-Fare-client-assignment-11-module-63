import { useLoaderData } from "react-router-dom";

const AllAvailableFoods = () => {
  const allAvailableFoods= useLoaderData()
  console.log(allAvailableFoods);
  return (
    <div>
      all
    </div>
  );
};

export default AllAvailableFoods;