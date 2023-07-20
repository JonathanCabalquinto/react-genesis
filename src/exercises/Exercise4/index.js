import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

const Exercise4 = () => {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            <div>
                HEADER
            </div>
            <Router>
                <Link to={"/"}>Index</Link>
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Routes>
                    <Route path="/" element={<h1>This is Index landing page</h1>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    )
}

export default Exercise4

