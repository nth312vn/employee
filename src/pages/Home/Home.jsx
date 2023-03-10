import React from "react";
import { useSelector } from "react-redux";
import { CardGroup } from "reactstrap";
import Header from "../../components/header/Header";
import Question from "../../components/question/Question";

const Home = () => {
  const store = useSelector((state) => state);
  const { questions } = store;
  const user = JSON.parse(localStorage.getItem("user"));

  const answer =
    questions &&
    Object.keys(questions.questions).filter(
      (question) =>
        questions.questions[question].optionOne.votes.includes(user.id) ||
        questions.questions[question].optionTwo.votes.includes(user.id)
    );
  const unAnswer =
    questions &&
    Object.keys(questions.questions).filter(
      (question) =>
        !questions.questions[question].optionOne.votes.includes(user.id) &&
        !questions.questions[question].optionTwo.votes.includes(user.id)
    );
  return (
    <div>
      <Header />
      <div style={{ marginTop: "100px" }}>
        <h3 data-testid="home" style={{ textAlign: "center" }}>
          New Question
        </h3>
        <CardGroup>
          {unAnswer.map((question, index) => (
            <Question key={index} question={questions.questions[question]} />
          ))}
        </CardGroup>
      </div>
      <div style={{ marginTop: "100px" }}>
        <h3 style={{ textAlign: "center" }}>Done</h3>

        <CardGroup>
          {answer.map((question, index) => (
            <Question key={index} question={questions.questions[question]} />
          ))}
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
