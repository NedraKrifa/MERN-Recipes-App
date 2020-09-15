import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../actions/authActions";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Navbar,
  NavbarBrand,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  Alert,
} from "reactstrap";

function Register() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [msg, setMsg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //Create user object
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };
    //Attempt to register
    dispatch(register(newUser));
  };
  useEffect(() => {
    // Check for register error
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg);
    } else {
      setMsg(null);
    }
  }, [error, isAuthenticated]);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="register_image">
      <Navbar dark>
        <NavbarBrand href="/">Back To Home</NavbarBrand>
      </Navbar>
      <Container style={{ color: "#f8f9fa" }}>
        <Row xs={2}>
          <Card
            style={{
              backgroundColor: "#343a40",
              opacity: "0.8",
              marginTop: "12%",
              marginLeft: "50%",
            }}
          >
            <CardBody>
              <CardTitle style={{ textAlign: "center", fontSize: "30px" }}>
                Sign Up
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                Create your Gastroly account
              </CardSubtitle>
              {msg ? (
                <Alert color="danger" style={{ marginTop: "20px" }}>
                  {msg}
                </Alert>
              ) : null}
              <Form
                style={{ marginTop: "50px" }}
                onSubmit={(e) => handleOnSubmit(e)}
              >
                <FormGroup row>
                  <Label for="nameText" sm={4}>
                    Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="text"
                      value={name}
                      name="name"
                      id="nameText"
                      placeholder="exp: Nedra Krifa"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={4}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      id="email"
                      placeholder="exp: nedra@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={4}>
                    Password
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      id="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="confirmPassword" sm={4}>
                    Confirm Password
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      name="password"
                      value={confirmPassword}
                      id="confirmPassword"
                      placeholder="confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 4 }}>
                    <Button color="primary">Register</Button>
                  </Col>
                </FormGroup>
              </Form>
              <p style={{ marginTop: "20px" }}>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
export default Register;
