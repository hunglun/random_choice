import React from "react";
import ReactDom from "react-dom";

var date_obj = new Date();
var this_milliseconds = date_obj.getMilliseconds();
var customStyle = {};
function generateRandomColor() {
  // Generate three random numbers between 0 and 255.
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  // Combine the numbers to create a hexadecimal color code.
  const color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

  return color;
}
function random_choice() {
  const choice = (this_milliseconds % 6) + 1;
  customStyle.display = "flex";
  customStyle.justifyContent = "center";
  customStyle.alignItems = "center";
  customStyle.background = "black";
  customStyle.align = "center";
  customStyle.font = "Sassoon Primary";

  customStyle.fontSize = "800px";
  customStyle.height = "100%";
  customStyle.width = "100%";
  customStyle.color = generateRandomColor();
  return choice;
}

ReactDom.render(
  <div style={customStyle}>{random_choice()}</div>,
  document.getElementById("root")
);
