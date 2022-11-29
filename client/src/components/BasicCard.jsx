import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AiFillLike } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import axios from "axios";

export default function BasicCard({
  post,
  removePost,
  modifyPost,
  likes,
  user_id,
  token,
}) {
  const [isLike, setisLike] = useState(false);
  const [likecount, setLikecount] = useState(0);

  const imageLink = "http://127.0.0.1:8000/images/";

  useEffect(() => {
    if (post.likes.find((like) => like.user_id === parseInt(user_id))) {
      setisLike(true);
    }
    setLikecount(likes.length);
  }, [post]);

  const handleLike = (e) => {
    e.preventDefault();

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const body = {
      post_id: post.id,
    };

    axios
      .post(`http://localhost:8000/api/like`, body, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.likestatus === "unliked") {
          setisLike(false);
          setLikecount(likecount - 1);
        }
        if (res.data.likestatus === "liked") {
          setisLike(true);
          setLikecount(likecount + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likedPost = () => {
    if (isLike) {
      return (
        <div>
          <AiFillLike className="mt-1 scale-125 text-blue-400" />
          <p className="text-blue-400 mx-2">{likecount}</p>
        </div>
      );
    } else {
      return (
        <div>
          <AiFillLike className="mt-1 scale-125 text-gray-400" />
          <p className="text-gray-400 mx-2">{likecount}</p>
        </div>
      );
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="dropdown dropdown-end">
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
        <Typography variant="body2">{post.title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.body}
        </Typography>

        {/* Image */}
        {/* if no image  */}
        {post.image ? (
          <img
            src={imageLink + post.image}
            alt="post"
            className="m-auto"
            style={{ width: "300px" }}
          />
        ) : (
          <img
            src="https://via.placeholder.com/250"
            alt="post"
            className="m-auto"
            style={{ Width: "300px" }}
          />
        )}
        <div></div>
      </CardContent>
      <CardActions>
        <div className="flex mx-2">
          {/*  Like part */}
          <div
            className="flex hover:scale-105 hover:text-blue-400 cursor-pointer mx-2"
            onClick={(e) => handleLike(e)}
          >
            {likedPost()}
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
