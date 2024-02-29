
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../App";
const auth = getAuth();

const Register = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const {setRoute, setUser} = useContext(AppContext)
    const createuser = () => {
        createUserWithEmailAndPassword(auth, mail, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                toast("Usuario " + mail + " registrado correctamente!" )
                setMail("")
                setPassword("") 
                setUser(user)
                setRoute("home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage)
            });

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createuser()
    }

    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-blue-700 font-semibold text-xl text-center">
            ¡Registrate para obtener acceso a XD SHOP!</h1>
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-sm "
            >
                <input
                    className="border border-green-500 rounded py-1 px-2 outline-none"
                    type="email"
                    value={mail}
                    onChange={e => setMail(e.currentTarget.value)}
                    placeholder="yourmail@mail.com"
                ></input>
                <input
                    className="border border-green-500 rounded py-1 px-2 outline-none"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value)}
                    placeholder="Your Password"
                ></input>
                <button 
                className="bg-green-700
                text-white
                hover:bg-green-300 
                hover:text-black py-1 px-2 rounded-full transition duration-200"
                type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Register