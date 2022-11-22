import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route,Navigate } from "react-router-dom";

// Components
import LoginForm from "./components/LoginForm";
import Post from "./components/Post";
import Register from "./components/Register";
import ModalEditPost from "./components/ModalEditPost";
import MainPage from "./components/MainPage";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  if (window.location.pathname !== "/register" && window.location.pathname !== "/") {
    if (!token) {
      return (
        <div className="App">
          <LoginForm setToken={setToken} />
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Routes>

      <Route
          path="/"
          element={<MainPage/>}
        />
        <Route
          path="/post"
          element={<Post token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/editpost/:id"
          element={<ModalEditPost token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/register"
          element={<Register token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/infinite"
          element={<InfiniteScroll/>}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
