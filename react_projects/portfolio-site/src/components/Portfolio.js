import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const Portfolio = (props) => (
  <div>
    <h1>This is my work</h1>
    <p>take a look around</p>
    <Link to="./Portfolio/1" >project {props.match.params.id}</Link>
  </div>
);

export default Portfolio;
