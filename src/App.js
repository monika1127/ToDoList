import { Fragment, useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users/1572/todos")
      .then((res) => res.json())
      .then((res) => setToDos(res.data));
  }, []);

if(toDos.length===0) return <div>Loading...</div>

  return (
    <Fragment>
      {toDos.map((item) => (
        <div>{item.title}</div>
      ))}
    </Fragment>
  );
}

export default App;
