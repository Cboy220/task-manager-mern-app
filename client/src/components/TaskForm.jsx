import React from 'react'

const TaskForm = ({ createTask, name, handleInputChange, isEditing, updateTask, }) => {
    return (
        <form className="task-form" onSubmit={createTask}>
            <input
                placeholder="Add a Task"
                name="name"
                type="text"
                value={name}
                onChange={handleInputChange}
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TaskForm