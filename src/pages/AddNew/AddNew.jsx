import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { handleInit } from "../../actions/handleInitAction";
import { addNewQuestions } from "../../actions/questions";
import { addNewForm } from "../../constants/addNew";
import { _saveQuestion } from "../../data/_DATA";
import useForm from "../../hooks/useForm";

const AddNew = () => {
  const { optionOne, optionTwo } = addNewForm;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm({
    [optionOne]: "",
    [optionTwo]: "",
  });
  const { value, handleChange, handleSubmit } = form;
  const user = JSON.parse(localStorage.getItem("user"));

  const onSubmit = async (formValue) => {
    const params = {
      optionOneText: formValue[optionOne],
      optionTwoText: formValue[optionTwo],
      author: user.id,
    };
    const res = await _saveQuestion(params);
    console.log(res);
    dispatch(addNewQuestions(res));
    navigate("/");
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Label
          style={{ textAlign: "center", fontSize: "30px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          Would You Rather
        </Label>
        <span
          style={{ textAlign: "center", fontSize: "20px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          Create Your Own Poll
        </span>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form
                onSubmit={(e) => {
                  handleSubmit(e, onSubmit);
                }}
              >
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="firstOption" className="mr-sm-2">
                    First Option
                  </Label>
                  <Input
                    type="text"
                    value={value[optionOne]}
                    name={optionOne}
                    id="firstOption"
                    placeholder="Option one"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="secondOption" className="mr-sm-2">
                    Second Option
                  </Label>
                  <Input
                    type="text"
                    value={value[optionTwo]}
                    name={optionTwo}
                    id="secondOption"
                    placeholder="Option two"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button
                  style={{
                    marginTop: "30px",
                  }}
                  type="submit"
                  color="primary"
                >
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNew;
