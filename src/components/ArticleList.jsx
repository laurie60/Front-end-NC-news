import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import classes from "./ArticleCard.module.css";

export default function ArticleList(props) {
  const [listArticles, setListArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      props.topic
        ? `https://laurences-news.herokuapp.com/api/articles?topic=${props.topic}`
        : "https://laurences-news.herokuapp.com/api/articles"
    )
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setListArticles(body.articles);
        setIsLoading(false);
      });
  }, [props.topic]);
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section className={classes.container}>
      <ArticleCard listArticles={listArticles} />
    </section>
  );
}
