import { Fragment } from "react";
import classes from "./ArticleFooter.module.css";

export default function ArticleFooter(props) {
  function strDate(date) {
    const javaDate = new Date(date);
    return javaDate.toDateString();
  }
  return (
    <Fragment>
      <p className={classes.voteCount}>Votes: {props.votes} </p>
      <p className={classes.date}>Date Posted: {strDate(props.datePosted)}</p>
    </Fragment>
  );
}
