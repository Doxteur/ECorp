import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import LoginForm from "./components/LoginForm";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import EditPost from "./components/EditPost";
import Register from "./components/Register";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  if(!token && window.location.pathname !== "/register") {
    return <LoginForm setToken={setToken} />
  }

  return (
    <div className="App">

       <Routes>
        <Route path="/" element={<Post token={token} posts={posts} setPosts={setPosts}/>} />
        <Route path="/editpost/:id" element={<EditPost token={token} posts={posts} setPosts={setPosts}/>} />
        <Route path="/register" element={<Register token={token} posts={posts} setPosts={setPosts}/>} />
        <Route path="*" element={<Navigate to="/" />} />


      </Routes>
    </div>
  );
}

export default App;
