import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>About</Link>
            <Link to={"/about"}>Profile</Link>
        </div>
    )
}

export default Navbar