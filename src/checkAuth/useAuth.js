import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";






export  function useAuth(){
    const [userAuth, setUserAuth] = useState("")

  useEffect(()=>{
    const unSubscribed = onAuthStateChanged(auth, ((user)=>{
        setUserAuth(user)

    }))
         return unSubscribed

         



},[auth])
 return userAuth
}


export default useAuth