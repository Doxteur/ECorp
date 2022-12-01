import React, { useState } from "react";
import axios from "axios";

function Register({ token, setToken }) {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.inputName.value;
    const password = e.target.elements.inputPassword.value;

    const body = {
      name,
      password,
    };

    //Try to login with the provided credentials
    axios.post("http://phplaravel-887910-3078587.cloudwaysapps.com/api/register", body).then((res) => {
      if(res.data.status === "success"){
          setStatus("success");

        }else{
          setStatus(res.data.message)
        }
    }
).catch((err) => {
      console.log(err)
      setStatus(err.response.data.message)
    })
  };

  if (status === "success") {
    //redirect to login
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Compte créé avec succès
          </h1>
          <p className="mt-2 text-sm text-center text-gray-600">
            Vous pouvez maintenant vous connecter
          </p>
          <a href="/">
            <button className="w-full px-4 py-2 mt-6 font-semibold text-white bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Se connecter
            </button>
            </a>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">
              Créer un compte
            </h1>
            <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Nom:
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="inputName"
                  name="name"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Mot de passe :
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="inputPassword"
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Créer un compte
                </button>
              </div>
              <h1 className="font-bold text-red-600 m-2">{status}</h1>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              Vous avez déja un compte ?{" "}
              <a
                href="/login"
                className="font-medium text-purple-600 hover:underline"
              >
                Connecter Vous
              </a>
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default Register;
