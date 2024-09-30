import React from 'react';
import Header from './components/Header';
import Articles from './components/Articles';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Articles />
    <Tutorials />
    <Footer />
  </div>
);

export default App;
