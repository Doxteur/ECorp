  import React from "react";

function ModalAddPost({ addPost }) {

  const [image, setImage] = React.useState(null);

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div>
            <form action="" onSubmit={(e) => addPost(e)}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline "
                  placeholder="Title"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Ma phrase
                </label>
                <input
                  name="content"
                  id="content"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ma phrase"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Image
                </label>

                <input
                  type="file"
                  name="image"
                  id="image"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/jpg, image/jpeg"
                  required
                  ></input>
                <img src={image ? URL.createObjectURL(image) : ""} alt="" className="w-1/3"/>

               
              </div>
              <div className="flex items-center justify-between">
                <button className="btn btn-success" type="submit">
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </label>
      </label>
    </div>
  );
}

export default ModalAddPost;
