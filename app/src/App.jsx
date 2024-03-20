import React from 'react';
import CurrentBestSellers from './Component/CurrentBestSellers';
import './App.css';
import { Routes, Route } from 'react-router-dom';


export default App;

function App() {
  return (
    <>
      <header>
        {/* nav will go here*/}
      </header>
      <main>
    <div className="App">
      <CurrentBestSellers />
    </div>
      <Routes>
        <Route path="/" element={<CurrentBestSellers />} />
      </Routes>
      </main>
      <footer>
        {/* dev information will go here*/}
      </footer>
    </>
  )
}