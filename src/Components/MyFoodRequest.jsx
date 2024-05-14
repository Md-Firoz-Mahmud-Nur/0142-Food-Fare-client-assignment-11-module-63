import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    fetch(
      `http://localhost:3000/requestedFood/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user]);
  return (
    <div>
      ami
    </div>
  );
};

export default MyFoodRequest;