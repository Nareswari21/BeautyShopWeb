import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Product from './components/pages/Product';
import About from './components/pages/About';
import Home from './components/pages/Home';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product' component={Product} />
          <Route path='/about' component={About} />
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
