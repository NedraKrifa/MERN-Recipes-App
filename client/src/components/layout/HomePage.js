import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Button,
} from "reactstrap";
import logo from "../assets/large_gastroly-360x200.png";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="home_header">
      <Navbar dark expand="sm">
        <Container>
          <NavbarBrand href="/">
            <img src={logo} alt="Logo App" width="200px" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ fontSize: "20px" }} href="/register">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ fontSize: "20px" }} href="/login">
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Container className="home_desc">
        <Row>
          <Col>
            <h1>RECIPES & FOOD</h1>
            <h4>What do you want to make? Are you hungry?</h4>
          </Col>
        </Row>
        <Row style={{marginTop:'20px'}}>
          <Col>
            <Link to="register">
              <Button style={{marginRight:'10px'}} color="info">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button color="light">Login</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;
