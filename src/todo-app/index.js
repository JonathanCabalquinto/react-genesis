import { useState } from "react"
import "../assets/Todo.css"
const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [doneTodos, setDone] = useState([])
    const [todoInputValue, setTodoInputValue] = useState("")
    const [showTodo, setShowTodo] = useState(false)



    const addTodo = () => {
        todoInputValue.length > 0 && setTodos((prevTodos) => [...prevTodos, { 'name': todoInputValue, 'is_done': false }])
        setTodoInputValue('');
        setShowTodo(false)
    }

    const handleTodoInputOnChange = (event) => {
        setTodoInputValue(event.target.value)
    }

    const updateTodoStatus = (todoName) => {
        let updatedTodo = todos.map((todo) => {
            if (todo.name === todoName) {
                setDone((prevTodos) => [...prevTodos, { ...todo, is_done: true }])
            }
            return todo
        }).filter(todo => todo.name !== todoName)


        setTodos(updatedTodo)
    }

    const deleteTodo = (todoName) => {
        setDone(doneTodos.filter(todo => todo.name !== todoName))
    }

    return (
        <div className="container">
            <div className="todoList">
                <input onChange={handleTodoInputOnChange} value={todoInputValue} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div style={{
                color: "blue",
                textDecoration: "underline",
                marginTop: "10px    "
            }} >
                <span className="nav_link" onClick={() => setShowTodo(false)}>Todo</span>
                <span className="nav_link" onClick={() => setShowTodo(true)}>Done</span>
            </div>
            {
                showTodo === false ?
                    <ul>
                        <Task todos={todos} action={updateTodoStatus} actionName="Done" />
                    </ul> :
                    <ul>
                        <Task todos={doneTodos} action={deleteTodo} actionName="Delete" />
                    </ul>
            }
        </div >

    )

}


const Task = (props) => {
    return (
        props.todos.length > 0
            ?
            props.todos.map((todo, index) =>
                <li key={index}>
                    <span>{todo.name}</span>
                    <button onClick={() => props.action(todo.name)}>{props.actionName}</button>
                </li>)
            :
            <span>No Data Available</span>
    )
}

export default TodoApp