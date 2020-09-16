import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editRecipe } from "../../actions/recipeActions";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Navbar,
  NavbarBrand,
} from "reactstrap";

function FormEdit() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const list = useSelector((state) => state.recipes.items);
  const item = list.filter((i) => i._id === id);
  const [title, setTitle] = useState(item[0].title);
  const [image, setImage] = useState(item[0].image);
  const [instructions, setInstructions] = useState(item[0].instructions);

  const changeRecipe = () => {
    const editItem = {
      title,
      image,
      instructions,
      author: user.name,
    };

    dispatch(editRecipe(editItem, id));
    console.log("edit");
  };

  return (
    <div>
      <div className="recipe_edit--backgroundimage">
        <Navbar dark>
          <NavbarBrand href="/myrecipes">Back To My Recipes</NavbarBrand>
        </Navbar>
        <h1 className="title">Edit Recipe!!</h1>
      </div>
      <Container style={{ marginBottom: "50px" }}>
        <Form>
          <FormGroup row>
            <Label for="titleText" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                value={title}
                name="title"
                id="titleText"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="imageText" sm={2}>
              Image
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                value={image}
                name="image"
                id="imageText"
                onChange={(e) => setImage(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="instructionsText" sm={2}>
              Instructions
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                value={instructions}
                name="instructions"
                id="instructionsText"
                onChange={(e) => setInstructions(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Link to={"/myrecipes"}>
                <Button color="primary" onClick={() => changeRecipe()}>
                  EDIT RECIPE
                </Button>
              </Link>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}
export default FormEdit;
