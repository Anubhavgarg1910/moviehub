import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";
import PlansScreen from "./PlansScreen";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />

              <button
                className="profileScreen__signOut"
                onClick={() =>
                  auth.signOut().then(() => (window.location.href = "/"))
                }
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
