import React, { useState } from "react";
import Input from "./Components/Users/Input";
import List from "./Components/Users/List";
import "./App.css";

function App() {
  const [newUser, setNewUser] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setNewUser((prevList) => {
      return [...prevList, { name: uName, age: uAge }];
    });
  };

  return (
    <div className="app">
      <Input onAddUser={addUserHandler} />
      <List users={newUser} />
    </div>
  );
}

export default App;
