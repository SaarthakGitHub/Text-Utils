import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("dark");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      setModeText("light");
      document.querySelector("body").style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled","light");
      document.title = 'TextUtils - DarkMode';
    } else {
      setMode("light");
      setModeText("dark");
      // document.getElementById("root").style.backgroundColor = "white";
      document.querySelector("body").style.backgroundColor = "white";
      showAlert("Light mode has been enabled","dark");
      document.title = "TextUtils - LightMode";
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils"
        aboutText="About us"
        mode={mode}
        modeText={modeText}
        toggleMode={toggleMode}
      />
      <Alert obj={alert}/>
      <div className=" container my-3">
        <Routes>
          <Route path="/" element={
            <TextForm heading="Enter text to analyse" mode={mode} modeText={modeText} showAlert = {showAlert} />
          } />
          <Route path="/about" element={<About/>} />
        </Routes>
        {/* <TextForm heading="Enter text to analyse" mode={mode} modeText={modeText} showAlert = {showAlert} /> */}
      </div>
      </Router>
    </>
  );
}

export default App;






















// // {/* <Router>
// <Navbar title="TextUtils"
// aboutText="About us"
// mode={mode}
// modeText={modeText}
// toggleMode={toggleMode}
// />
// <Alert obj={alert}/>
// <div className=" container my-3">
// <Routes>
// <Route exact path="/">
//   <TextForm
//     heading="Enter text to analyse"
//     mode={mode}
//     modeText={modeText}
//     showAlert = {showAlert}
//   />
// </Route>
// <Route path="/about">
//   <About />
// </Route>
// </Routes>
// </div>
// {/* <About /> */}
// </Router> 
// */}