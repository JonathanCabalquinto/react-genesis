import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const Home = () => {
    const { data, isLoading, isSuccess } = useQuery(["cat"], () => {
        axios.defaults.headers["X-API-KEY"] = "znu8vGBDVBHtP8100g+X3Q==XrqSiAcvySnjJbvz"
        return axios.get("https://api.api-ninjas.com/v1/facts?limit=5").then((res) => res.data)
    })

    if (isLoading) {
        return (
            <h2>Loading...</h2>
        )
    }

    if (isSuccess) {
        console.log(data)
    }
    return (
        <div>
            <h1>Random Facts</h1>
            {
                data.map((fact, index) =>
                    <h3 key={index}>{fact.fact}</h3>
                )
            }
        </div>

    )
}

export default Home