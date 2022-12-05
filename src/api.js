import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retries: 5 });

const URL = "https://be-news.cyclic.app/api";

export const getUsers = () => {
  console.log("in api call to get users");
  return axios.get(`${URL}/users`).then(({ data }) => {
    console.log(data.users);
    return data.users;
  });
};

export const getComments = (arg) => {
  axiosRetry(axios, {
    retries: 10,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: () => true,
  });

  console.log(arg, "ingetcomments");
  return axios
    .get(`${URL}/articles/${arg}/comments`)
    .then(({ data }) => {
      console.log(data);
      return data.comments;
    })
    .catch(function (error) {
      console.log("in error");
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const getArticles = (arg) => {
  axiosRetry(axios, {
    retries: 10,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: () => true,
  });
  console.log(arg, "arg in getArticles");
  if (arg) {
    return axios
      .get(`${URL}/articles?topic=${arg}`)
      .then(({ data }) => {
        return data.articles;
      })

      .catch(function (error) {
        console.log("in error");
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  return axios.get(`${URL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (arg) => {
  axiosRetry(axios, {
    retries: 10,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: () => true,
  });
  return axios.get(`${URL}/articles/${arg}`).then(({ data }) => {
    return data.article;
  });
};
