import * as React from "react";

import AdbIcon from "@mui/icons-material/Adb";

function ResponsiveAppBar() {

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-primary">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl" href="/"><AdbIcon/>E-Corp <span className="text-secondary mx-1">Social</span></a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
       
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="your_logo"/>
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded w-52">
         
          <li onClick={handleLogOut} className="rounded-xl text-white hover:text-secondary cursor-pointer font-bold ">Se déconnecter</li>
        </ul>
      </div>
    </div>
  </div>
    
  );
}
export default ResponsiveAppBar;
