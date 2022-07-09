import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const onChange = () => {
    setCount((current) => current + 1);
  };
  return (
    <div>
      <h1 className={styles.font}>Click : {count}</h1>
      <Button text={"Clike me"} onClick={onChange} />
    </div>
  );
}

export default App;
