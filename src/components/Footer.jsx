
import { IoHomeSharp, IoLogIn } from "react-icons/io5"
import { BsCart, BsList } from "react-icons/bs"
import { useContext } from "react";
import { AppContext } from "../App";
const Footer = () => {
    const {setRoute} = useContext(AppContext)
    return (
        <footer className="flex flex-col items-center fixed h-16  bg-blue-500 text-black w-full bottom-0">
                <div className="mt-1">
                    <button id={'home'} onClick={()=>{setRoute
                        setRoute("home")
                    }}>
                        <IoHomeSharp className="text-2xl text-white mr-2 rounded rounded-full hover:bg-yellow-200 hover:text-black transition duration-200" />
                    </button>
                    <button id={'tasklist'} onClick={()=>{
                        setRoute("tasklist")
                    }}>
                        <BsList className="text-2xl text-white mr-2 rounded rounded-full hover:bg-yellow-200 hover:text-black transition duration-200" />
                    </button>
                    <button id={'shopping'} onClick={()=>{
                        setRoute("shopping")
                    }}>
                        <BsCart className="text-2xl text-white mr-2 rounded rounded-full hover:bg-yellow-200 hover:text-black transition duration-200" />
                    </button>
                    <button  id={'login'} onClick={()=>{
                        setRoute("login")
                    }}>
                        <IoLogIn className="text-2xl text-white mr-2 rounded rounded-full hover:bg-yellow-200 hover:text-black transition duration-200" />
                    </button>
                </div>

                <h4 className="text-white ">
                    (C) Todos los derechos reservados - XD SHOP
                </h4>


        </footer>
    );
};

export default Footer;
