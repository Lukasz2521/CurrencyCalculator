import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/Home/HomePage';
import CalculatorPage from './components/Calculator/CalculatorPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/calculator" component={CalculatorPage} />
    </Route>
);