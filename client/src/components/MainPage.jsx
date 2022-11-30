import React from "react";

import { TypeAnimation } from "react-type-animation";

function MainPage() {
  return (
    <>
      {/* Landing page evil corp */}

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-blue-600">Welcome</span> to
            <span className="text-white">
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
                  },700,
                  "E",
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
            </span>
          </h1>

          <div className="flex align-baseline items-baseline">
            <h1 className=" md:mt-3 text-2xl mx-2 hidden md:flex">Cliquer pour se connecter </h1>
            <a href="/post" className=" hover:animate-pulse mt-4 mt:mt-0">
              <code className="p-3 font-mono text-lg bg-success text-black rounded-md cursor-pointer">
                Poster !
              </code>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
