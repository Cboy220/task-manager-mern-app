import { useEffect, useState } from "react";
import Task from "./Task"
import TaskForm from "./TaskForm"
import toast from 'react-hot-toast';
import axios from 'axios'
import loadingImg from "../assets/loader.gif";

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [taskID, setTaskID] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        completed: false,
    });
    const { name } = formData;

    const getTasks = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.get('api/tasks')
            console.log(data);
            setTasks(data)
            setIsLoading(false)

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])


    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const createTask = async (e) => {
        e.preventDefault();
        if (name === "") {
            return toast.error("Input field cannot be empty");
        }
        try {
            await axios.post('/api/tasks', formData)
            toast.success("Task added successfully");
            setFormData({ ...formData, name: "" });
        } catch (error) {
            toast.error(error.message);
        }
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`/api/tasks/${id}`)
            getTasks()

        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <h2>Task Manager</h2>
            <TaskForm
                name={name}
                handleInputChange={handleInputChange}
                createTask={createTask}
            />
            <div className="--flex-between --pb">
                <p>
                    <b>Total Tasks:</b> 0
                </p>
                <p>
                    <b>Completed Tasks:</b>0
                </p>
            </div>
            <hr />
            {isLoading && (
                <div className="--flex-center">
                    <img src={loadingImg} alt="Loading" />
                </div>
            )}
            {!isLoading && tasks.length === 0 ? (
                <p className="--py">No task added. Please add a task</p>
            ) : (
                <>
                    {tasks.map((task, index) => {
                        return (
                            <Task
                                key={task._id}
                                task={task}
                                index={index}
                                deleteTask={deleteTask}
                            // getSingleTask={getSingleTask}
                            // setToComplete={setToComplete}
                            />
                        );
                    })}
                </>
            )}
        </div>
    )
}

export default TaskList