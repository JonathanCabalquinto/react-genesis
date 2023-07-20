import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

const Home = () => {
    const { data, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    return (
        <div className="container">
            <h1>HOME</h1>
            <p>{data?.fact}</p>
            <button onClick={refetch}>
                Refetch data
            </button>
        </div>
    )
}

export default Home