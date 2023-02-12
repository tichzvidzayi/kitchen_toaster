import React, {useState} from 'react';
import DisplayComponent from './Components/canvasComponent';
import BtnComponent from './Components/btnComponent';
import toaster from './toaster.svg'
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s;

  const run = () => {
  
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    } 
    if(updatedS === 45){
      stop();
      return setTime({ms:updatedMs, s:updatedS});
    }  
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS});
  
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0})
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const resume = () => start();
  return (
   
<div className="App">
      <header className="App-header">
      <img src={toaster} className="App-logo" alt="toaster" />
     <div className="clock-holder">
          <div className="stoptoast">
          <DisplayComponent time={time}/>
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
     </header>
    </div>
   
  );
}

export default App;