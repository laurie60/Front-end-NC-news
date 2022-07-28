import { Fragment } from "react";
import classes from "./SingleArticleFooter.module.css";

export default function SingleArticleFooter(props) {
  console.log(props.createdAt);
  function strDate(date) {
    const javaDate = new Date(date);
    return javaDate.toDateString();
  }
  return (
    <Fragment>
      <p className={classes.voteCount}>Votes: {props.votes} </p>
      <p className={classes.date}>Date Posted: {strDate(props.createdAt)}</p>
    </Fragment>
  );
}
