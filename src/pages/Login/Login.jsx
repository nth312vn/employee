import React from "react";
import { useSelector } from "react-redux";
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
import { loginField } from "../../constants/login";
import useForm from "../../hooks/useForm";
import { validationLogin } from "./validationLogin";

const Login = () => {
  const { user, password } = loginField;
  const form = useForm(
    {
      [user]: "",
      [password]: "",
    },
    validationLogin()
  );
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const { value, error, handleChange, clearFrom, setError, handleSubmit } =
    form;
  const onSubmit = (formValues) => {
    clearFrom();
    if (users.listUser[formValues[user]]?.password === formValues[password]) {
      navigate("/");
      localStorage.setItem(
        "user",
        JSON.stringify(users.listUser[formValues[user]])
      );
    }
    setError("user name or password is invalid");
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Label
          style={{ textAlign: "center", fontSize: "30px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          Employee Polls Web App
        </Label>
      </Row>
      <Row>
        <Label
          style={{ textAlign: "center", fontSize: "30px", marginTop: "50px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          Login
        </Label>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="user" className="mr-sm-2">
                    User
                  </Label>
                  <Input
                    type="text"
                    value={value[user]}
                    name={user}
                    id="user"
                    placeholder="User"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="password" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    value={value[password]}
                    name={password}
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </FormGroup>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <Button
                  style={{
                    marginTop: "30px",
                  }}
                  type="submit"
                  color="primary"
                >
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
