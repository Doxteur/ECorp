import React, { useEffect,useState} from "react";
import { AiFillCamera } from "react-icons/ai";

function FormulaireAdd({ token, addPost }) {
  const [formOpen, setFormOpen] = useState(false);
  const [formOpenText, setFormOpenText] = useState("Ajouter un post");

  useEffect(() => {
    // open form
    const formOpenCheckbox = document.getElementById("formOpenCheckbox");
    if (formOpen) {
      formOpenCheckbox.checked = true;
      setFormOpenText("Fermer");
      // change btn-succes to btn-warning to #formButton
      document.getElementById("formButton").classList.remove("btn-success");
      document.getElementById("formButton").classList.add("btn-warning");
    } else {
      formOpenCheckbox.checked = false;
      setFormOpenText("Ajouter un post");
      // change btn-warning to btn-success to #formButton
      document.getElementById("formButton").classList.remove("btn-warning");
      document.getElementById("formButton").classList.add("btn-success");
    }
  }, [formOpen]);

  const handleFormOpen = (e) => {
    setFormOpen(!formOpen);
  };

  return (
    <div
      className="bg-base fixed top-16 left-1/2 -translate-x-1/2 z-20 w-full border-b-2 border-transparent shadow-lg"
      style={{ backgroundColor: "#181818" }}
    >
      <div tabIndex={0} className="collapse">
        <input type="checkbox"  id="formOpenCheckbox" onChange={(e)=>handleFormOpen(e)}/>
        <div className="collapse-title pr-5 text-xl font-medium">
          <div
            className="btn btn-success btn-sm"
            id="formButton"
           >
            {formOpenText}
          </div>
        </div>
        <div className="collapse-content">
          <div className="p-4 bg-white w-full sm:w-full md:w-96 rounded-lg m-auto">
            <form onSubmit={(e) => addPost(e)} className="form-control">
              <input
                type="file"
                id="addImageInput"
                className="hidden"
                placeholder="Ajouter une image"
                name="image"
              />
              <input
                name="title"
                type="text"
                className="border-b-2 outline-none bg-white text-black w-full"
                placeholder="Mon Titre"
              />
              <div className="flex mt-4">
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

                {/*  button that click on addImageInput */}
              </div>
              <button className="btn btn-success btn-sm mt-2" type="submit" onClick={(e) => handleFormOpen()}>
                Ecrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormulaireAdd;
