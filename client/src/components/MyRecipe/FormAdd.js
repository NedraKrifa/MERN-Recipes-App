import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewRecipe } from "../../actions/recipeActions";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

function FormAdd() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [instructions, setInstructions] = useState("");
  const resetInputField = () => {
    setTitle("");
    setImage("");
    setInstructions("");
    setToggleBtn(true);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let newItem;
    if (image === "") {
      newItem = {
        title,
        instructions,
        author: user.name,
      };
    } else {
      newItem = {
        title,
        image,
        instructions,
        author: user.name,
      };
    }
    dispatch(addNewRecipe(newItem));
    resetInputField();
  };
  return (
    <Container style={{ marginBottom: "50px" }}>
      {toggleBtn ? (
        <Button color="primary" size="lg" onClick={() => setToggleBtn(false)}>
          ADD RECIPE
        </Button>
      ) : (
        <Form onSubmit={(e) => handleOnSubmit(e)}>
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
                required
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
                required
                onChange={(e) => setInstructions(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="primary">ADD RECIPE</Button>
            </Col>
          </FormGroup>
        </Form>
      )}
    </Container>
  );
}
export default FormAdd;
