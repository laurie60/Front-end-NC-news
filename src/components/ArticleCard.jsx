import classes from "./ArticleCard.module.css";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
import checkTopic from "./Utils/checkTopic";

export default function ArticleCard(props) {
  return (
    <div className={classes.container}>
      {props.listArticles.map((article) => {
        return (
          <div className={classes.aroundGrid}>
            <div
              className={classes.gridContainer}
              id={classes[checkTopic(article.topic)]}
              key={article.article_id}
            >
              <ArticleHeader
                title={article.title}
                author={article.author}
                topic={article.topic}
                id={article.article_id}
              />

              <div className={classes.postBody}>{article.body}</div>
              <ArticleFooter
                datePosted={article.created_at}
                votes={article.votes}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
