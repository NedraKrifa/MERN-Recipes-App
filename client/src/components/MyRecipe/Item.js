import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../actions/recipeActions";

function Item({ item }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ backgroundColor: "#f8f9fa", marginBottom: "30px" }}>
      <CardImg top width="100%" src={item.image} alt="Card image recipe" />
      <CardBody>
        <CardTitle style={{ fontSize: "24px" }}>{item.title}</CardTitle>
        <Link to={`/myrecipes/edit/${item._id}`}>
          <Button outline>EDIT</Button>
        </Link>{" "}
        <Button
          outline
          color="danger"
          onClick={() => dispatch(deleteRecipe(item._id))}
        >
          DELETE
        </Button>
      </CardBody>
    </Card>
  );
}
export default Item;
