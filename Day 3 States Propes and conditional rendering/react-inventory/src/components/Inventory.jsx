import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.
    function handle(y,value)
    {
      if(y==="book")
      {
        if(inv.books<=1)
        {
          return;
        }
        setInv({books:inv.books+value,notebooks:inv.notebooks,pens:inv.pens})
      }
      else if(y==="notebook")
      {
        if(inv.notebooks<=1)
        {
          return;
        }
        setInv({books:inv.books,notebooks:inv.notebooks+value,pens:inv.pens})
      }
      else if(y==="pens")
      {
        if(inv.pens<=1)
        {
          return;
        }
        setInv({books:inv.books,notebooks:inv.notebooks,pens:inv.pens+value})
      }
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>handle("book",1)}>+</button>
        <button className="circlularButton" onClick={()=>handle("book",-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handle("notebook",1)}>+</button>
        <button className="circlularButton" onClick={()=>handle("notebook",-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handle("pens",1)}>+</button>
        <button className="circlularButton" onClick={()=>handle("pens",-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};
