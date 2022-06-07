import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes , Route  } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';


function App() {
  return (
    
    <div>
<React.Fragment>
    <Router>
      <Routes>
          <Router path = "/" exact > 
            <Login />
          </Router>
      </Routes>
    </Router>
</React.Fragment>

      </div>
    
    );    
  }

export default App;
