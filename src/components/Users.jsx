import { useContext } from "react";
import { getUsers } from "../api";
import { UserContext } from "../contexts/Users";
import useApi from "../useApi";
import classes from "./Users.module.css";

export default function Users(props) {
  const { user, setUser } = useContext(UserContext);

  const [isLoading, usersList] = useApi({
    apiCall: getUsers,
  });

  function handleClick(user) {
    setUser(user);
  }

  console.log(isLoading, user);

  return (
    <section className={classes.container}>
      {usersList &&
        usersList.map((user) => {
          return (
            <div
              className={classes.userCard}
              key={user.username}
              onClick={() => handleClick(user)}
            >
              <img
                alt={`${user.username}'s avatar`}
                className={classes.avatar}
                src={user.avatar_url}
              ></img>
              <p className={classes.username}>
                {"   "}
                {user.username}
                {"   "}
              </p>
            </div>
          );
        })}
    </section>
  );
}
