import React, { useEffect } from "react";

function ModalEditPost({ token, setPost, modalPost, handleModify }) {

  useEffect(() => {
    if (modalPost) {
      const modal = document.getElementById("my-modal-3");
      modal.checked = true;
    }
  }, [modalPost]);

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div>
            <form onSubmit={(e) => handleModify(e)}>

              <input
                type="hidden"
                name="id"
                defaultValue={modalPost.id}
              />
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-white text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="shadow appearance-none text-primary border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
                  defaultValue={modalPost.title}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="body"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Ma phrase
                </label>
                <input
                  name="body"
                  id="body"
                  className="shadow appearance-none text-primary border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={modalPost.body}
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-primary text-sm font-bold mb-2"
                >
                  Image
                </label>

                <input
                  type="file"
                  name="image"
                  id="image"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  accept="image/jpg, image/jpeg"
                  ></input>
               
              </div>
              <div className="flex items-center justify-between">
                <button className="btn btn-warning" type="submit">
                  Modifier
                </button>
                
              </div>
            </form>
          </div>
        </label>
      </label>
    </div>
  );
}

export default ModalEditPost;
