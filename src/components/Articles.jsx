import classes from "./Articles.module.css";
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

export default function Articles() {
  const { topic } = useParams();

  return (
    <section className={classes.wrapper}>
      <div className={classes.contAtrLst}>
        <ArticleList topic={topic} />
      </div>
    </section>
  );
}
