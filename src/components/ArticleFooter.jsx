import { Fragment } from "react";
import classes from "./ArticleFooter.module.css";
import Comments from "./Comments";
import Votes from "./Votes";

export default function ArticleFooter(props) {
  function strDate(date) {
    const javaDate = new Date(date);
    return javaDate.toDateString();
  }
  return (
    <Fragment>
      <Votes votes={props.votes} id={props.id} />

      <p className={classes.date}>Date Posted: {strDate(props.datePosted)}</p>
      <Comments articleId={props.id} singleArticleView={false} />
    </Fragment>
  );
}
