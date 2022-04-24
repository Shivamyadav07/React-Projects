import { useContext } from "react";
import "./App.css";
import { DivContext } from "./context/maincontext";
import { Innerdiv, Maindiv, Mydiv } from "./styledcomponents/style";
import { Logo } from "./styledcomponents/style";
import { Button } from "./styledcomponents/style";
import { Myimage } from "./styledcomponents/style";


function App() {
  const {Toggle,handletoggle}=useContext(DivContext);

  const mylogo = [
    {
      src: "https://cdn-icons.flaticon.com/png/128/2567/premium/2567943.png?token=exp=1650769277~hmac=024c88ec68e884bc2797db9a0c38715d",
    },
    {
      src: "https://cdn-icons.flaticon.com/png/512/819/premium/819865.png?token=exp=1650770280~hmac=921035860e8bf8aa324dc75b2af85eb5",
    },
    {
      src: "https://t3.ftcdn.net/jpg/03/36/05/70/240_F_336057041_WrrsFfnUg6ijLwQgTYJ4JUNIC7Jh1CqN.jpg",
    },
    {
      src: "https://cdn-icons.flaticon.com/png/128/2594/premium/2594058.png?token=exp=1650771241~hmac=b3ccfa06ca34420d0d3bb77ad98d1b3c",
    },
    {
      src: "https://t4.ftcdn.net/jpg/04/66/96/35/240_F_466963590_OeKdrYK6R2I56VrZKaJ3C4SL3EKa9iiC.jpg",
    },
    {
      src: "https://cdn-icons.flaticon.com/png/128/2040/premium/2040504.png?token=exp=1650771354~hmac=57a1fd1dd15a93f2358d2f41a691238b",
    },
  ];
  return (
    <div className={Toggle===true?"light":"dark"}>
      <Mydiv>
        <Myimage src="data:image/jpeg;base64,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" />
        {mylogo.map((e) => {
          return (
            <Button>
              <Logo src={e.src} />
            </Button>
          );
        })}
        <Button
          style={{
            "borderRadius": "50%",
            marginTop: "100px",
            height: "40px",
            width: "40px",
            border: "0px",
          }}
        >
          <Logo src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" />
        </Button>
      </Mydiv>
      <Maindiv>
        <h1>My Dashboard</h1>
        <button onClick={()=>{handletoggle({Toggle})}}>Change Mode</button>
        <Innerdiv></Innerdiv>
      </Maindiv>
    </div>
  );
}

export default App;
