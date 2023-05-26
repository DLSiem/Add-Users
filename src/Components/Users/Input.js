import inputStyles from "./Input.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const Input = (props) => {
  const [changeUsername, setChangeUsername] = useState("");
  const [changeAge, setChangeAge] = useState("");
  const [errors, setError] = useState();

  const changeUsernameHandler = (e) => {
    setChangeUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setChangeAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (changeUsername.trim().length === 0 || changeAge.trim().length === 0) {
      if (changeUsername.trim().length === 0) {
        setError({
          title: "Invalid Input",
          message: "Input area cannot be empty",
        });
      }
      return;
    }
    if (+changeAge < 1) {
      setError({
        title: "Error Age",
        message: "Age cannot less than 1.",
      });
      return;
    }
    props.onAddUser(changeUsername, changeAge);
    console.log(changeUsername, changeAge);
    setChangeAge("");
    setChangeUsername("");
  };

  const closeError = () => {
    setError();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Card className={inputStyles.userInput}>
          <label className={inputStyles.labelInput}>Username</label>
          <br />
          <input
            className={inputStyles.username}
            type="text"
            onChange={changeUsernameHandler}
            value={changeUsername}
          />
          <br />
          <label className={inputStyles.labelInput}>Age(Years)</label>
          <br />
          <input
            className={inputStyles.age}
            type="number"
            value={changeAge}
            onChange={ageChangeHandler}
          />
          <br />
          <Button type="submit" className={inputStyles.addUser}>
            <p>Add Users</p>
          </Button>
        </Card>
      </form>
      {errors && (
        <ErrorModal
          closeErr={closeError}
          title={errors.title}
          message={errors.message}
        />
      )}
    </div>
  );
};

export default Input;
