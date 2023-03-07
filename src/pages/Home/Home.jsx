import React from "react";
import Header from "../../components/header/Header";
import Question from "../../components/question/Question";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "100px" }}>
        <Question title="hihi" text="haha" />
        <Question title="hihi" text="haha" />
      </div>
    </div>
  );
};

export default Home;
