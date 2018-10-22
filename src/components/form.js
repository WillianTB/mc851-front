import React, { Component } from 'react';
import { Textfield } from 'react-mdl';

class Form extends Component{

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

            <div className = 'form'>
               <Textfield
                    onChange={() => {}}
                    label="Text..."
                    style={{width: '200px'}}
                />
            </div>


        );
    }
}

export default Form;