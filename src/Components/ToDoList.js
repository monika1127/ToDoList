import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/recoil";
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const toDoList = useRecoilValue(todoListState);

  if (toDoList.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {toDoList.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem}/>
      ))}
    </div>
  );
};

export default ToDoList;
