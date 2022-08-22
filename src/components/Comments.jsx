import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";

export default function Comments(props) {
  const [listComments, setListComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://laurences-news.herokuapp.com/api/articles/${props.articleId}/comments`
    )
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setListComments(
          body.comments.sort((a, b) => (a.votes > b.votes ? 1 : -1))
        );
        setIsLoading(false);
      });
  }, [props.articleId]);

  console.log(props.singleArticleView, "singleArticle");
  console.log(listComments, "<<<<ListComments");

  //   if (!isLoading) {
  //     return console.log(listComments[0].body);
  //   }

  //   console.log(props.articleId, "props.artId");

  return isLoading ? (
    <p>Loading</p>
  ) : props.singleArticleView ? (
    <CommentsList listComments={listComments} topic={props.topic} />
  ) : (
    <Fragment>
      <p className={classes.commentTitle}>Top Comment:</p>

      <div className={classes.topComment}>
        {console.log("notSingleArticle")}
        <p>{listComments[0].body}</p>
      </div>
    </Fragment>
  );
}
