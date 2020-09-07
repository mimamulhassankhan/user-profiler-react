import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import UserSection from './Components/Body Block/UserSection';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <UserSection/>
    </div>
  );
}

export default App;
