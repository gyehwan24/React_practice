import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  //const [keyword, setKeyword] = useState("");
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setToDo("");
  };
  const onClick = () => {
    setCount((current) => current + 1);
  };
  //const onChange = (event) => setKeyword(event.target.value);
  const onChangee = (event) => setToDo(event.target.value);
  // console.log("i run all the time");
  // useEffect(() => {
  //   console.log("Call the API");
  // }, []);
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 3) {
  //     console.log("Search For", keyword);
  //   }
  // }, [keyword]);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>My To Dos ({todos.length})</h2>
        <form onSubmit={onSubmit}>
          <input
            value={todo}
            onChange={onChangee}
            type="text"
            placeholder="Write your to do.."
          />
          <button>Add To Do</button>
        </form>
        <hr />
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <h1 className={styles.font}>Click : {count}</h1>
      <Button text={"Clike me!"} onClick={onClick} />
    </div>
  );
}

export default App;
