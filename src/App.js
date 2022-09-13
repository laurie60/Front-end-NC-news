import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          {/* <Route path= "/users" element={<Users/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
