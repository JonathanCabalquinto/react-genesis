import "../assets/Todo.css"
import Navbar from "./links/Navbar"
import DoneTodos from "./pages/DoneTodos"
import Todo from "./pages/Todo"
import { useState, createContext } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

export const AppContext = createContext()

const Home = () => {
    const [todos, setTodos] = useState([])
    const [doneTodo, setdoneTodo] = useState([])
    const [todoInputValue, setTodoInputValue] = useState("")

    const navigate = useNavigate();

    const handleToInputChange = (event) => {
        setTodoInputValue(event.target.value)
    }

    const addTodo = () => {
        var id = todos.length === 0 ? 1 : todos.length + 1
        setTodos((todo) => [...todo, { 'id': id, 'name': todoInputValue, 'completed': false }])
        setTodoInputValue('')
        navigate('/', { replace: true });
    }

    const handleUpdateTodo = (id) => {
        let updatedTodo = todos.map((todo) => {
            if (todo.id === id) {
                setdoneTodo((prevTodo) => [...prevTodo, { ...todo, completed: true }])
            }
            return todo
        }).filter((todo) => todo.id !== id)

        setTodos(updatedTodo)
    }

    const deleteTodo = (id) => {
        setdoneTodo(doneTodo.filter((todo) => todo.id !== id))
    }


    return (
        <div className="container">
            <div className="vertical-center">
                <div className="todo-input">
                    <input onChange={handleToInputChange} value={todoInputValue} />
                    <button onClick={addTodo}>Add Todo</button>
                </div>
                <AppContext.Provider value={{ todos, doneTodo, setTodos, handleUpdateTodo, deleteTodo }}>
                    <Navbar />
                    <hr />
                    <Routes>
                        <Route path="/" element={<Todo />} />
                        <Route path="/done" element={<DoneTodos />} />
                        <Route path="*" element={<h1>Routes Not Found</h1>} />
                    </Routes>
                </AppContext.Provider >
            </div>
        </div >
    )
}
export default Home