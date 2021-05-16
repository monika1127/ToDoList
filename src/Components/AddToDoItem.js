import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/recoil";
import Button from "./Button";

const AddToDoItem = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    const newItem = {
      title: inputValue,
      completed: false,
    };
    fetch(`https://gorest.co.in/public-api/users/1280/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((res) => {
        setTodoList((oldTodoList) => [...oldTodoList, res.data]);
        setInputValue("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="new-item__container">
      <input
        type="text"
        placeholder="add new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="primary" type="button" onClick={addItem} name="add"/>
    </div>
  );
};

export default AddToDoItem;
