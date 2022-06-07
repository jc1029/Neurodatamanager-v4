import React from 'react';
import  '../assets/css/Login.css';

import axios from 'axios';


let url =" http://localhost:8080/api/signup/"
class Signup extends React.Component{

  state ={
    form:{
      "id": 0,
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
    console.log("url:"+url)
    console.log("datos:"+this.state.form.email)
    axios.post(url,this.state.form)
    
    .then (response=>{
      console.log("response:"+response.status)
      if (response.status===200){
        this.setState({
          error : true,
          errorMsg:"Usuario grabado"+response.data.name
          })
        console.log(response.data.name) 
      }
      else{
            this.setState({
              error : true,
              errorMsg:"Grabacion cancelada"
            })
          }
        })
  }
  
    render(){
    return(
      <React.Fragment>
          <div className="wrapper fadeInDown">
  <div id="formContent">
    <h1>Registro en el sistema</h1>
    <p></p>
    <p></p>

    <form onSubmit={this.manejadorSubmit} >
    <input type="text"  className="fadeIn second" name="name" placeholder="Nombres" onChange={this.manejadorChange}/>
    <input type="text"  className="fadeIn second" name="lastname" placeholder="Apellidos" onChange={this.manejadorChange}/>
    <input type="text"  className="fadeIn second" name="email" placeholder="email" onChange={this.manejadorChange}/>
      <input type="password"  className="fadeIn third" name="password" placeholder="password" onChange={this.manejadorChange}/>
      <input type="submit" className="fadeIn fourth"onClick={this.manejadorBoton} value="Grabar"/>
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

export default Signup
