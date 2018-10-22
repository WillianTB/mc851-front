import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Register from './register';
import Login from './login';

class LoginPage extends Component{

    render(){

        return (
            
            <div>

                <Grid className = 'form-landing-grid'>
                    <div className = 'form-banner-text'>
                            <h1> Login</h1>
                            <p> Possui cadastro? Se sim, coloque seu email e senha abaixo</p>
                            <Login/>
                    </div>
                    <hr></hr>
                    <div className = 'form-banner-text'>
                            <h1> Cadastrar</h1>
                            <Register/>
                    </div>
                </Grid>
                
            </div>
        );
    }
}

export default LoginPage;