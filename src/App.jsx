import { useState, createContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { firebaseApp, messaging } from './firebase/index.js'
import Header from './components/Header'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import toast, { Toaster } from 'react-hot-toast'
import { onMessage } from 'firebase/messaging'
import Shopping from './routes/Shopping.jsx'
import Footer from './components/Footer.jsx'
import Tasklist from './components/Tasklist.jsx'
export const AppContext = createContext(null)


onMessage(messaging, payload => {
  toast.custom(t => (
    <div className={`${t.visible ? 'animate-enter' : 'animate-leave'
      } flex flex-col bg-sky-600 rounded ring-2 ring-green-400 p-3`}
    >
      <h1 className='text-lg text-black text-bold'>{payload.notification.title}</h1>
      <p className=' text-sm text-white'>{payload.notification.body}</p>
    </div>))
})

function App() {

  const [route, setRoute] = useState("home")
  const [user, setUser] = useState(null)
  return (
    <AppContext.Provider value={{
      route,
      setRoute,
      user,
      setUser
    }}>
      <Toaster />
      <Header></Header>
      <main className='p-6 pt-20 pb-20'>
        {route === "home" && <Home />}
        {route === "login" && <Login />}
        {route === "register" && <Register />}
        {route === "shopping" && <Shopping />}
        {route === "tasklist" && <Tasklist />}

      </main>
      <Footer/>
    </AppContext.Provider>

  )
}

export default App
