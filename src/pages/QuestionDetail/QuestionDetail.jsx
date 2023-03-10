import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import { handleSaveQuestion } from "../../actions/handleAnswerQuestion";

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions.questions);
  const user = JSON.parse(localStorage.getItem("user"));
  const question = questions[id];
  const hasVotedForOptionOne = question.optionOne.votes.includes(user.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(user.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;
  const handleChoseOption = (option) => {
    dispatch(
      handleSaveQuestion({
        authedUser: user.id,
        qid: question.id,
        answer: option,
      })
    );
    navigate("/");
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Label
          style={{ textAlign: "center", fontSize: "30px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          {` Poll by ${user.id}`}
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
              <CardText>{question.optionOne.text}</CardText>
              <Button
                onClick={() => handleChoseOption("optionOne")}
                disabled={hasVoted}
                color="success"
              >
                Click
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardText>{question.optionTwo.text}</CardText>
              <Button
                onClick={() => handleChoseOption("optionTwo")}
                disabled={hasVoted}
                color="success"
              >
                Click
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionDetail;
