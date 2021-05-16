import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/recoil";
import { ReactComponent as Bin } from "../assets/bin2.svg";
import { ReactComponent as Checkmark } from "../assets/checkmark.svg";

const ToDoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
    });
    setTodoList(newList);
    // add server connection
  };

  const deleteItem = () => {
    console.log("delete");
    // const newList = removeItemAtIndex(todoList, index);
    // setTodoList(newList);
  };

  return (
    <div className="todo-item__container ">
      <div className="todo-item__checkbox" onClick={toggleItemCompletion}>
        <Checkmark width={14} height={14} />
      </div>
      <div className="todo-item__description">{item.title}</div>
      <div className="todo-item__delete-icon" onClick={() => deleteItem()}>
        <Bin width={16} height={16} />
      </div>
    </div>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// function removeItemAtIndex(arr, index) {
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }

export default ToDoItem;
