import React from 'react';
// import Header from './Header.js'
import ProjectList from './ProjectList.js'
import './App.css';
import {Layout, Header, Navigation, Content, Drawer} from "react-mdl";
import Main from './components/Main';
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
