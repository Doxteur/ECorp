import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import axios from "axios";

function Likes({ post, token, user_id, postLikes }) {
  const [isLike, setisLike] = useState(false);
  const [likecount, setLikecount] = useState(0);

  useEffect(() => {
    if (postLikes) {
      if (postLikes.find((like) => like.user_id === parseInt(user_id))) {
        setisLike(true);
      }
      setLikecount(postLikes.length);
    }
  }, [post, postLikes, user_id]);

  const handleLike = (e) => {
    e.preventDefault();

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const body = {
      post_id: post.id,
    };

    if (isLike) {
      setisLike(false);
      setLikecount(likecount - 1);
    } else {
      setisLike(true);
      setLikecount(likecount + 1);
    }

    axios
      .post(`http://localhost:8000/api/like`, body, {
        headers: headers,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
        if (isLike) {
          setisLike(false);
          setLikecount(likecount - 1);
        } else {
          setisLike(true);
          setLikecount(likecount + 1);
        }
      });
  };

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
