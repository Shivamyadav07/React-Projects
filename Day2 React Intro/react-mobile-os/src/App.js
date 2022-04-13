import logo from './logo.svg';
// import './App.css';

function App() {
  const OperatingSystem=["Android","Blackberry","iphone","Windows Phone"];
  const Makers=["Sansung","HTC","Micromax","Apple"];
  return (
    <h2 className="App">Mobile Operating System
      {OperatingSystem.map(e => {
          return <Os operating={e}/>
      })}

    {/* calling defined and proviging the passing the argument to the function */}

      Mobile Manufacturers
      {Makers.map(e=>{
        return <Manufacturers mnf={e}  />
      })}
    </h2>
  );
}
// creating function and giving taking object argument 

function Os({operating})
{
 return <li>{operating}</li>
}

function Manufacturers({mnf})
{
  return <li>{mnf}</li>
}

export default App;
