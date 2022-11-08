import React from "react";
import { useEffect } from "react";
import axios from "axios";
import BasicCard from "./BasicCard";
import ModalAddPost from "./ModalAddPost";

function Post({ token, posts, setPosts }) {
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

  const postsList = posts.map((post) => {
    return (
      <div className="p-4" key={post.id}>
        <ModalAddPost token={token}/>
        <BasicCard post={post} />
      </div>
    );
  });

  return (
    <>
      <label htmlFor="my-modal-4" className="btn btn-success mt-4">
        Ajouter un post
      </label>
      <div className="grid grid-cols-1 gap-2 m-auto md:w-1/3 ">
        {postsList}
      </div>
    </>
  );
}

export default Post;
