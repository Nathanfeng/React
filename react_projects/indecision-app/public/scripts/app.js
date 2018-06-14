"use strict";

var app = {
  title: "Indecision App",
  subtitle: "put your life in the hands of a computer"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item1"
    ),
    React.createElement(
      "li",
      null,
      "Item2"
    )
  )
);

// var user = {
//   name: 'Nat',
//   age: 28
// }

// var templateTwo = (
//   <div>
//     <h1>{user.name}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: New Jersey</p>
//   </div>
// )


var appRoot = document.getElementById("app");

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
