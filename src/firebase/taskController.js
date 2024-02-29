import { db } from "../firebase"
import { collection, addDoc,getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";

export const addNewtask = async (task) => {
    const docRef = await addDoc(collection(db, "tasks"), {
        title: task.title,
        desc: task.desc,
    });
    console.log("Document written with ID: ", docRef.id);
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    
    const tasks = querySnapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
    })
    return tasks
}

export const updateTask = async (task) => {
    await setDoc(doc(db, 'tasks',task.id),{
        title: task.title,
        desc: task.desc
    })
}

export const deleteTask = async (id) => {
    await deleteDoc(doc(db,"tasks",id))
}