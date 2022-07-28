import { useState } from "react";
import ShowTopics from "./ShowTopics";
import classes from "./TopicsList.module.css";
import { useParams } from "react-router-dom";

export default function TopicsList({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { topic } = useParams();

  return (
    <section className={classes.container}>
      <div
        className={classes.wrapper}
        onClick={() => {
          setIsOpen((currentOpeness) => !currentOpeness);
        }}
      >
        <div className={classes.iconHome}>
          <h3 className={classes.topicsTitle}>{topic ? topic : "Topics"}</h3>
          <div classname={classes.dropDown}>{isOpen && <ShowTopics />}</div>
          <div />
        </div>
      </div>
    </section>
  );
}
