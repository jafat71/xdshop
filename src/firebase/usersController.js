/* eslint-disable no-unused-vars */
import {
    getAuth, 
    signInWithEmailAndPassword,
    deleteUser
} from "firebase/auth";
import {app} from "./index"
const auth = getAuth()

export const deleteUserFb = (email,password) => signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            const user = userCredentials.user
            return deleteUser(user).then(()=>console.log(user + " deleted!."))
        })
        .catch((error)=>{
            console.log(error)
        })

