// import logo from './logo.svg';
import image from "./logo bakery.png";
import "./App.css";

function App() {
  const links = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <div className="innerdiv">
        <img src={image} alt="shivam"></img>
        {links.map((e) => {
          return <Link className="App" shivam={e} />;
        })}
        <button>Contact</button>
      </div>
    </div>
  );
}

function Link({ shivam }) {
  return <p className="links">{shivam} </p>;
}
export default App;
