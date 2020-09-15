import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/authActions";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Card,
  CardTitle,
  CardBody,
  Navbar,
  NavbarBrand,
  CardSubtitle,
  Alert,
} from "reactstrap";

function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [msg, setMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //Create user object
    const newUser = {
      email,
      password,
    };
    //Attempt to login
    dispatch(login(newUser));
  };
  useEffect(() => {
    // Check for login error
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg);
    } else {
      setMsg(null);
    }
  }, [error, isAuthenticated]);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login_image">
      <Navbar light>
        <NavbarBrand href="/">Back To Home</NavbarBrand>
      </Navbar>
      <Container style={{ color: "#f8f9fa" }}>
        <Row xs={2}>
          <Card
            style={{
              backgroundColor: "grey",
              opacity: "0.8",
              marginTop: "14%",
            }}
          >
            <CardBody>
              <CardTitle style={{ textAlign: "center", fontSize: "30px" }}>
                Login
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                Sign in to your Gastroly account
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
                  <Label for="email" sm={3} size="lg">
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      id="email"
                      bsSize="lg"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3} size="lg">
                    Password
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      id="password"
                      bsSize="lg"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 3 }}>
                    <Button color="info" size="lg">
                      Login
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
