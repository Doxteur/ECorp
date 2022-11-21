import React from "react";

import { TypeAnimation } from "react-type-animation";

function MainPage() {
  return (
    <>
      {/* Landing page evil corp */}

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-blue-600">Welcome</span> to{" "}
            <p className="text-white">
              <TypeAnimation
                sequence={[
                  "",
                  1000,
                  "E",
                  1000,
                  "Evil",
                  () => {
                    document.querySelector(".text-white").style.color =
                      "#ef4444";
                  },
                  "Evil Corp",
                  1000,
                  "E",
                  () => {
                    document.querySelector(".text-white").style.color = "white";
                  },
                  700,
                  "E-Corp Social",
                  (e) => {
                    //find word Social in e and change color
                    e.innerHTML = e.innerHTML.replace(
                      "Social",
                      '<span style="color:#2563EB;">Social</span>'
                    );
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={false}
              />
            </p>
          </h1>

          <div className="flex align-baseline items-baseline">
            <h1 className="mt-3 text-2xl mx-2">Cliquer pour se connecter </h1>
            <a href="/post" className=" hover:animate-pulse">
              <code className="p-3 font-mono text-lg bg-success text-black rounded-md cursor-pointer">
                Poster !
              </code>
            </a>
          </div>
        </main>
      </div>

      {/*  add animation: blink .75s step-end infinite; */}
    </>
  );
}

export default MainPage;
