import { useState } from "react";

function Movie() {
  const [loading, setLoading] = useState(true);
  return <div>{loading ? <h1>loading...</h1> : null}</div>;
}
