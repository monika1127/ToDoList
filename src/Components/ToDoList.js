import { Container, Text } from "@theme-ui/components";
import React from "react";
import { useRecoilValue } from "recoil";
import { filteredToDoList } from "../recoil/recoil";
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const toDoList = useRecoilValue(filteredToDoList);

  return (
    <Container>
      <Text variant='header'>Tasks:</Text>
      {toDoList.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem}/>
      ))}
    </Container>
  );
};

export default ToDoList;
