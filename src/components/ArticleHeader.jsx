import classes from "./ArticleHeader.module.css";
import { Fragment } from "react";
import checkTopic from "./Utils/checkTopic";
import { useNavigate } from "react-router-dom";

export default function ArticleHeader(props) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <p className={classes.topicTxt} id={classes[checkTopic(props.topic)]}>
        {props.topic}
      </p>
      <h2
        className={classes.title}
        onClick={() => navigate(`/articles/${props.id}`)}
      >
        {props.title}
      </h2>
      <p className={classes.addByTxt}>{props.author} </p>
    </Fragment>
  );
}
