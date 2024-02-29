import { useContext } from "react"
import { AppContext } from "../App"

const Home = () => {
    const { user } = useContext(AppContext)

    return (
        <div className='Home'>
            <h1>
                Bienvenido a XD SHOP!!! :)                    
            </h1>
            {
                user &&
            <p>Welcome {user.email}</p>
            }

        </div>
    )
}

export default Home
