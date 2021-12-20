import React, { useState } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import PostContext from './PostContext';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);

  return (
    <main>
      <Navbar />
      <div className="ml-3">
        <PostContext.Provider value={{comments, setComments}}>
          <Routes />
        </PostContext.Provider>
      </div>
    </main>
  );
}

export default App;
