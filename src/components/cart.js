import React, { Component } from 'react';
import { connect } from 'react-redux';
import {cleanCart} from '../actions/CartAction';
import {Button} from 'react-mdl';


class Cart extends Component {
    
    cleanList = () => {
        this.props.dispatch(cleanCart());
    };

    render() {

        return (

            <div>
                <h1> Cart </h1>
                <ul>
                    {this.props.cartState.map((item) => {
                        return (
                            <li>{item.name} - {item.price}</li>
                        );
                    })}
                </ul>
                <Button raised colored ripple 
                        onClick={() => this.cleanList()}>Limpar carrinho</Button>
            </div>

        )
    }

}

const mapStateToProps = (state) => ({
    cartState: state.cartState
  })

export default connect(mapStateToProps)(Cart);