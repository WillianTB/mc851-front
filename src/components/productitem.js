import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import { connect } from 'react-redux';
import {addCart} from '../actions/CartAction';

class ProductItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            onCard: false
        }
    }

    addCart = (product) => {
        this.props.dispatch(addCart(product));
        this.setState({
            onCard: true
        })
    }
    
    render() {
        return (

            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <CardTitle style={{color:"#000", height: '176px', 
                    background: `url(${this.props.product.image}) no-repeat center`}}>
                    {this.props.product.name}
                </CardTitle>

                <CardText>{this.props.product.price}</CardText>
                
                <CardActions border>
                    <Button colored>Mais informações</Button>
                    {!this.state.onCard && (
                        <Button raised colored ripple 
                        onClick={() => this.addCart(this.props.product)}>Adicionar no carrinho</Button>
                    )}
                    {this.state.onCard && (
                        <Button raised colored ripple 
                        onClick={() => this.addCart(this.props.product)}>Remover do carrinho</Button>
                    )}
                </CardActions>
                
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
            </Card>

        )
    }

}


export default connect()(ProductItem);