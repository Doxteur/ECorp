import * as React from "react";
import { BsFillGearFill } from "react-icons/bs";
import Likes from "./Likes";

export default function BasicCard({
  post,
  removePost,
  modifyPost,
  token,
  user_id,
  likes
}) {


  const imageLink = "http://127.0.0.1:8000/images/";


  return (
    <div className="card m-auto md:w-96 bg-base-100 shadow-xl">
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
      <figure>
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
              <Likes post={post} token={token} user_id={user_id} postLikes={likes} />
          </div>
        </div>
      </div>
    </div>
  );
}
