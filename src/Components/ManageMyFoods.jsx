import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";

const ManageMyFoods = () => {


  const { user } = useContext(AuthContext);
  console.log(user);

  const [myEmailSpot, setMyEmailSpot] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:3000/food/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMyEmailSpot(data);
      });
  }, [user]);
  console.log(myEmailSpot);

  return (
    <div>
      ami
    </div>
  );
};

export default ManageMyFoods;