import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment }  from 'react';
import {BrowserRouter as Router,Route,Switch }  from "react-router-dom";
import Login from './components/Login';
import Juegos from './components/Juegos';
import Ayuda from './components/Ayuda';
import Usuarios from './components/Usuarios';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import NavBar from './components/NavBar';




export default function App() {
  return (
    <Fragment>
      
      <Router>
      <NavBar />
      <Switch>
        <Route path="/" children={({ match }) => (match ? ( <HomePage match={match} animate={true} />) : (<NotFoundPage />))}/>
        <Route path="/juegos" children={({ match }) => (match ? ( <Juegos match={match} animate={true} />) : (<NotFoundPage />))}/>
        <Route path="/usuarios" children={({ match }) => (match ? ( <Usuarios match={match} animate={true} />) : (<NotFoundPage />))}/>
        <Route path="/ayuda" children={({ match }) => (match ? ( <Ayuda match={match} animate={true} />) : (<NotFoundPage />))}/>
        <Route path="/signup" children={({ match }) => (match ? ( <Signup match={match} animate={true} />) : (<NotFoundPage />))}/>
        <Route path="/login" children={({ match }) => (match ? ( <Login match={match} animate={true} />) : (<NotFoundPage />))}/>

        <Route path="*" element={<NotFoundPage />} />
      </Switch>
      </Router>
    </Fragment>

    
  );
}

