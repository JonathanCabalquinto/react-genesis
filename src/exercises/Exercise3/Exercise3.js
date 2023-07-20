import "../../assets/Exercise3.css"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./pages/Navbar"
import LinkRoutes from "./pages/LinkRoutes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const Exercise3 = () => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true
            }
        }
    })
    return (
        <div className="container">
            <QueryClientProvider client={client}>
                <Router>
                    <Navbar />
                    <LinkRoutes />
                </Router>
            </QueryClientProvider>
        </div>
    )
}

export default Exercise3