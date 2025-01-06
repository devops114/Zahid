
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Items from './pages/Items';

const App = () => {
   return (
       <Router>
           <div>
               <nav>
                   <ul>
                       <li>
                           <a href="/">Home</a>
                       </li>
                       <li>
                           <a href="/login">Login</a>
                       </li>
                       <li>
                           <a href="/items">Items</a>
                       </li>
                   </ul>
               </nav>
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/login" element={<Login />} />
                   <Route path="/items" element={<Items />} />
               </Routes>
           </div>
       </Router>
   );
};

export default App;

