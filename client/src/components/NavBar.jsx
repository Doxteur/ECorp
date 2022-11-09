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
      <a className="btn btn-ghost normal-case text-xl"><AdbIcon/>ECorp</a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
       
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded w-52">
         
          <li onClick={handleLogOut} className="rounded-xl text-white hover:text-purple-400 "><a className="font-bold" >Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
    
  );
}
export default ResponsiveAppBar;
