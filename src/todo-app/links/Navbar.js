import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link className='nav_link' to={"/"}>Todo</Link>
            <Link className='nav_link' to={"/done"}>Done</Link>
        </div>
    )
}

export default Navbar