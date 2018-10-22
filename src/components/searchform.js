import React, { Component } from 'react';
import { Textfield, Button } from 'react-mdl';

class SearchForm extends Component{

constructor (props) {
    super(props);
    this.state = {
         search: '',
     };
}

handleInputChange = (e) => {

    console.log(e.target.name);
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
    });
}

    render(){

        return (

            <div className = 'search-form'>
               
               <Textfield
                    
                    onChange={() => {}}
                    label= "Digite sua busca aqui"
                    floatingLabel
                    style={{width: '200px'}}
                />

                <Button raised colored ripple>Buscar</Button>
            </div>


        );
    }
}

export default SearchForm;