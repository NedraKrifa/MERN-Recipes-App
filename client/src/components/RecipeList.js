import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";

function RecipeList() {
  const list = useSelector((state) => state.recipes.items);
  const loading = useSelector((state) => state.recipes.loading);
  return (
    <div>
      <Container className="list_title">
        <Row>
          <Col>
            <h1>Our Picks</h1>
            <p>Delicious recipes we chose for you</p>
          </Col>
        </Row>
      </Container>
      {loading ? (
        <Container style={{ textAlign: "center" }}>
          <Spinner
            color="secondary"
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
          />{" "}
          <Spinner
            color="secondary"
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
          />{" "}
          <Spinner
            color="secondary"
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
          />
        </Container>
      ) : (
        <Container>
          <Row xs="3">
            {list.map((item) => (
              <Col key={item._id}>
                <RecipeItem item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}
export default RecipeList;
