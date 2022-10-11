import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { useContext } from "react";
//import ContextTotal from "./Context/ContextTotal";
import ContextApi from "./Context/ContextApi";

const NavBar = () => {
  const { total } = useContext(ContextApi);

  return (
    <>
      <Navbar
        className="mx-auto"
        bg="info"
        variant="dark"
        style={{ width: "65%" }}
      >
        <Container className="justify-content-space-between  m-2">
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
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
