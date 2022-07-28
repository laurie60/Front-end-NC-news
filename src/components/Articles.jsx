import { Link } from "react-router-dom";
import TopicsList from "./TopicsList";
import classes from "./Articles.module.css";
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

export default function Articles() {
  const { topic } = useParams();

  console.log(topic);

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <TopicsList />
      </div>
      <div className={classes.contAtrLst}>
        <ArticleList topic={topic} />
      </div>
    </section>
  );
}
