
//f3ff6eaf

import { useEffect, useState } from "react"
import "./assets/App.css";
import SearchIcon from "./assets/search.svg";
import { MovieCard } from "./components/MovieCard.js"

const API_URL = "https://www.omdbapi.com?apikey=f3ff6eaf"


const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('Avatar')
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Movie"
                    value={searchTerm}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>


            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie, index) =>
                        <MovieCard key={index} movie={movie} />
                    )}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    )
}

export default App