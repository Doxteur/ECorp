import React from "react";
import { AiFillCamera } from "react-icons/ai";

function FormulaireAdd({ token, addPost }) {
  const [image, setImage] = React.useState(null);

  return (
    <div className="bg-base ">
        
      <div className="p-4 bg-white sm:w-1/2 md:w-1/4 m-auto rounded-lg mt-3">
        <form onSubmit={(e) => addPost(e)}>
          <input name="title" type="text" />
          <input
            type="file"
            id="addImageInput"
            className="hidden"
            placeholder="Ajouter une image"
            name="image"
          />
          <div className="flex">
            <input
              name="content"
              type="text"
              className="border-b-2 outline-none bg-white text-black w-full"
              placeholder="Quelque chose à dire...."
            />

            {/* AJouter une image */}
            <button
              type="button"
              className="btn btn-warning btn-sm mx-2"
              onClick={() => {
                document.getElementById("addImageInput").click();
              }}
            >
              <AiFillCamera className="scale-150" />
            </button>
            <img
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
              className="w-1/3"
            />
            {/*  button that click on addImageInput */}
          </div>
          <button className="btn btn-success btn-sm mt-2" type="submit">
            Ecrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormulaireAdd;
