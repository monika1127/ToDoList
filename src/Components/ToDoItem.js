import React from "react";
import { Flex, Box, Text, Card, IconButton } from "@theme-ui/components";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/recoil";
import { ReactComponent as BinIcon } from "../assets/bin2.svg";
import { ReactComponent as Checkmark } from "../assets/checkmark.svg";

const ToDoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newValue = { completed: !item.completed };
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      ...newValue,
    });

    fetch(`https://gorest.co.in/public-api/todos/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
      body: JSON.stringify(newValue),
    })
      .then((res) => setTodoList(newList))
      .catch((err) => console.log(err));
  };

  const deleteItem = () => {
    const updatedState = todoList.filter((i) => i.id !== item.id);
    fetch(`https://gorest.co.in/public-api/todos/${item.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    })
      .then((res) => setTodoList(updatedState))
      .catch((err) => console.log(err));
  };

  return (
    <Card variant={item.completed ? "muted" : "primary"}>
      <Flex sx={{ alignItems: "center", flex: "1 1 0" }}>
        <IconButton
          variant={item.completed ? "checkMuted" : "checkActive"}
          onClick={toggleItemCompletion}
        >
          <Checkmark width={14} height={14} />
        </IconButton>
        <Box sx={{ px: 2, flex: "1 1 0" }}>
          <Text>{item.title}</Text>
        </Box>
      </Flex>
      <IconButton
        variant={item.completed ? "deleteMuted" : "deleteActive"}
        onClick={() => deleteItem()}
      >
        <BinIcon width={14} height={14} />
      </IconButton>
    </Card>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export default ToDoItem;
