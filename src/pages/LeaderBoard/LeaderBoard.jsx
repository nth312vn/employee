import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);
  const listUser = users.listUser;
  const tableDislay =
    listUser &&
    Object.keys(listUser).map((user) => {
      console.log(listUser[user]?.answers);
      return {
        name: user,
        answers:
          listUser?.[user]?.answers &&
          Object.keys(listUser[user].answers).length,
        created:
          listUser[user]?.questions &&
          Object.keys(listUser[user].questions).length,
      };
    });
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {tableDislay &&
          tableDislay
            .sort((a, b) => {
              return b.answers - a.answers;
            })
            .map((item, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.name}</td>
                <td>{item.answers}</td>
                <td>{item.created}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
};

export default LeaderBoard;
