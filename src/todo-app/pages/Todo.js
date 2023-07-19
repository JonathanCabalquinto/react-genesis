
import { useContext } from "react"
import { AppContext } from "../home"
import Task from "../components/Tasks"
const Todo = () => {
    const { todos, handleUpdateTodo } = useContext(AppContext)
    return (
        <div>
            <Task todos={todos} action={handleUpdateTodo} actionName={"Done"} />
        </div>
    )
}

export default Todo