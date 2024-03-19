import React from 'react';
import CurrentBestSellers from './Component/CurrentBestSellers';
import './App.css';


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
      </main>
      <footer>
        {/* dev information will go here*/}
      </footer>
    </>
  )
}