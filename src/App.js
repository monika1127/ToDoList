import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {todoListState} from './recoil/recoil'

import Navbar from './Components/Navbar'
import ToDoList from './Components/ToDoList'
import AddToDoItem from './Components/AddToDoItem'
import SearchToDoItem from "./Components/SearchToDoItem";

import './styles/application.css'

function App() {
  const [toDoList, setToDoList] = useRecoilState(todoListState)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users/1280/todos")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false)
        setToDoList(res.data)})
      .catch(err=>{
        console.log(err)
        setLoading(false)
      })
  }, []);

  return (
    <Fragment>
      <Navbar />
      <AddToDoItem />
      <SearchToDoItem />
      {isLoading ? <div>Loading</div> : <ToDoList />}
    </Fragment>
  );
}

export default App;
