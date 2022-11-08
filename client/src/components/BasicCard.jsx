import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ post, removePost }) {
  const imageLink = "http://127.0.0.1:8000/images/";

  <img src={imageLink + post.image} alt="post" />;

  return (
    <Card>
      <CardContent>
        <Typography variant="body2">{post.title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.body}
        </Typography>
        {/* Image */}
        <img src={imageLink + post.image} alt="post" className=" m-auto"/>
      </CardContent>
      <CardActions>
          <div className="m-auto">
          <button
            size="small"
            className="btn btn-warning btn-sm mx-2"
            onClick={(e) => alert(e)}
          >
            Modifier
          </button>
          <button
            size="small"
            className="btn btn-error btn-sm mx-2"
            onClick={(e) => removePost(post.id)}
          >
            Supprimer
          </button>
        </div>
      </CardActions>
    </Card>
  );
}
