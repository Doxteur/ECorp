import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ post, removePost, modifyPost }) {
  const imageLink = "http://127.0.0.1:8000/images/";

  return (
    <Card>
      <CardContent>
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
      </CardContent>
      <CardActions>
        <div className="m-auto">
          <label htmlFor="my-modal-3" className="btn btn-warning mt-4 btn-sm">
            Modifier
          </label>
          <button
            size="small"
            className="btn btn-error btn-sm mx-2"
            onClick={(e) => removePost(post.id,e)}
          >
            Supprimer
          </button>
        </div>
      </CardActions>
    </Card>
  );
}
