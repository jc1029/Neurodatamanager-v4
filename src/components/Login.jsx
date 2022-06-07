import React from 'react';
import  '../assets/css/Login.css';
import {Apiurl} from '../services/apirest';
import axios from 'axios';


let url =Apiurl+ 'api/users/'
class Login extends React.Component{

  state ={
    form:{
      "id": 1,
      "name": "",
      "lastname": "",
      "email": "",
      "password": ""
    },
    error:false,
    errorMsg:""
    }

  
manejadorChange  = async e=>{
  await this.setState({
    form:{
      ...this.state.form,
      [e.target.name]:e.target.value    ,
      
    }
  })
  console.log("change"+this.state.form)
  }
  

  manejadorSubmit =e=>{
    e.preventDefault();
  }

  manejadorBoton=()=>{
    console.log("url:"+url+"")
    console.log("datos:"+this.state.form.email)
    axios.get(url,this.state.form)
    
    .then (response=>{
      console.log("response:"+response.status)
      if (response.status===200){
        this.setState({
          error : true,
          errorMsg:"registro encontrado "+response.data.name
          })
        console.log(response.data.name) 
      }
      else{
            this.setState({
              error : true,
              errorMsg:"Usuario no creado"
            })
          }
        })
  }
  
    render(){
    return(
      <React.Fragment>
          <div className="wrapper fadeInDown">
  <div id="formContent">
    

    <form onSubmit={this.manejadorSubmit} >
      <input type="text"  className="fadeIn second" name="email" placeholder="login" onChange={this.manejadorChange}/>
      <input type="password"  className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange}/>
      <input type="submit" className="fadeIn fourth"onClick={this.manejadorBoton} value="Log In"/>
    </form>

{ this.state.error &&
   
   <div class="alert alert-danger" role="alert">
     {this.state.errorMsg}
   
 </div>
 
} 
  </div>
</div>
      </React.Fragment>

        );
    }
}

export default Login
