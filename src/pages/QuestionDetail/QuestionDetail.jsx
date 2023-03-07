import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Label,
  Row,
} from "reactstrap";

const QuestionDetail = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Label
          style={{ textAlign: "center", fontSize: "30px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          Poll by hihi
        </Label>
      </Row>
      <Row style={{ margin: "50px 0px" }}>
        <Col style={{ textAlign: "center" }}>
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="avatar"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button color="success">Click</Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button color="success">Click</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionDetail;
