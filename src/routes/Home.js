import Button from "../components/Button";
import styles from "../App.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);
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

  const onChange = (event) => setToDo(event.target.value);
  //window.location.reload();
  return (
    <div className={styles.container}>
      <button>
        <Link to="/coin">Click here for coin page</Link>
      </button>

      <button>
        <Link to="/hello">Click here for hello</Link>
      </button>
      <div className={styles.item}>
        <h2>My To Dos ({todos.length})</h2>
        <form onSubmit={onSubmit}>
          <input
            value={todo}
            onChange={onChange}
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

export default Home;
