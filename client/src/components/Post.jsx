import React from "react";
import { useEffect } from "react";
import axios from "axios";
import BasicCard from "./BasicCard";
import ModalAddPost from "./ModalAddPost";

function Post({ token, posts, setPosts }) {
  
  // On loading Get Posts
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get("http://www.localhost:8000/api/post", { headers: headers })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, setPosts]);

  //remove post
  const removePost = (id) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(`http://www.localhost:8000/api/post/${id}`, {
        headers: headers,
      })
      .then((res) => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Add post
  const addPost = (e) => {
    e.preventDefault();

    const body = {
      title: e.target.title.value,
      body: e.target.content.value,
    };

    axios
      .post("http://localhost:8000/api/post?api_token=" + token, body)
      .then((res) => {
        setPosts([...posts, res.data]);
        //close modal
        document.getElementById("my-modal-4").checked = false;
        //enable button
        // e.target.querySelector("button").disabled = false;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postsList = posts.map((post) => {
    return (
      <div className="p-4" key={post.id}>
        <BasicCard post={post} removePost={removePost} />
      </div>
    );
  });

  return (
    <>
      <label htmlFor="my-modal-4" className="btn btn-success mt-4">
        Ajouter un post
      </label>
      <ModalAddPost token={token} addPost={addPost} />
      <div className="grid grid-cols-1 gap-2 m-auto md:w-1/3 ">{postsList}</div>
    </>
  );
}

export default Post;
