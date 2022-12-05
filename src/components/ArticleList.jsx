import { getArticles } from "../api";
import useApi from "../useApi";
import ArticleCard from "./ArticleCard";
import classes from "./ArticleCard.module.css";

export default function ArticleList(props) {
  // AltApi(`articles`, setListArticles, setIsLoading, "articles");

  const [isLoading, listArticles] = useApi({
    apiCall: getArticles,
    argument: props.topic,
  });

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <section className={classes.container}>
      <ArticleCard listArticles={listArticles} />
    </section>
  );
}
