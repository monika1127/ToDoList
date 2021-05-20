import { Button, Flex, Input, Text, Container } from "@theme-ui/components";
import React, { useState } from "react";
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
    <Container variant="body">
      <Flex sx={{alignItems: "center", color: 'primary'}}>
        <PencilIcon width={20} height={20} />
        <Text variant="header" sx={{px: 2}} >Add new task:</Text>
      </Flex>
      <Flex>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            border: "1px solid",
            borderBottom: "3px solid",
            borderColor: "primary",
            outline: "none",
            '&:focus': {
              borderColor: "secondary",
            }
          }}
        />
        <Button variant="primary" onClick={addItem}>
          Add
        </Button>
      </Flex>
    </Container>
  );
};

export default AddToDoItem;
