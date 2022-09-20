import axios from "axios";
import { useState } from "react";
import classes from "./AddComment.module.css";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

export default function AddComment(props) {
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");

  const { article_id } = useParams();

  const URL = "https://laurences-news.herokuapp.com/api";
  const addComment = (id, toSend) => {
    return axios
      .post(`${URL}/articles/${id}/comments`, toSend)
      .then(({ body }) => setError("Success!"))
      .catch(({ response }) => setError(response.data.msg));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const toSend = { username: user.username, body: commentBody };
    addComment(article_id, toSend);
    setCommentBody("");
  };

  console.log(error);

  return (
    <section>
      {user ? (
        <form className={classes.container} onSubmit={handleSubmit}>
          <h4 className={classes.label}> Add a new comment:</h4>

          <textarea
            className={classes.textarea}
            name="add comment"
            rows="4"
            cols="50"
            value={commentBody}
            onChange={(event) => setCommentBody(event.target.value)}
          />
          <button type="submit" className={classes.submitButton}>
            Submit Comment
          </button>
          {error && <p>{error}</p>}
        </form>
      ) : (
        <p>
          Please <Link to="/users">log in</Link> to post a comment
        </p>
      )}
    </section>
  );
}
