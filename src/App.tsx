import React from 'react';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import HomePage from './Pages/HomePage'
import SignInPage from './Pages/SignInPage'
function App() {
  return (
    <div className="App" >
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/sign-in' element={<SignInPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
