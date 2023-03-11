import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);
  const listUser = users.listUser;
  const tableDislay =
    listUser &&
    Object.keys(listUser).map((user) => {
      return {
        name: user,
        answers:
          listUser?.[user]?.answers &&
          Object.keys(listUser[user].answers).length,
        created:
          listUser[user]?.questions &&
          Object.keys(listUser[user].questions).length,
        avatarURL: listUser[user].avatarURL,
      };
    });
  console.log(tableDislay);
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
                <td>
                  <img
                    src={item?.avatarURL}
                    style={{
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                    }}
                    alt="avatar"
                  />
                  {item.name}
                </td>
                <td>{item.answers}</td>
                <td>{item.created}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
};

export default LeaderBoard;
