import { useContext } from "react";
import { GiImpLaugh } from "react-icons/gi";
import { AppContext } from "../App";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
const auth = getAuth();

function Header() {
    const { user, setRoute, setUser } = useContext(AppContext)

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
            setRoute("home")
            toast("Usuario deslogeado!")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    return (
        <header className='h-20 w-full bg-blue-500 shadow-lg flex items-center justify-between px-2 fixed top-0'>
            <div className='flex items-center gap-2 cursor-pointer'
                onClick={() => setRoute('home')}>
                <GiImpLaugh className='text-2xl text-green-300 ring-4 ring-yellow-300 hover:scale-125 transition duration-200'></GiImpLaugh>
                <p className='text-xl font-semibold text-white'>XD SHOP</p>
            </div>
            <div className="flex gap-1">
                <button
                    onClick={
                        () => { setRoute('login') }
                    }
                    className='text-sm md:text-xl bg-yellow-400 text-black hover:bg-green-300 py-1 px-2 rounded-full transition duration-200'>
                    Login
                </button>
                {user
                    ?
                    <button
                        onClick={
                            () => { logout() }
                        }
                        className='text-sm md:text-xl bg-green-800 text-white hover:bg-green-300 hover:text-black py-1 px-2 rounded-full transition duration-200'>
                        Log out
                    </button>
                    :
                    <button
                        onClick={
                            () => { setRoute('register') }
                        }
                        className='text-sm md:text-xl bg-green-800 text-white hover:bg-green-300 hover:text-black py-1 px-2 rounded-full transition duration-200'>
                        Sign up
                    </button>
                }
            </div>

        </header>
    )
}

export default Header
