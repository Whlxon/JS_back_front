import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
    <nav>
        <Link to="/HomePage">HomePage</Link>
        <Link to="/">Movies</Link>
    </nav>
    )
}