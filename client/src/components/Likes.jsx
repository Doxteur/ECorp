import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";

function Likes({ post, token, user_id, postLikes,isLike, setisLike ,likecount, setLikecount,handleLike}) {

  useEffect(() => {
    if (postLikes) {
      if (postLikes.find((like) => like.user_id === parseInt(user_id))) {
        setisLike(true);
      }
      setLikecount(postLikes.length);
    }
  }, [post, postLikes, user_id]);

 

  const likedPost = () => {
    if (isLike) {
      return (
        <>
          <AiFillLike className="mt-1 scale-125 text-blue-400" />
          <p className="text-blue-400 mx-2">{likecount}</p>
        </>
      );
    } else {
      return (
        <>
          <AiFillLike className="mt-1 scale-125 text-gray-400" />
          <p className="text-gray-400 mx-2">{likecount}</p>
          </>
      );
    }
  };
  return (
    <div
      className="flex hover:scale-105 hover:text-blue-400 p-1 px-2 hover:bg-base-200 rounded-lg cursor-pointer mx-2"
      onClick={(e) => handleLike(e)}
    >
      {likedPost()}
    </div>
  );
}

export default Likes;
