import React from "react";
import { useEffect } from "react";
import axios from "axios";
import BasicCard from "./BasicCard";
import ModalAddPost from "./ModalAddPost";
import NavBar from "./NavBar";
import ModalEditPost from "./ModalEditPost";
import FormulaireAdd from "./FormulaireAdd";

function Post({ token, posts, setPosts }) {
  const [modalPost, setModalPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  // On fetch les posts
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get("http://www.localhost:8000/api/post", { headers: headers })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        handleErrors(err);
      });
  }, [token, setPosts]);



  // Affiche le modal avec les infos du post à modifier
  function modifyPost(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:8000/api/post/${e.target.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModalPost(res.data);
      })
      .catch(handleErrors);
  }

  // Apres validation du formulaire de modification
  function handleModify(e) {
    e.preventDefault();

    var formDataModify = new FormData();

    const body = {
      id: e.target.id.value,
      title: e.target.title.value,
      body: e.target.body.value,
      image: e.target.image.files[0],
    };

    formDataModify.append("id", body.id);
    formDataModify.append("title", body.title);
    formDataModify.append("body", body.body);
    if (body.image) {
      formDataModify.append("image", body.image);
    }

    // utilisation de post car laravel ne supporte pas put avec un formData
    axios
      .post(
        `http://localhost:8000/api/post/modify/${body.id}`,
        formDataModify,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setPosts(
          posts.map((post) => (post.id === res.data.id ? res.data : post))
        );
        setModalPost(null);
      })
      .catch(handleErrors);
  }

  //Supprimer un post
  const removePost = (id, e) => {
    //disable button
    e.target.disabled = true;
    //change bc
    e.target.style.color = "black";
    e.target.innerHTML = "Suppression en cours...";

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(`http://www.localhost:8000/api/post/${id}`, {
        headers: headers,
      })
      .then((res) => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  //Ajout d'un post
  const addPost = (e) => {
    e.preventDefault();

    //disable button
    // e.target[3].disabled = true;

    const body = {
      title: e.target.title.value,
      body: e.target.content.value,
      image: e.target.image.files[0],
    };

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    var formData = new FormData();
    formData.append("title", body.title);
    formData.append("body", body.body);
    formData.append("image", body.image);

    // print formdata

    axios
      .post("http://localhost:8000/api/post?api_token=" + token, formData, {
        headers: headers,
      })
      .then((res) => {
        setPosts([res.data, ...posts]);
        //close modal
        document.getElementById("my-modal-4").checked = false;
        e.target[3].disabled = false;
        setError(null);
      })
      .catch((err) => {
        e.target[3].disabled = false;
        // set to red with text Ressayer
        e.target[3].innerHTML = "Ressayer";
        handleErrors(err);
      });
  };

  // Gestions des erreurs
  function handleErrors(err) {
    console.log(err);
    switch (err.response.status) {
      case 401:
        setError("You are not authorized to do this action");
        break;
      case 403:
        setError("You are not authorized to do this action");
        break;
      case 404:
        setError("This post does not exist");
        break;
      case 500:
        setError("Le serveur a rencontré une erreur");
        break;
      default:
        setError("Format supportés jpg,png et taille max 100Mo");
    }
  }

  // Renvoie la liste des posts dans une div
  const postsList = posts.map((post) => {
    return (
      <div className="p-4" key={post.id}>
        <BasicCard
          post={post}
          removePost={removePost}
          modifyPost={modifyPost}
          likes={post.likes}
          user_id={localStorage.getItem("user_id")}
          token={token}
        />
      </div>
    );
  });

  // Affiche une modal avec le post à modifier
  const modalEdit = modalPost ? (
    <ModalEditPost
      token={token}
      modalPost={modalPost}
      setPost={setPosts}
      handleModify={handleModify}
    />
  ) : null;

  return (
    <>
      <NavBar />
      
      <FormulaireAdd token={token} addPost={addPost} />

      {modalEdit}

      <ModalAddPost token={token} addPost={addPost} error={error} />

      <div className="mt-56">
        {postsList}
      </div>
    </>
  );
}

export default Post;
