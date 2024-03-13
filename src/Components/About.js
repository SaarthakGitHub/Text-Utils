import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    borderRadius: "20px",
  });
  const [button,setButton] = useState("Dark");

  function toggleStyle() {
    console.log("clicked");
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        borderRadius: "20px",
      });
      setButton("Dark");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
        borderRadius: "20px",
      });
      setButton("Light");
    }
  }

  return (
    <div className=" w-100 h-100 container my-5" style={myStyle}>
      <h1> About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <div
            id="collapseOne"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3" onClick={toggleStyle}>
        Enable {button} mode
      </button>
    </div>
  );
}
