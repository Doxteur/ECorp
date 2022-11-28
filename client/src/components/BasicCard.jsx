import * as React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AiFillLike } from "react-icons/ai";
import { CardHeader } from "@mui/material";
import { BsFillGearFill } from "react-icons/bs";

export default function BasicCard({ post, removePost, modifyPost, id }) {
  const imageLink = "http://127.0.0.1:8000/images/";

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
              onClick={(e) => modifyPost(e)}>
              Modifier
            </label>
            <button
              size="small"
              className="btn btn-error btn-sm mb-2"
              onClick={(e) => removePost(post.id, e)}>
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
            style={{ width: 300 }}
          />
        ) : (
          <img
            src="https://via.placeholder.com/250"
            alt="post"
            className="m-auto"
            style={{ width: "250px" }}
          />
        )}
        <div>
          <AiFillLike />
        </div>
      </CardContent>
      <CardActions>
        <div className="m-auto">
          <label
            htmlFor="my-modal-3"
            className="btn btn-warning mt-4 btn-sm"
            id={post.id}
            onClick={(e) => modifyPost(e)}
          >
            Modifier
          </label>
          <button
            size="small"
            className="btn btn-error btn-sm mx-2"
            onClick={(e) => removePost(post.id, e)}
          >
            Supprimer
          </button>
        </div>
      </CardActions>
    </Card>
  );
}
