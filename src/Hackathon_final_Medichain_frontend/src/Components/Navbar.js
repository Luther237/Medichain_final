
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <NavLink to="/" activeClassName="active">Accueil</NavLink>
            <NavLink to="/registration">Register Medecin</NavLink>
            <NavLink to="/Login">Login</NavLink>
        </div>
    )
}

export default Navbar;