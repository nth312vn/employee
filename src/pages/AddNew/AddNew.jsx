import React from "react";
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
import { addNewForm } from "../../constants/addNew";
import useForm from "../../hooks/useForm";

const AddNew = () => {
  const { optionOne, optionTwo } = addNewForm;
  const form = useForm({
    [optionOne]: "",
    [optionTwo]: "",
  });
  const { value, handleChange, clearFrom, setField, handleSubmit } = form;
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
              <Form onSubmit={(e) => {}}>
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
