
import { useContext } from "react"
import { AppContext } from "../home"
import Task from "../components/Tasks"

const DoneTodos = () => {
    const { doneTodo, deleteTodo } = useContext(AppContext)
    return (
        <div>
            <Task todos={doneTodo} action={deleteTodo} actionName={"Delete"} />
        </div>
    )
}

export default DoneTodos