import React, { useState } from "react";
function TextForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    const updatedText = event.target.value;
    setText(updatedText);
  }

  function convert() {
    console.log("clicked");
    const updatedText = text.toUpperCase();
    setText(updatedText);
    props.showAlert("Coverted to UpperCase","success")
  }
  function lconvert() {
    console.log("clicked");
    const updatedText = text.toLowerCase();
    setText(updatedText);
    props.showAlert("Converted to LowerCase","success")
  }
  function clear() {
    setText("");
    props.showAlert("Cleared","danger")
  }
  function copyText(){
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success")
  }

  return (
    <>
    <div className="container mb-3" style={{color: props.modeText === "dark" ? "black" : "white"}}>
      <h1 >{props.heading}</h1>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        value={text}
        style={{backgroundColor: props.mode === "light" ? "white" : "grey", color: props.modeText === "dark" ? "black" : "white"}}
        onChange={handleChange}
        rows="7"
        autoFocus
      />
      <div className="row">
      <button className="btn px-0 btn-primary my-2 col-2" onClick={convert}>
        Convert to UpperCase
      </button>
      <button className="btn  btn-primary my-2 mx-1 col-2" onClick={lconvert}>
        Convert to LowerCase
      </button>
      <button className="btn  btn-primary my-2 col-1" onClick={copyText}>
        Copy
      </button>
      <button className="btn  btn-danger my-2 ms-auto col-1" onClick={clear}>
        Clear
      </button>
      </div>
      </div>
    <div className="container"  style={{color: props.modeText === "dark" ? "black" : "white"}}>
      <h1> Your text Summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h5>Preview</h5>
      <p><b>{text.toLowerCase()}</b></p>
    </div>
    </>
  );
}

export default TextForm;
