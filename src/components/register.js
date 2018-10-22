import React, { Component } from 'react';
import { Textfield, Button} from 'react-mdl';

const host = 'https://ec2-18-218-218-216.us-east-2.compute.amazonaws.com:8080';
//const host = 'http://192.168.15.21:8080';


class Register extends Component{

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            cpf: '',
            dataDeNascimento: '',
            email: '',
            senha: '',
            telefone: '',
            idGrupo: '',
            cep: '',
            street:'',
            neighborhood:'',
            city:'',
            state:'',
            number:'',
            complement:'',
            reference:''
        };
    }

    handleInputChange = (e) => {

        console.log(e.target.name);
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }

    consultCep = () => {

        fetch(
            host + '/bff/address/cep/' +this.state.cep,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(this.state)
            }
        ).then((response) => response.json())
        .then(json => {
            console.log(json);
            
            this.setState.street = json.street;
            this.setState.neighborhood = json.neighborhood;
            this.setState.city = json.city;
            this.setState.state = json.state;
            
        });  

        console.log(this.state);
        this.forceUpdate();
    }

    submitForm = () => {

        fetch(
            host + '/bff/client',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(this.state)
            }
        ).then((response) => console.log(response));  
        
        

        console.log(this.state);
    }

    render(){

        return (
           <div>
               <div className = 'register-form'>
                    
                    <Textfield
                        value = {this.state.nome}
                        name = 'nome'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Nome completo"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                    <Textfield
                        value = {this.state.cpf}
                        name = 'cpf'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "CPF"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                    <Textfield
                        value = {this.state.dataDeNascimento}
                        name = 'dataDeNascimento'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Data de Nascimento"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                    <Textfield
                        value = {this.state.telefone}
                        name = 'telefone'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Telefone"
                        floatingLabel
                        style={{width: '200px'}}
                    />

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

                    <Textfield
                        value = {this.state.idGrupo}
                        name = 'idGrupo'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "id do Grupo"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                    <Textfield
                        value = {this.state.cep}
                        name = 'cep'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "CEP"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                    <Button raised colored ripple onClick = {this.consultCep}>Consultar CEP</Button> 
                    
                    <Textfield
                        value = {this.state.street}
                        name = 'street'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Rua"
                        floatingLabel
                        style={{width: '200px'}}
                    />


                     <Textfield
                        value = {this.state.number}
                        name = 'number'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Número"
                        floatingLabel
                        style={{width: '200px'}}
                    />


                     <Textfield
                        value = {this.state.complement}
                        name = 'complement'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Complemento"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                     <Textfield
                        value = {this.state.reference}
                        name = 'reference'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Ponto de referência"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                    <Textfield
                        value = {this.state.neighborhood}
                        name = 'neighborhood'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Bairro"
                        floatingLabel
                        style={{width: '200px'}}
                    />


                     <Textfield
                        value = {this.state.city}
                        name = 'city'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Cidade"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                    <Textfield
                        value = {this.state.state}
                        name = 'state'
                        onChange = {(e) => this.handleInputChange(e)} 
                        label= "Estado"
                        floatingLabel
                        style={{width: '200px'}}
                    />


                </div>
                <Button raised colored ripple mini onClick = {this.submitForm}>Cadastrar</Button> 
  
           </div>
        );
    }
}

export default Register;