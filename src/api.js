import axios from "axios";

const URL = "https://be-news.cyclic.app/api";

export const getUsers = () => {
  console.log("in api call to get users");
  return axios.get(`${URL}/users`).then(({ data }) => {
    console.log(data.users);
    return data.users;
  });
};

export const getComments = (arg) => {
  console.log(arg, "ingetcomments");
  return axios.get(`${URL}/articles/${arg}/comments`).then(({ data }) => {
    console.log(data);
    return data.comments;
  });
};

export const getArticles = (arg) => {
  console.log(arg, "arg in getArticles");
  if (arg) {
    return axios.get(`${URL}/articles?topic=${arg}`).then(({ data }) => {
      return data.articles;
    });
  }
  return axios.get(`${URL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (arg) => {
  console.log(arg);
  return axios.get(`${URL}/articles/${arg}`).then(({ data }) => {
    console.log(data, "<<<<data");
    return data.article;
  });
};
