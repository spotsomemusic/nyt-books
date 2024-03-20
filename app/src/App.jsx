import React from 'react';
import CurrentBestSellers from './Component/CurrentBestSellers';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        {/* nav will go here*/}
      </header>
      <main>
        <div className="App">
          <Routes>
            <Route path="/" element={<CurrentBestSellers />} />
          </Routes>
        </div>
      </main>
      <footer>
        {/* dev information will go here*/}
      </footer>
    </>
  );
}

export default App;
