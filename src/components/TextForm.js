import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      {" "}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button
          className="btn btn-primary my-2"
          onClick={handleUpClick}
          type="submit"
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleLoClick}
          type="submit"
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleCopy}
          type="submit"
        >
          Copy Text
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to perview it here"}</p>
      </div>
    </>
  );
}
