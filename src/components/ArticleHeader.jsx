import classes from "./ArticleHeader.module.css";
import { Fragment } from "react";
import checkTopic from "./Utils/checkTopic";

export default function ArticleHeader(props) {
  return (
    <Fragment>
      <p className={classes.topicTxt} id={classes[checkTopic(props.topic)]}>
        {props.topic}
      </p>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.addByTxt}>{props.author} </p>
    </Fragment>
  );
}
