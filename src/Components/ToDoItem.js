import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/recoil";
import { ReactComponent as Bin } from "../assets/bin2.svg";
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

export default ToDoItem;
