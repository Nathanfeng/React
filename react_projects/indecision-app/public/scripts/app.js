"use strict";

console.log("hi");

var app = {
  title: "Visibility Toggle"
};

var appRoot = document.getElementById("app");

var state = false;

var changeState = function changeState() {
  if (state) {
    state = false;
  } else {
    state = true;
  };
  run();
};

var run = function run() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "button",
      { onClick: changeState },
      state ? "show details" : "hide details"
    ),
    state && React.createElement(
      "p",
      null,
      "peek a boo!"
    )
  );

  ReactDOM.render(template, appRoot);
};

run();
