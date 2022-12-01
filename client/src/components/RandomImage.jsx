import React, { useEffect } from "react";

function RandomImage() {
  const [link, setLink] = React.useState(null);

  const randomImageSize = () => {
    const link = "https://picsum.photos/";
    // min 300 max 600
    const width = Math.floor(Math.random() * (500 - 300 + 1) + 300);
    const height = Math.floor(Math.random() * (300 - 300 + 1) + 300);
    return link + width + "/" + height;
  };

  useEffect(() => {
    setLink(randomImageSize());
  }, []);

  return <img src={link} alt="post" className="m-auto" />;
}

export default RandomImage;
