import React from 'react';
import './App.css';
import { Header, Footer } from './components/Layouts'
import Exercises from './components/Exercises'

function App() {
  return (
    <div className="App">
      <Header />
      <Exercises />
      <Footer />
    </div>
  );
}

export default App;
