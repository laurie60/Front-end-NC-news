import classes from "./SingleArticleCard.module.css";
import SingleArticleHeader from "./SingleArticleHeader";
import SingleArticleFooter from "./SingleArticleFooter";

export default function SingleArticleCard(props) {
  console.log(props.title);

  return (
    <div className={classes.aroundGrid}>
      <div className={classes.gridContainer} id={classes[props.topic]}>
        <SingleArticleHeader
          title={props.title}
          author={props.author}
          topic={props.topic}
        />

        <div className={classes.postBody}>{props.body}</div>
        <SingleArticleFooter
          createdAt={props.createdAt}
          votes={props.votes}
          commentCount={props.commentCount}
        />
      </div>
    </div>
  );
}
