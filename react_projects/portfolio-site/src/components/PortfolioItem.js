import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const PortfolioItem = (props) => (
  <div>
    <h1>This is my first project</h1>
    <p>check it  out {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;
