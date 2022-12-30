import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <nav>
            <Link to="/posts" >Posts</Link>
        </nav>
    )
}