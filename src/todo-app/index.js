import { useState } from "react"
import "../assets/Todo.css"
const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [todoInputValue, setTodoInputValue] = useState("")

    const addTodo = () => {
        todoInputValue.length > 0 && setTodos((prevTodos) => [...prevTodos, { 'name': todoInputValue, 'is_done': false }])
        setTodoInputValue('');
    }

    const handleTodoInputOnChange = (event) => {
        setTodoInputValue(event.target.value)
    }

    const updateTodoStatus = (todoName) => {
        setTodos(todos.map((todo, key) => todoName === todo.name ? [{ ...todo, is_done: true }] : todo))
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
                <span className="nav_link">Todo</span>
                <span className="nav_link">Done</span>
            </div>
            <ul>{
                todos.length > 0 ?
                    todos.filter(todo => todo.is_done === false).map((todo, index) =>
                        <li key={index}>
                            <span>{todo.name}</span>
                            <button onClick={() => updateTodoStatus(todo.name)}>Done</button>
                        </li>
                    )
                    :
                    <span>No Available Todo</span>
            }

            </ul>
        </div >

    )

}

// todos.length > 0 ?
//     todos.filter(todo => todo.is_done === false).map((todo, index) =>
//         <li key={index}>
//             <span>{todo.name}</span>
//             <button onClick={() => updateTodoStatus(todo.name)}>Done</button>
//         </li>
//     )
//     :
//     <span>No Available Todo</span>


// const TodoItem = (props) => {
//     const { emitFunction } = props

//     const handleButtonClick = () => {
//         // Trigger the function received from the parent component
//         emitFunction();
//     };
//     return (
//         <li>
//             <span>{props.todo.name}</span>
//             <button onClick={handleButtonClick}>Done</button>
//             <button>Doing</button>
//         </li>
//     )

// }

export default TodoApp