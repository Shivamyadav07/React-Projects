import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  return (
    <div className="App">
      <div>mode is :{mode}</div>
      <Button
        mode={mode}
        onClick={() => {
          alert("why you clicked me say sorry");
        }}
      >
        click me
      </Button>
      <Button onClick={()=>{setmode(mode==="light"?"dark":"light")}} >change mode</Button>
    </div>
  );
}

export default App;
