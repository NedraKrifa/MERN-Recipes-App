import React from "react";
import { Container, Row, Col, Navbar, NavbarBrand, Spinner } from "reactstrap";
import Item from "./Item";
import FormAdd from "./FormAdd";
import { useSelector } from "react-redux";


function List() {
  const user = useSelector((state) => state.auth.user);
  const list = useSelector((state) => state.recipes.items).filter(
    (item) => item.author === user.name
  );
  const loading = useSelector((state) => state.recipes.loading);
  
  return (
    <div>
      <div className="list_title--backgroundimage">
        <Navbar dark>
          <NavbarBrand href="/dashboard">Back To DashBoard</NavbarBrand>
        </Navbar>
        <h1 className="title">My Picks</h1>
      </div>
      <Container>
        <FormAdd />
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
                <Item item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}
export default List;
