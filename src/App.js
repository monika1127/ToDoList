import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Navbar from './Components/Navbar'
import ToDoList from './Components/ToDoList'
import {todoListState} from './recoil/recoil'

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
      {isLoading ? <div>Loading</div> : <ToDoList />}
    </Fragment>
  );
}

export default App;
