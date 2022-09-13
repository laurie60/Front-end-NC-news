import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./AddComment.module.css";
import { useParams } from "react-router-dom";

export default function AddComment(props) {
  const [commentBody, setCommentBody] = useState("");
  const username = "grumpy19";
  const { article_id } = useParams();

  const URL = "https://laurences-news.herokuapp.com/api";

  const addComment = (id, toSend) => {
    return axios
      .post(`${URL}/articles/${id}/comments`, toSend)
      .then(({ body }) => console.log(body));
  };

  useEffect(() => {}, [commentBody, props.id]);

  const handleSubmit = (event) => {
    console.log("hello there");
    console.log(article_id, "params");
    event.preventDefault();
    const toSend = { username: username, body: commentBody };
    console.log(toSend);
    addComment(article_id, toSend);
    setCommentBody("");
  };

  return (
    <section className={classes.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Add a new item:
          <input
            value={commentBody}
            onChange={(event) => setCommentBody(event.target.value)}
          />
        </label>
        <button type="submit">Submit Comment</button>
      </form>

      <h4>Add a Comment:</h4>
    </section>
  );
}
