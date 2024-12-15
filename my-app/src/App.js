import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#03012b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
    <>
      <Navbar title="ComputerChacha" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter your text here to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
