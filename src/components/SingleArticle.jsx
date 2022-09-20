import SingleArticleCard from "./SingleArticleCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./SingleArticle.module.css";
import Comments from "./Comments";

export default function SingleArticle() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});

  const { article_id } = useParams();
  useEffect(() => {
    setIsLoading(true);

    fetch(`https://laurences-news.herokuapp.com/api/articles/${article_id}`)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setArticle(body.article);
        setIsLoading(false);
      });
  }, [article_id]);

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
      <Comments
        articleId={article.article_id}
        singleArticleView={true}
        topic={article.topic}
      />
    </section>
  );
}
