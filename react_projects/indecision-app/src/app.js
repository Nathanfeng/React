

const app = {
  title: "Indecision App",
  subtitle: "put your life in the hands of a computer",
  options: ["One", "Two"]
}

function getSubtitle(subtitle) {
  if (subtitle) {
    return <p>app.subtitle</p>
  }
}


const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>here are your options</p> : <p>there are no options</p>}
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


const appRoot = document.getElementById("app");

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
