import axios from "axios";

const URL = "https://laurences-news.herokuapp.com/api";

const addComment = (id, toSend) => {
  return axios
    .post(`${URL}/articles/${id}/comments`, toSend)
    .then(({ body }) => console.log(body));
};
export const getUsers = () => {
  console.log("in api call to get users");
  return axios.get(`${URL}/users`).then(({ data }) => {
    return data.users;
  });
};
