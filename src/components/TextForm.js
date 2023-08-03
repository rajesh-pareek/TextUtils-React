import React, { useEffect, useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("clicked uppercase");
    setText("You have clicked on convert to uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    console.log("clicked uppercase");
    setText("You have clicked on convert to uppercase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Successfully cleared", "success");
  };
  const handleSpeechClick = () => {
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Successfully spoke", "success");
    };
    speak();
  };
  const handleCopy = () => {
    const text = document.getElementById("textAreaExample6");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Successfully Copied", "success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/); //Regex expression
    setText(newText.join(" "));
    props.showAlert("Successfully removed extra spaces", "success");
  };

  //we are using useEffect to change the color of the text and background and to avoid infinte re-rendering

  return (
    <>
      <div className="container my-4" style={{ color: props.mode==="light"?"black":(props.mode==="dark"?"white":"crimson") }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textAreaExample6"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor:props.mode==="light"?"white":"black", color: props.mode==="light"?"black":(props.mode==="dark"?"white":"crimson") }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpeechClick}>
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" style={{ color: props.mode==="light"?"black":(props.mode==="dark"?"white":"crimson") }}>
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length === 0 ? "Enter your text to see its preview here" : text}
        </p>
      </div>
    </>
  );
}
