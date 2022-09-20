import classes from "./CommentsList.module.css";
import AddComment from "./AddComment";
import { Fragment } from "react";

export default function CommentsList(props) {
  const sortCommentsByVotes = props.listComments.sort(
    (a, b) => b.votes - a.votes
  );

  return (
    <Fragment>
      <AddComment listComments={props.listComments} />

      <section className={classes.allComments} id={classes[props.topic]}>
        {sortCommentsByVotes.map((comment) => {
          return (
            <section className={classes.allComments}>
              <div className={classes.gridContainer} key={comment.comment_id}>
                <div className={classes.commmentHeader}>
                  <p className={classes.commentAuthor}> {comment.author}</p>
                  <></>
                </div>
                <div className={classes.voteCount}>{comment.votes}</div>
                <p className={classes.postBody}>{comment.body}</p>
              </div>
            </section>
          );
        })}
      </section>
    </Fragment>
  );
}
