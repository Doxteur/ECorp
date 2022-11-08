import axios from "axios";
import React from "react";

function ModalAddPost({ token, setPosts }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const body = {
            title: e.target.title.value,
            body: e.target.content.value,
        };

        axios.post("http://localhost:8000/api/post?api_token="+token, body).then((res) => {
            console.log(res);
        }
        ).catch((err) => {
            console.log(err);
        }
        );
    }

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-white text-sm font-bold mb-2">Title</label>
                    <input type="text" name="title" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline " placeholder="Title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-white text-sm font-bold mb-2">Content</label>
                    <textarea name="content" id="content" cols="30" rows="10" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" placeholder="Content"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button  className="btn btn-success" type="submit">
                        <label htmlFor="my-modal-4" className="hover:cursor-pointer">
                            Ajouter
                            </label>
                    </button >
                </div>
                
            </form>
          </div>
        </label>
      </label>
    </div>
  );
}

export default ModalAddPost;