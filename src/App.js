import React from 'react';
import './App.css';
import ListMovies from './components/ListMovies';
import { BrowserRouter,Routes,Route,} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/components/" element={<ListMovies />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

{/* <div className='App'>
      <header className="App-header">
      </header>
      <main>
        <ListMovies />
      </main>
    </div> */}
