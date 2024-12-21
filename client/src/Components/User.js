import { useSelector } from "react-redux";
import userimg from "../Images/user.png";
import Location from "./Location";

const User = () => {
 const { user } = useSelector((state) => state.users);
  return (
    <div>
      <img src={userimg} className="userImage" alt="" />
      <h6>{user?.name}</h6>
      <h6>{user?.email}</h6>
      <Location />
    </div>
  );
};

export default User;
