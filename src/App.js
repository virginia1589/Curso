import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';

function App() {
  return (
    <div >
      <NavBar/>
      <Home greeting="Bienvenidos a Virgilandia"/>
    </div>
  );
}

export default App;
