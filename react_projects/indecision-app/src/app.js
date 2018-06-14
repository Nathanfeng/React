
var app = {
  title: "Indecision App",
  subtitle: "put your life in the hands of a computer"
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item1</li>
      <li>Item2</li>
    </ol>
  </div>
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
