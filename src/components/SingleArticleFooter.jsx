import { Fragment } from "react";
import classes from "./SingleArticleFooter.module.css";
import Votes from "./Votes";
import Comments from "./Comments";

export default function SingleArticleFooter(props) {
  console.log(props.createdAt);
  function strDate(date) {
    const javaDate = new Date(date);
    return javaDate.toDateString();
  }
  return (
    <Fragment>
      <Votes votes={props.votes} id={props.id} />
      <p className={classes.date}>Date Posted: {strDate(props.createdAt)}</p>
      {/* <Comments articleId={props.id} singleArticleView={true} /> */}
    </Fragment>
  );
}
