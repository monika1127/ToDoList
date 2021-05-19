import { Button, Flex, Input, Text } from "@theme-ui/components";
import React, { Fragment, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/recoil";
import { ReactComponent as PencilIcon } from "../assets/pencil.svg";

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
    <Fragment>
      <PencilIcon width={24} height={24} />
      <Text variant="header">Add new to do item:</Text>
      <Flex>
        <Input
          type="text"
          placeholder="Enter the new task title"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="primary" onClick={addItem}>
          Add new task
        </Button>
      </Flex>
    </Fragment>
  );
};

export default AddToDoItem;
