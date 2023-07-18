import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import About from "./About"

const LinkRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Page Not found</h1>} />
        </Routes>
    )
}

export default LinkRoutes