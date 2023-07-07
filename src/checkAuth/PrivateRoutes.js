

import React from "react";
import Login from "../components/Login";
import useAuth from "./useAuth";
import { Outlet, } from "react-router-dom";







function PrivateRoutes() {
    const user = useAuth()



  return  typeof user === "undefined" ?(

    <div>Loading...</div>) : user ?(
        <Outlet/>
    ) :(
        <Login/>
    )
  
}

export default PrivateRoutes