import React from 'react';
import './Styles/App.css';
import NavBar from "./Components/NavBar";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
