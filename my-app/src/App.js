import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="ComputerChacha" />
      <div className="container">
        <TextForm heading="Enter your text here to analyze" />
      </div>
    </>
  );
}

export default App;
