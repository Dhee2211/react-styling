//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
const date = new Date(2019, 1, 1, 14);
let time = date.getHours();

let text;

const customStyle = {
  color: ""
};

if (time < 12) {
  customStyle.color = "green";
  text = "Good Morning";
} else if (time < 17) {
  customStyle.color = "red";
  text = "Good Afternoon";
} else if (time > 17) {
  customStyle.color = "blue";
  text = "Good Night";
}

console.log(time);

ReactDOM.render(
  <h1 style={customStyle}>{text}</h1>,
  document.getElementById("root")
);
