import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const API_KEY =
    "MjY0MTBfZTQ4MGFhMDIyODU5ZWMzNzlhNDE5YWMzNTk5NDg2YmUyZTRjOTQwOV8xNjYyNjU3NTAy";
  function getReq() {
    axios
      .get(`https://asli-fun-fact-api.herokuapp.com/ `)
      .then((res) => {
        setData(res.data.data.fact);
      })
      .catch((err) => console.error(err));
  }
  const example = "Your fact"
  return (
    <div className="App">
      <div className="wrapper">
        <p>{data || example}</p>
        <button
          onClick={() => {
            getReq();
          }}
        >
          Funny fact
        </button>
      </div>
    </div>
  );
}

export default App;
