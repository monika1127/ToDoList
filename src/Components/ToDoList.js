import React from "react";
import { Container, Text, Flex, Alert } from "@theme-ui/components";
import { useRecoilValue } from "recoil";
import { filteredToDoList } from "../recoil/recoil";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const toDoList = useRecoilValue(filteredToDoList);

  return (
    <Container variant="body">
      <Flex>
        <Text variant="header">Tasks:</Text>
      </Flex>
      {toDoList.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem} />
      ))}
      {toDoList.length===0 &&
      <Alert sx={{bg: "highlited"}}>NO ACTIVE TASK</Alert>
      }
    </Container>
  );
};

export default ToDoList;
