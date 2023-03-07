import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const Question = (props) => {
  const { title, text } = props;
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {text}
        </CardSubtitle>

        <Button color="success" size="lg" outline>
          Show
        </Button>
      </CardBody>
    </Card>
  );
};

export default Question;
