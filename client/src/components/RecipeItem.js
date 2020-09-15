import React from "react";
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function RecipeItem({ item }) {
  return (
    <Card style={{ backgroundColor: "#f8f9fa",marginBottom: "30px" }}>
      <CardImg top width="100%" src={item.image} alt="Card image recipe" />
      <CardBody>
        <CardTitle style={{fontSize:"24px"}}>{item.title}</CardTitle>
        <CardSubtitle style={{fontSize:"14px"}}>BY {item.author}</CardSubtitle>
        <Link to={`/recipe/${item._id}`}><Button color="link" size="lg">GET RECIPE</Button></Link>
      </CardBody>
    </Card>
  );
}
export default RecipeItem;
