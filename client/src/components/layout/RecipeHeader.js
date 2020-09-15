import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  NavbarText,
} from "reactstrap";
import logo from "../assets/large_gastroly-360x200.png";
import Logout from "../auth/Logout";

function RecipeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="recipe_header">
      <Navbar color="light" light expand="sm">
        <Container>
          <NavbarBrand href="/dashboard">
            <img src={logo} alt="Logo App" width="150px" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavbarText style={{marginRight:'20px'}}>
                  <strong>{user ? `Welcome ${user.name}!` : ""}</strong>
                </NavbarText>
              </NavItem>
              <NavItem>
                <NavLink href="/myrecipes">My Recipes</NavLink>
              </NavItem>
              <Logout />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Container className="recipe_desc">
        <Row>
          <Col>
            <h1>RECIPES & FOOD</h1>
            <h4>What do you want to make?</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RecipeHeader;
