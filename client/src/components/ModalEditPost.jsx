import React from "react";

function ModalEditPost({ token, post, setPost, modalPost }) {
  return (
    <div>
      {" "}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div id="modalEditPost">
            
          </div>
        </label>
      </label>
    </div>
  );
}

export default ModalEditPost;
