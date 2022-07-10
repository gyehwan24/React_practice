import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCount((current) => current + 1);
  };
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("Search For", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1 className={styles.font}>Click : {count}</h1>
      <Button text={"Clike me!"} onClick={onClick} />
    </div>
  );
}

export default App;
