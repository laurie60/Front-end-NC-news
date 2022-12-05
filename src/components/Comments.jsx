import { getComments } from "../api";
import useApi from "../useApi";
import CommentsList from "./CommentsList";

export default function Comments(props) {
  const [isLoading, listComments] = useApi({
    apiCall: getComments,
    argument: props.articleId,
  });

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <CommentsList listComments={listComments} topic={props.topic} />
  );
}
