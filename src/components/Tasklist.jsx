import { useContext, useEffect, useState } from "react"
import { addNewtask, deleteTask, getTasks, updateTask } from "../firebase/taskController"
import { AppContext } from "../App"

const Tasklist = () => {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({ title: "", desc: ""})
    const [mode, setMode] = useState('add')

    const {user} = useContext(AppContext)
    
    const createNewTask = async () => {
        await addNewtask(task).catch
        setTask({ title: "", desc: "" })
        recoverTasks()
    }
    
    const recoverTasks = () => {
        getTasks().then(data => setTasks([...data]))
        .catch((e) => console.log(e))
    }
    
        useEffect(() => {
            recoverTasks()
        }, [])
    
    const editTask = (id) => {
        setMode("update")
        const taskToEdit = tasks.find(t => t.id === id)
        setTask({...taskToEdit})
    }

    const updateExistingTask = async () => {
        await updateTask(task)
        setTask({ title: "", desc: "" })
        recoverTasks()
        setMode("add")
    }

    const removeTask = async(id) => {
        await deleteTask(id)
        recoverTasks()
    }
    return (

        <>
            <div className='text-blue-500 text-lg'>
                Tasklist
            </div>
            <div className="flex flex-col gap-4">
                <h2>Introduce una nueva tarea</h2>
                <input
                    type='text'
                    value={task.title}
                    placeholder="Titulo de la tarea"
                    disabled={!user}
                    className="border shadow outline-none 
                focus:ring ring-rose-300 rounded px-2 py-1 mx-2 my-2 w-full "
                    onChange={(e) => setTask({ ...task, title: e.target.value })} />

                <textarea
                    type='text'
                    rows={3}
                    value={task.desc}
                    placeholder="Descripción de la tarea"
                    disabled={!user}
                    className="border shadow outline-none 
                focus:ring ring-rose-300 rounded px-2 py-1 mx-2 my-2 w-full"
                    onChange={(e) => setTask({ ...task, desc: e.target.value })} />

                <button
                    className="bg-blue-500 text-white 
                rounded shadow py-2 hover:bg-green-500 
                hover:text-white transition duration-200 
                text-bold text-lg disabled:bg-gray-300"
                    disabled={!user}
                    onClick={mode==="update" ? updateExistingTask :createNewTask}>
                    {mode==="update" ? <div>Editar</div> : <div>Añadir</div>}
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                    {
                        tasks.map(t => (
                            <div key={t.id} className="rounded-lg border border-blue-500 p-4 flex flex-col gap-2 my-2">
                                <div className="font-bold">
                                    Titulo: {t.title}
                                </div>
                                <div>
                                    Descripción: {t.desc}
                                </div>
                                <button
                                    className="bg-blue-500 text-white 
                rounded shadow py-2 hover:bg-green-500 
                hover:text-white transition duration-200 
                text-semibold text-sm"
                                    onClick={() => editTask((t.id))}>
                                    Editar Tarea
                                </button>
                                <button
                                    className="bg-red-500 text-white 
                rounded shadow py-2 hover:bg-green-500 
                hover:text-white transition duration-200 
                text-semibold text-sm"
                                    onClick={() => window.confirm("¿Seguro que quieres eliminar esta tarea?") && removeTask(t.id)}>
                                    Eliminar Tarea
                                </button>
                            </div>
                        ))
                    }
                </div>
                {user 
                ? <p className="text-bold text-green-400">Usuario logeado: {user.email}</p>
                : <p className="text-bold text-rose-700">Log in to see your notes</p>
                }
            </div>
        </>
    )
}

export default Tasklist