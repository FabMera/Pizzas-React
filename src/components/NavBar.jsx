import { NavLink } from "react-router-dom";
import { Navbar} from "react-bootstrap";
import { useContext } from "react";
//import ContextTotal from "./Context/ContextTotal";
import ContextApi from "./Context/ContextApi";

const NavBar = () => {
  const { total } = useContext(ContextApi);

  return (
    <>
      <div className="container">
        <Navbar className="d-flex justify-content-around" bg="info" variant="dark" expand="lg">
          <Navbar.Brand className="mx-4">
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              🍕 !Pizzeria Mamma Mia!
            </NavLink>
          </Navbar.Brand>

          <Navbar.Brand className="mx-4">
            <NavLink
              className="mx-5"
              style={{ textDecoration: "none", color: "white" }}
              to="/Carrito"
            >
              &#128722;<span className="mx-2">Total: ${total}</span>
            </NavLink>
          </Navbar.Brand>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
