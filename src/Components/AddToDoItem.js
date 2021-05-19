import { Button, Flex, Input } from "@theme-ui/components";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/recoil";


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
    <Flex >
      <Input
        type="text"
        placeholder="Enter the new task title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant='primary' onClick={addItem}>Add new task</Button>
    </Flex>
  );
};

export default AddToDoItem;
