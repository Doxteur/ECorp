import React, { useState } from "react";

import axios from "axios";

function LoginForm({ setToken }) {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const name = e.target.elements.inputName.value;
    const password = e.target.elements.inputPassword.value;

    const body = {
      name,
      password,
    };

    //Try to login with the provided credentials
    axios.post("http://127.0.0.1:8000/api/login", body).then((res) => {
      if (res.data.api_token) {
        setToken(res.data.api_token);
        localStorage.setItem("token", res.data.api_token);
      } else {
        setError(res.data.message);
      }
    });
  };

  return (
    <div>
      {" "}
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Se Connecter
          </h1>
          <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Nom:
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                id="inputName"
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
                Login
              </button>
            </div>
            <h1 className="font-bold text-red-600 m-2">{error}</h1>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Vous n'avez pas de compte ?{" "}
            <a href="/register" className="font-medium text-purple-600 hover:underline">
              Créer un compte
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
