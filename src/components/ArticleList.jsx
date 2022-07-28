import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import classes from "./ArticleCard.module.css";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const [listArticles, setListArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    if (topic)
      fetch("https://laurences-news.herokuapp.com/api/articles")
        .then((res) => {
          return res.json();
        })
        .then((body) => {
          setListArticles(body.articles);
          setIsLoading(false);
        });
  }, []);
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section className={classes.container}>
      <ArticleCard listArticles={listArticles} />
    </section>
  );
}
