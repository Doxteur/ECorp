import React, { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import Likes from "./Likes";
import axios from "axios";
import { useDoubleTap } from 'use-double-tap';
import ConfettiExplosion from 'react-confetti-explosion';

export default function BasicCard({
  post,
  removePost,
  modifyPost,
  token,
  user_id,
  likes,
}) {
  const [isLike, setisLike] = useState(false);
  const [likecount, setLikecount] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  const imageLink = "http://127.0.0.1:8000/images/";


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

  // Joué lors du double tap
  const bind = useDoubleTap((event) => {
    handleLike(event);
    setIsExploding(true);

    setTimeout(() => {
      setIsExploding(false);
    }
    , 1000);

  });


  return (
    <div className="card m-auto md:w-96 bg-base-100 shadow-xl">
    {isExploding && <ConfettiExplosion />}

      {/* DropDown */}
      <div className="dropdown dropdown-end absolute right-0">
        <label tabIndex={0} className="btn m-1">
          <BsFillGearFill />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-primary text-white rounded-box w-52"
        >
          <label
            htmlFor="my-modal-3"
            className="btn btn-warning mt-2 mb-2 btn-sm"
            id={post.id}
            onClick={(e) => modifyPost(e)}
          >
            Modifier
          </label>
          <button
            size="small"
            className="btn btn-error btn-sm mb-2"
            onClick={(e) => removePost(post.id, e)}
          >
            Supprimer
          </button>
        </ul>
      </div>

      {/* BackGround Image */}
      <figure {...bind}>

        {post.image ? (
          <img
            src={imageLink + post.image}
            alt="post"
            className="m-auto"
            style={{ width: "300px" }}
          />
        ) : (
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        )}
      </figure>

      {/* Contenu */}
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="text-left">{post.body}</p>
        {/* Image */}
        {/* if no image  */}
        <div></div>{" "}
        <div className="card-actions justify-end">
          <div className="flex mx-2">
            {/*  Like part */}
            <Likes
              post={post}
              token={token}
              user_id={user_id}
              postLikes={likes}
              isLike={isLike}
              likecount={likecount}
              setisLike={setisLike}
              setLikecount={setLikecount}
              handleLike={handleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
