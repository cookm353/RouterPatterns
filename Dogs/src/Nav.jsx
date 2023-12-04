import { NavLink } from "react-router-dom"
import duke from "./assets/duke.jpg"
import perry from "./assets/perry.jpg"
import tubby from "./assets/tubby.jpg"
import whiskey from "./assets/whiskey.jpg"
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="NavDogs">
            <NavLink className="link" to="/dogs/duke">
                <img src={duke} alt="Duke" />
            </NavLink>
            <NavLink className="link" to="/dogs/perry">
                <img src={perry} alt="Perry" />
            </NavLink>
            <NavLink className="link" to="/dogs/tubby">
                <img src={tubby} alt="Tubby" />
            </NavLink>
            <NavLink className="link" to="/dogs/whiskey">
                <img src={whiskey} alt="Whiskey" />
            </NavLink>
        </nav>
    )
}

export default Nav