import { Routes, Route } from "react-router-dom"
import DoneTodos from "../pages/DoneTodos"
import Todo from "../pages/Todo"

const LinkRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/done" element={<DoneTodos />} />
            <Route path="*" element={<h1>Routes Not Found</h1>} />
        </Routes>
    )
}

export { LinkRoutes }