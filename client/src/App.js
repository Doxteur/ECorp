import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);
  

  if(!token) {
    return <LoginForm setToken={setToken} />
  }

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
