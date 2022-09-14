import { useState, useEffect } from "react";
import { getUsers } from "../api";
import useApi from "../useApi";
import classes from "./Users.module.css";

export default function Users(props) {
  const [loggedInUser, setLoggedInUser] = useState("");

  const [isLoading, usersList] = useApi({
    apiCall: getUsers,
  });

  function handleClick(user) {
    console.log(user);
  }

  console.log(loggedInUser, "loggedinUser");

  console.log(usersList);

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
