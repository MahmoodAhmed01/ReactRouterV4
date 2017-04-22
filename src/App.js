/**
 * Created by Mahmood on 4/23/2017.
 */

import React, { Component } from 'react';
import logo from './logo.svg'
import {BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => (
    <h1>Home</h1>
)

const App = () => (
    <Router>
        <Route path="/" component={Home}/>
    </Router>
)

export default App;
