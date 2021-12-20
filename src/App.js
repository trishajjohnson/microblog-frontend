import React, { useState } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import PostContext from './PostContext';
import './App.css';

function App() {
  // const [posts, setPosts] = useState([
  //   {
  //       id: "1",
  //       title: "Why Does the Sun Shine?", 
  //       description: "An examination of physics.", 
  //       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //       id: "2",
  //       title: "Why Is the Sky Blue?", 
  //       description: "A treatise on color theory.", 
  //       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //       id: "3",
  //       title: "Who is Santa Claus?", 
  //       description: "Discovering the man in the infamous red suit.", 
  //       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //       id: "4",
  //       title: "Is There a God?", 
  //       description: "Questions from a doubtful atheist.", 
  //       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   }
  // ]);

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
