

const app = {
  title: "Indecision App",
  subtitle: "put your life in the hands of a computer",
  options: ["One", "Two"]
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderJsx();
  }
};

const erase = () => {
  app.options = [];
  renderJsx();
}

const createList = () => {
  return app.options.map((option) => {
    <li key={option}>Option: {option}</li>;
  });
  renderJsx()
}

const makeChoice = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
}
const renderJsx = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>here are your options</p> : <p>there are no options</p>}
      <button disabled={app.options.length<=1} onClick={makeChoice}>What should I do?</button>
      <button onClick={erase}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>Option: {option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="test" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}


const appRoot = document.getElementById("app");
renderJsx();
