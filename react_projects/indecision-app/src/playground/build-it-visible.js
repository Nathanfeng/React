class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {visibility: false};
  }

  changeState() {
    this.setState((prevState) => {
      return {visibility: !prevState.visibility};
    })
 }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.changeState}>{this.state.visibility ? "hide details" : "show details"}</button>
        {this.state.visibility && <p>peek a boo!</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))
//
//
// const app = {
//   title: "Visibility Toggle"
// }
//
// const appRoot = document.getElementById("app")
//
// let state = false;
//
// const changeState = () => {
//   if (state) {
//     state = false;
//   } else {
//     state = true;
//   };
//   run();
// }
//
// const run = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={changeState}>{state ? "show details" : "hide details"}</button>
//       {state && <p>peek a boo!</p>}
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot)
// }
//
// run()
