import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Go Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Go add an expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Go edit an expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Go get some help</NavLink>
  </header>
);

export default Header;
