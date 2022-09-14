import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Users from "./components/Users";
import TopicsList from "./components/TopicsList";
import classes from "./App.module.css";
import { useState } from "react";
import { UserContext } from "./contexts/Users";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        {" "}
        <div className={classes.App}>
          <Header></Header>
          <div className={classes.topicChoice}></div>
          <TopicsList></TopicsList>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/:topic" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
