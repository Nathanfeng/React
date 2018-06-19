
const renderJsx = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>here are your options</p> : <p>there are no options</p>}
      <p>{app.options.length}</p>
      <button onClick={erase}>Remove All</button>
      // {
      //   [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
      // }
      <ol>
        {
          app.options.map((option) => {
            <li key={option}>Option: {option}</li>;
          })
        }
        <li>a</li>
        <li>b</li>
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="test" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}
