import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Navbar from './Components/Navbar'
import ToDoList from './Components/ToDoList'
import {todoListState} from './recoil/recoil'

import './styles/application.css'

function App() {
  const [toDoList, setToDoList] = useRecoilState(todoListState)

  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users/1280/todos")
      .then((res) => res.json())
      .then((res) => setToDoList(res.data));
  }, []);

  return (
    <Fragment>
      <Navbar />
      <ToDoList />
    </Fragment>
  );
}

export default App;
