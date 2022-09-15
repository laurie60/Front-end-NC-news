import axios from "axios";

const URL = "https://laurences-news.herokuapp.com/api";

export const getUsers = () => {
  console.log("in api call to get users");
  return axios.get(`${URL}/users`).then(({ data }) => {
    return data.users;
  });
};
