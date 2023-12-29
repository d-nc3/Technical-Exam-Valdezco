import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './pages/Header/Header'; 
import Home from'./pages/Body/Home';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <>
    <Router>
     <Header/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
   
    </Router>

    </>
  );
}


export default App;
