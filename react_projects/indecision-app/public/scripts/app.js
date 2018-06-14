"use strict";

var app = {
  title: "Indecision App",
  subtitle: "put your life in the hands of a computer",
  options: ["One", "Two"]
};

function getSubtitle(subtitle) {
  if (subtitle) {
    return React.createElement(
      "p",
      null,
      "app.subtitle"
    );
  }
}

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "here are your options"
  ) : React.createElement(
    "p",
    null,
    "there are no options"
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
