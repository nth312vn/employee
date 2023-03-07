import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "../../pages/Home/Home";
import LeaderBoard from "../../pages/LeaderBoard/LeaderBoard";
import AddNew from "../../pages/AddNew/AddNew";
import Header from "../header/Header";
import QuestionDetail from "../../pages/QuestionDetail/QuestionDetail";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container
        style={{ marginTop: "100px" }}
        className="bg-light "
        fluid="xl"
      >
        <Routes>
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<AddNew />} />
          <Route path="question/:id" element={<QuestionDetail />} />
        </Routes>
      </Container>
    </>
  );
};

export default MainLayout;
