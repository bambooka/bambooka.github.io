import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Projects from './Projects'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;