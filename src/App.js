// import logo from "./logo.svg";
import "./App.css";
import { Box, Button } from "@mui/material";
import { useState } from "react";
function App() {
  const [number1, setNumber2] = useState(null);
  const [number2, setNuumber1] = useState(null);
  const m = (event) => setNumber2(Number(event.target.value));
  const m2 = (event) => setNuumber1(Number(event.target.value));
  let [sign, setSign] = useState("+");
  let [answer, setAnswer] = useState("");
  let [count, setCount] = useState(0);
  const s = () => {
    setCount(count + 1);
    if (sign == "+") {
      setAnswer(number1 + number2);
    } else if (sign == "-") {
      setAnswer(number1 - number2);
    } else if (sign == "*") {
      setAnswer(number1 * number2);
    } else {
      setAnswer(number1 / number2);
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
            name="number1"
            value={number1}
            type="number"
            id="sas"
            onChange={m}
          ></input>
        </Box>
        <Button sx={{ fontSize: 30 }} disabled>
          {sign}
        </Button>
        <Box sx={{ marginLeft: 5 }}>
          <input
            name="number2"
            type="number"
            value={number2}
            onChange={m2}
          ></input>
        </Box>
        <h3 style={{ marginLeft: "30px" }}>=</h3>
        <Box sx={{ marginLeft: 5 }}>
          <input value={answer} disabled></input>
        </Box>
      </div>
      <div className="but">
        {ap.map((i) => (
          <Button onClick={() => setSign(i)}>{i}</Button>
        ))}
      </div>
      <div className="qw">
        <Button
          onClick={() => {
            setNumber2("");
            setNuumber1("");
            setSign("+");
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
