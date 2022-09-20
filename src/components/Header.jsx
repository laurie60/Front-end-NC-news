import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/Users";
import classes from "./Header.module.css";
const squishedimage = require("../Logo-Squished.jpg");

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className={classes.mainHeader}>
      <div className={classes.container}>
        <h1 className={classes.mainLogo}>
          <Link to="/">
            <img src={squishedimage} alt="NC:news logo" width="200" />
          </Link>
        </h1>
        <div>
          {user ? (
            <div className={classes.headerRight}>
              <img
                alt={`${user.username}'s avatar`}
                title={`${user.username}'s avatar`}
                className={classes.avatar}
                src={user.avatar_url}
              ></img>
              <p>{`logged in as ${user.username}`}</p>
              <Link to="/users">Switch User</Link>
            </div>
          ) : (
            <Link to="/users">Log In!</Link>
          )}
        </div>
      </div>
    </header>
  );
}
