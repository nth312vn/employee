import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const Question = (props) => {
  const navigate = useNavigate();
  const { question } = props;
  const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };
  const handleClickShow = () => {
    navigate(`/question/${question.id}`);
  };
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        margin: "5px ",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">{question.author}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {timeConverter(question.timestamp)}
        </CardSubtitle>

        <Button onClick={handleClickShow} color="success" size="lg" outline>
          Show
        </Button>
      </CardBody>
    </Card>
  );
};

export default Question;
