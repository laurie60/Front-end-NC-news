import classes from "./SingleArticleHeader.module.css";
import { Fragment } from "react";

export default function SingleArticleHeader(props) {
  return (
    <Fragment>
      <p className={classes.topicTxt} id={classes[props.topic]}>
        {props.topic}
      </p>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.addByTxt}>{props.author} </p>
    </Fragment>
  );
}
