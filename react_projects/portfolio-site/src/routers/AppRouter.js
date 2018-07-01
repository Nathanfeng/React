import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/Portfolio" component={Portfolio} exact={true} />
          <Route path="/Portfolio/:id" component={PortfolioItem} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
