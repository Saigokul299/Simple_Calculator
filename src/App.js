// import logo from "./logo.svg";
import "./App.css";
import { Box, Button } from "@mui/material";
import { useState } from "react";
function App() {
  const [message, setMessage] = useState(null);
  const [mes2, setMes2] = useState(null);
  const m = (event) => setMessage(Number(event.target.value));
  const m2 = (event) => setMes2(Number(event.target.value));
  let [sig, setSig] = useState("+");
  let [ans, setans] = useState("");
  let [count, setCount] = useState(0);
  const s = () => {
    setCount(count + 1);
    if (sig == "+") {
      setans(message + mes2);
    } else if (sig == "-") {
      setans(message - mes2);
    } else if (sig == "*") {
      setans(message * mes2);
    } else {
      setans(message / mes2);
    }
  };
  const ap = ["+", "-", "*", "/"];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Total number of operations : {count}
      </h1>
      <div className="sam">
        <Box sx={{ marginRight: 5 }}>
          <input
            name="message"
            value={message}
            type="number"
            id="sas"
            onChange={m}
          ></input>
        </Box>
        <Button sx={{ fontSize: 30 }} disabled>
          {sig}
        </Button>
        <Box sx={{ marginLeft: 5 }}>
          <input name="mes2" type="number" value={mes2} onChange={m2}></input>
        </Box>
        <h3 style={{ marginLeft: "30px" }}>=</h3>
        <Box sx={{ marginLeft: 5 }}>
          <input value={ans} disabled></input>
        </Box>
      </div>
      <div className="but">
        {ap.map((i) => (
          <Button onClick={() => setSig(i)}>{i}</Button>
        ))}
      </div>
      <div className="qw">
        <Button
          onClick={() => {
            setMessage("");
            setMes2("");
            setSig("+");
          }}
        >
          Reset
        </Button>
        <Button onClick={s}>Submit</Button>
      </div>
    </div>
  );
}

export default App;
