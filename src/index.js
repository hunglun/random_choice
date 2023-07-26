import React from "react";
import ReactDom from "react-dom";

var date_obj = new Date();
var this_milliseconds = date_obj.getMilliseconds();
var customStyle = {};
function random_choice() {
  const choice = (this_milliseconds % 6) + 1;
  customStyle.display = "flex";
  customStyle.justifyContent = "center";
  customStyle.alignItems = "center";
  customStyle.background = "black";
  customStyle.align = "center";
  customStyle.fontSize = "400px";
  switch (choice) {
    case 1:
      customStyle.color = "green";
      break;
    case 2:
      customStyle.color = "yellow";
      break;
    case 3:
      customStyle.color = "red";
      break;
    case 4:
      customStyle.color = "pink";
      break;
    case 5:
      customStyle.color = "blue";
      break;
    case 6:
      customStyle.color = "purple";
      break;
    default:
      customStyle.color = "green";
      break;
  }
  return choice;
}

ReactDom.render(
  <div>
    <h1 style={customStyle} className="heading">
      {random_choice()}
    </h1>
  </div>,
  document.getElementById("root")
);
