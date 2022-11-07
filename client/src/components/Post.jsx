import React from "react";
import { useEffect } from "react";
import axios from "axios";
import BasicCard from "./BasicCard";

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
  }, [token]);

  const postsList = posts.map((post) => {
    return (
        <div className="p-4">
          <BasicCard post={post} />
        </div>
    );
  });

  return <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 m-auto w-1/3 ">{postsList}</div>;
}

export default Post;
