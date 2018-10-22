import React, { Component } from 'react';
import { Textfield, Button} from 'react-mdl';

const host = 'https://ec2-18-218-218-216.us-east-2.compute.amazonaws.com:8080';
//const host = 'http://192.168.15.21:8080';

class Login extends Component{

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        };
    }

    handleInputChange = (e) => {

        console.log(e.target.name);
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }


    submitForm = () => {

        fetch(
            host + '/bff/login',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",

                body: JSON.stringify(this.state)
            }
        ).then((response) => response.text())
        .then(token => console.log(token));  
        
        console.log(this.state);
    }

    render(){

        return (
            <div>
                <div className = 'register-form'>
                
                <Textfield
                    value = {this.state.email}
                    name = 'email'
                    onChange = {(e) => this.handleInputChange(e)} 
                    label= "Email"
                    floatingLabel
                    style={{width: '200px'}}
                />

                <Textfield
                    value = {this.state.senha}
                    name = 'senha'
                    onChange = {(e) => this.handleInputChange(e)} 
                    label= "Senha"
                    floatingLabel
                    style={{width: '200px'}}
                />
                
                </div>
                <Button raised colored ripple mini onClick = {this.submitForm}>Entrar</Button> 
            </div>
        );
    }
}

export default Login;