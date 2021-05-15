import React from 'react'
import {useRecoilState} from 'recoil'
import {todoListState} from '../recoil/recoil'
const ToDoItem = ({item}) => {

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
    console.log('delete')
    // const newList = removeItemAtIndex(todoList, index);
    // setTodoList(newList);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleItemCompletion}
      />
      <div>{item.title}</div>
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// function removeItemAtIndex(arr, index) {
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }


export default ToDoItem
