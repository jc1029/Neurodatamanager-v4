import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends React.Component{
    render(){
    
        return(
        <div>
            <p></p>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        
                        </div>
                        <ul class="nav navbar-nav">
                        <li><NavLink to= "/">Home </NavLink></li>
                        <li><NavLink to= "/Juegos">Juegos </NavLink></li>
                        <li><NavLink to= "/Usuarios">Usuarios </NavLink></li>
                        <li><NavLink to= "/Ayuda"> Ayuda  </NavLink></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                        <li><NavLink to= "/signup"><span className="glyphicon glyphicon-user  "></span> Sign Up</NavLink></li>
                        <li><NavLink to= "/login "><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
                        </ul>
                    </div>
                </nav>
            

        </div>
        );
    }
}

export default Login
