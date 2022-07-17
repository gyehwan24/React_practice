import { Routes, Route } from "react-router-dom";
import CoinApp from "./routes/CoinApp";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/hello" element={<h1>Hello!</h1>} />
      <Route path="/coin" element={<CoinApp />} />

      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
