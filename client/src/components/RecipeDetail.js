import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../actions/recipeActions";
import Stars from "./layout/stars/Stars";
import ReactButton from "./layout/reactButton/ReactButton";
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
} from "reactstrap";

function RecipeDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getRecipe(id)), []);
  const item = useSelector((state) => state.recipes.item);
  const [varRate, setVarRate] = useState(0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <div className="recipe--backgroundimage">
        <Navbar dark>
          <NavbarBrand href="/dashboard">Back To DashBoard</NavbarBrand>
        </Navbar>
        <h1 className="title">Enjoy Recipe!!</h1>
      </div>
      <Container>
        <Row style={{ marginBottom: "20px" }}>
          <Col sm="6">
            <Card body>
              <CardImg
                top
                width="100%"
                src={item.image}
                alt="Card image recipe"
              />
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle style={{ fontSize: "40px" }}>{item.title}</CardTitle>
              <CardSubtitle style={{ fontSize: "14px" }}>
                BY {item.author}
              </CardSubtitle>
              <Stars
                varRate={varRate}
                setVarRate={setVarRate}
                sizeOfStars={5}
              />
              <ReactButton />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginBottom: "50px" }}>
          <Col sm="12">
            <Card body>
              <CardTitle style={{ fontSize: "24px" }}>Instructions</CardTitle>
              <CardText>{item.instructions}</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default RecipeDetail;
