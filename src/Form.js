import React, { Component } from 'react';

class Form extends Component{

constructor (props) {
    super(props);
    this.state = {
         email: '',
         senha: '',
         cpf: '',
         nome: '',
         dataDeNascimento: '',
         telefone:'',
         idGrupo:'',
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

    fetch('http://ec2-18-231-28-232.sa-east-1.compute.amazonaws.com:3002/register', {
        headers: {
              'Content-Type': 'application/json'
            },
        method: "POST",
        body: JSON.stringify(this.state)
    }).then((response) => console.log(response));
}

    render(){

        return (

            <div className = 'form'>
                <input type = 'text' placeholder = 'email' value = {this.state.email}
                name='email'
                onChange = {(e) => this.handleInputChange(e)}
                />
                <input type = 'password' placeholder = 'senha' value = {this.state.senha}

                    name='senha'
                    onChange = {(e) => this.handleInputChange(e)}
                />

                <input type = 'text' placeholder = 'cpf'value = {this.state.cpf}
                    name='cpf'
                    onChange = {(e) => this.handleInputChange(e)}
                />
                <input type = 'text' placeholder = 'nome' value = {this.state.nome}
                    name='nome'
                    onChange = {(e) => this.handleInputChange(e)}
                />
                <input type = 'text' placeholder = 'data de nascimento' value = {this.state.dataDeNascimento}
                    name='dataDeNascimento'
                    onChange = {(e) => this.handleInputChange(e)}
                />
                <input type = 'text' placeholder = 'telefone' value = {this.state.telefone}
                    name='telefone'
                    onChange = {(e) => this.handleInputChange(e)}

                />
                <input type = 'text' placeholder = 'id do grupo' value = {this.state.idGrupo}
                    name='idGrupo'
                    onChange = {(e) => this.handleInputChange(e)}
                />

                <button onClick ={this.submitForm} > Registrar </button>
            </div>


        );
    }
}

export default Form;