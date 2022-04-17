import { useState } from "react";
import "./counter.css"

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handlecounter(t){
      if(t%2===0)
      {
          setCounter(counter+1)
      }
      else{
          setCounter(counter-1)
      }
  }
  function Double()
  {
      setCounter(counter*2)
  }

  return (
    <div>
      <div className= {counter%2===0?"greenclass":"redclass"}>counter:{counter}</div>
      <button onClick={()=>handlecounter(Math.floor(Math.random() * 500))}>Increase 1 OR Decrease 1</button>
      <button onClick={Double}>Double</button>
    </div>
  );
}
