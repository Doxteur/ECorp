import * as React from "react";

import AdbIcon from "@mui/icons-material/Adb";

function ResponsiveAppBar() {

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-primary top-0 z-10 fixed">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl" href="/"><AdbIcon/>E-Corp <span className="text-secondary mx-1">Social</span></a>
    </div>
    <div className="flex-none">
 
      <div className="dropdown dropdown-end">
            <h1 onClick={handleLogOut} className="rounded-xl text-white hover:text-secondary mx-2 cursor-pointer font-bold ">Se déconnecter</h1>
      </div>
    </div>
  </div>
    
  );
}
export default ResponsiveAppBar;
