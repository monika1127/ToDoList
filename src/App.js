import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./recoil/recoil";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'theme-ui'
import theme from './theme'
import Navbar from "./Components/Navbar";
import ToDoList from "./Components/ToDoList";
import AddToDoItem from "./Components/AddToDoItem";
import SearchToDoItem from "./Components/SearchToDoItem";
import BounceLoader from "react-spinners/BounceLoader"

function App() {
  const [toDoList, setToDoList] = useRecoilState(todoListState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users/1280/todos")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setToDoList(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/search" component={SearchToDoItem} />
          <Route path="/add-todo" component={AddToDoItem} />
        </Switch>
      {isLoading ? <BounceLoader /> : <ToDoList />}
      </Router>
    </ThemeProvider>
  );
}

export default App;
