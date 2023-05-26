import React from "react";
import listStyles from "./List.module.css";
import Card from "../UI/Card";

const List = (props) => {
  return (
    <Card className={listStyles.container}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default List;
