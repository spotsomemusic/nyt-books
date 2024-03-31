import React from 'react';
import CurrentBestSellers from './Component/CurrentBestSellers';
import SearchByDate from './Component/SearchByDate.jsx';
import NavBar from './Component/NavBar.jsx'
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
      <style>
          {/* @import url('https://fonts.googleapis.com/css2?family=Tac+One&display=swap'), */}
          @import url('https://fonts.googleapis.com/css2?family=Tac+One&family=Workbench&display=swap')
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Tac+One&display=swap'),
        </style>
        <NavBar />
      </header>
      <main>
        <div className="App">
          <Routes>
            <Route path="/" element={<CurrentBestSellers />} />
            <Route path="/date" element={<SearchByDate />} />
          </Routes>
        </div>
      </main>
      <footer>
        {/* Footer content here */}
      </footer>
    </>
  );
}

export default App;

//original code before i started fucking around
// function App() {
//   return (
//     <>
//       <header>
//         {/* nav will go here*/}
//       </header>
//       <main>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<CurrentBestSellers />} />
//            <Route path="/search-by-date" element={<SearchByDate />} />
//           </Routes>
//         </div>
//       </main>
//       <footer>
//         {/* dev information will go here*/}
//       </footer>
//     </>
//   );
// }

// export default App;