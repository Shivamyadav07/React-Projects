import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [form , setforms]=useState(<ShowStudents />)
  function Showforms() {
    console.log("shivam yadav")
   setforms(<AddStudent />)
  }
  return (
    <div className="App">

      <button className="togglebtn" onClick={Showforms}>Add a student</button>
      {form}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;


