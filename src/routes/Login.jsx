import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../App";

const provider = new GoogleAuthProvider();

const auth = getAuth();


const Login = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const {setUser, setRoute} = useContext(AppContext)


    const loginGoogle = (e) => {
        e.preventDefault()

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)
                setRoute("home")
                toast("Login exitoso!! 8) ")

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    const loginEmail = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, mail, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                toast("Login exitoso!! 8) ")
                setRoute("home")
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div className='Login min-w-full flex flex-col items-center justify-center'>
            <h1 className='text-xl 
            font-semibold
            text-blue-700 mb-4'>
                Login
            </h1>
            <div className="flex flex-col">
                <form
                    onSubmit={loginEmail}
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
                        Login
                    </button>
                </form>
                <button
                className="py-1 px-2 rounded-full transition duration-200"
                    onClick={loginGoogle}>
                    ... o ingresa con tu cuenta de Google
                </button>
            </div>

        </div>
    )
}

export default Login
