import React from "react";

function ModalEditPost({ token, post, setPost }) {
  return (
    <div>
      {" "}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div>
            <form action="">
              <div className="mb-4">
                <h1>Modify</h1>
              </div>
            </form>
          </div>
        </label>
      </label>
    </div>
  );
}

export default ModalEditPost;
