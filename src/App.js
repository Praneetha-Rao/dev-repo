import { useState } from 'react';
import Light from './Light';
import './App.css';

function App() {

  const [trafficColor, setColor] = useState('');

  const colors= ['red', 'yellow', 'green'];
  let i = 0;

  var timeout;
  const myInterval = () => {
     timeout = setInterval(() =>{
      setColor(colors[i]);
      i=(i+1)% colors.length;
    },5000) 
  }

  const stopLightChange = () => {
    clearInterval(timeout);
    setColor('white');

  }


  return (
    <div className="App">
      {colors.map((color) =>{
        return(
          <Light  color ={color} trafficColor={trafficColor}/>
        )
      })}
      <button clasName= 'startButton'onClick={myInterval}>Start</button>
      <button  className= 'stopButton'onClick={stopLightChange}>Stop</button>
    
    </div>
  );
}

export default App;
