import React, { Component } from 'react';
import InputCustomizado from './componentes/InputCustomizado';

export default class FormLogin extends Component{

    constructor() {
        super();
        this.state = {lista : [], login:"", password:""};
        this.enviaForm = this.enviaForm.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    enviaForm(event){
        event.preventDefault();

        fetch("https://afiliart.herokuapp.com/courses",{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({login:this.state.login, password:this.state.password})
        })
            .then ((response) =>response.json())
            .then((data) => this.state.lista.push(data))

            .catch(erro =>{
                alert("Dados Inválidos",erro);
            })

        return console.log(this.state.lista);

    }

    setLogin(event){
        this.setState({login:event.target.value});
    }

    setPassword(event){
        this.setState({password:event.target.value});
    }

    render() {
        return(

            <form className="pure-form" onSubmit={this.enviaForm} method="post">
                <fieldset>
                    <legend>Login User</legend>

                    <InputCustomizado id="login" type="text" name="login" placeholder="login" value={this.state.login} onChange={this.setLogin} required/>
                    <InputCustomizado id="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.setPassword} required/>


                    <button type="submit" className="pure-button pure-button-primary">Sign in</button>
                </fieldset>
            </form>

        );
    }

}


export class LoginBox extends  Component{

    constructor(){
        super();
    }


    render(){
        return(
            <div>
                <FormLogin/>
            </div>

        );
    }
}