console.log("hi")

const app = {
  title: "Visibility Toggle"
}

const appRoot = document.getElementById("app")

let state = false;

const changeState = () => {
  if (state) {
    state = false;
  } else {
    state = true;
  };
  run();
}

const run = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={changeState}>{state ? "show details" : "hide details"}</button>
      {state && <p>peek a boo!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot)
}

run()
