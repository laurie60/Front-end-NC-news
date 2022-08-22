import classes from "./CommentsList.module.css";

export default function CommentsList(props) {
  console.log("in Comment List");
  console.log(props.listComments);

  return (
    <section className={classes.allComments} id={classes[props.topic]}>
      {props.listComments.map((comment) => {
        return (
          <section className={classes.allComments}>
            <div className={classes.gridContainer} key={comment.comment_id}>
              <div className={classes.addByTxt}>
                <h4>HELLO JHWEC</h4>
                {console.log(comment.author)}
                {comment.author}
              </div>
              <div className={classes.voteCount}>{comment.votes}</div>
              <div className={classes.postBody}>{comment.body}</div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
