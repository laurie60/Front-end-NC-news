import SingleArticleCard from "./SingleArticleCard";
import { useParams } from "react-router-dom";
import classes from "./SingleArticle.module.css";
import Comments from "./Comments";
import { getArticle } from "../api";
import useApi from "../useApi";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [isLoading, article] = useApi({
    apiCall: getArticle,
    argument: article_id,
  });

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section className={classes.wrapper}>
      <SingleArticleCard
        body={article.body}
        title={article.title}
        topic={article.topic}
        author={article.author}
        createdAt={article.created_at}
        votes={article.votes}
        commentCount={article.commentCount}
        id={article.article_id}
      />
      <Comments articleId={article.article_id} topic={article.topic} />
    </section>
  );
}
