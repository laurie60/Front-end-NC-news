import classes from "./ShowTopics.module.css";
import { useNavigate } from "react-router-dom";

export default function ShowTopics() {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <div onClick={() => navigate("/coding")} className={classes.selectTopic}>
        Coding
      </div>
      <div
        onClick={() => navigate("/football")}
        className={classes.selectTopic}
      >
        Football
      </div>
      <div onClick={() => navigate("/cooking")} className={classes.selectTopic}>
        Cooking
      </div>
    </div>
  );
}
