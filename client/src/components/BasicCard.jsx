import React, { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import Likes from "./Likes";
import axios from "axios";
import { useDoubleTap } from "use-double-tap";
import ConfettiExplosion from "react-confetti-explosion";
import RandomImage from "./RandomImage";
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

  const imageLink = `${process.env.REACT_APP_API_URL}/images/`;

  // log is user owner of post
  const isOwner = parseInt(user_id) === post.user_id;

  if(isOwner){
    // add blue border to owner post
    var ownerStyle = {
      border: "1px solid cyan",
    };
  }


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
      .post(`${process.env.REACT_APP_API_URL}/api/like`, body, {
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
    }, 700);
  });

  return (
    <div className="card m-auto md:w-96 bg-base-100 shadow-xl" style={ownerStyle}> 
      {/*  if is owner */}

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
          <RandomImage />
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
