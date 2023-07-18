import "../../assets/Exercise3.css"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./pages/Navbar"
import LinkRoutes from "./pages/LinkRoutes"


const Exercise3 = () => {
    return (
        <div className="container">
            <Router>
                <Navbar />
                <LinkRoutes />
            </Router>
        </div>
    )
}

export default Exercise3