import { Container, Text, Flex } from "@theme-ui/components";
import React from "react";
import { useRecoilValue } from "recoil";
import { filteredToDoList } from "../recoil/recoil";
import ToDoItem from "./ToDoItem";
import Statistics from "./Statistics";
const ToDoList = () => {
  const toDoList = useRecoilValue(filteredToDoList);

  return (
    <Container>
      <Flex sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text variant="header">Tasks:</Text>
        <Statistics />
      </Flex>
      {toDoList.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem} />
      ))}
    </Container>
  );
};

export default ToDoList;
