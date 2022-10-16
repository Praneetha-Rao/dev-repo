import { useEffect, useState } from 'react';
import Light from './Light';
import './App.css';

function App() {

  const [trafficColor, setColor] = useState('');
  const [intervalId, setIntervalId] = useState(0);

  const colors= ['red', 'yellow', 'green'];
  let i = 0;



  const startLightChange = () => {
    setColor('red');
    i=i+1;
     const timeout = setInterval(() =>{
      setColor(colors[i]);
      i=(i+1)% colors.length;
    },10000) 
    setIntervalId(timeout);
  }

  const stopLightChange = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    setColor('white');
    return
  }


  return (
    <div className="App">
      {colors.map((color) =>{
        return(
          <Light  color ={color} trafficColor={trafficColor}/>
        )
      })}
      <button className='startButton' onClick={startLightChange}>Start</button>
      <button  className='stopButton' onClick={stopLightChange}>Stop</button>
    
    </div>
  );
}

export default App;
