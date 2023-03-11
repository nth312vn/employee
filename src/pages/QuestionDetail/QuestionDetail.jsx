import React, { useEffect, useState } from "react";
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
import { updateUser } from "../../actions/usersAction";

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions.questions);
  const user = useSelector((state) => state.users.authUser);
  const users = useSelector((state) => state.users.listUser);

  const question = questions?.[id];
  const hasVotedForOptionOne =
    question && question.optionOne.votes.includes(user.id);
  const hasVotedForOptionTwo =
    question && question.optionTwo.votes.includes(user.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;
  const [showVote, setShowVote] = useState(hasVoted);
  const numberOfVoteOne = question && question.optionOne.votes.length;
  const numberOfVoteTwo = question && question.optionTwo.votes.length;

  const handleChoseOption = (option) => {
    dispatch(
      handleSaveQuestion({
        authedUser: user.id,
        qid: question.id,
        answer: option,
      })
    );
    const userUpdate = {
      ...user,
      answers: { ...user.answers, [question.id]: option },
    };
    dispatch(updateUser(userUpdate));

    setShowVote(!showVote);
  };
  useEffect(() => {
    if (!question) {
      navigate("/404");
    }
  }, []);
  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Label
          style={{ textAlign: "center", fontSize: "30px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          {` Poll by ${user?.id}`}
        </Label>
      </Row>
      <Row style={{ margin: "50px 0px" }}>
        <Col style={{ textAlign: "center" }}>
          <img
            src={user.avatarURL}
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
        <Label
          style={{ textAlign: "center", fontSize: "30px" }}
          className="pb-2 mr-sm-2 mb-sm-0"
        >
          {` Would You Rather`}
        </Label>
      </Row>
      <Row>
        <Col>
          <Card color={hasVotedForOptionOne && "info"}>
            <CardBody>
              {question && <CardText>{question.optionOne.text}</CardText>}
              <Button
                onClick={() => handleChoseOption("optionOne")}
                disabled={hasVoted}
                color="success"
              >
                Click
              </Button>
              {showVote && (
                <span>{`${numberOfVoteOne} votes ${percentage(
                  numberOfVoteOne,
                  Object.keys(users).length
                )}%`}</span>
              )}
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card color={hasVotedForOptionTwo && "info"}>
            <CardBody>
              {question && <CardText>{question.optionTwo.text}</CardText>}
              <Button
                onClick={() => handleChoseOption("optionTwo")}
                disabled={hasVoted}
                color="success"
              >
                Click
              </Button>
              {showVote && (
                <span>{`${numberOfVoteTwo} votes ${percentage(
                  numberOfVoteTwo,
                  Object.keys(users).length
                )} %`}</span>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionDetail;
