import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import LoginForm from "./components/LoginForm";
import Post from "./components/Post";
import Register from "./components/Register";
import ModalEditPost from "./components/ModalEditPost";
import MainPage from "./components/MainPage";
import ErrorAlert from "./components/ErrorAlert";
import Logs from "./components/Logs";

function App() {
  const [customError, setCustomError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  if (
    window.location.pathname !== "/register" &&
    window.location.pathname !== "/"
  ) {
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
      <ErrorAlert customError={customError} setCustomError={setCustomError}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/post"
          element={<Post token={token} posts={posts} setPosts={setPosts} customError={customError} setCustomError={setCustomError} />}
        />
        <Route
          path="/editpost/:id"
          element={
            <ModalEditPost token={token} posts={posts} setPosts={setPosts} />
          }
        />
        <Route
          path="/register"
          element={<Register token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/logs"
          element={<Logs token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
