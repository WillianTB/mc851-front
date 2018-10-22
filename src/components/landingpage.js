import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Products from './products';


class Landing extends Component {

    constructor (props) {
        super(props);
        this.Products = React.createRef();
        
    }

    submitForm(search){
        this.Products.current.submitForm(search);
    }

    render() {
        return (
            <div className="landing-page">
                <div style = {{width: '100%', margin: 'auto'}}>
                    <div>
                        <Grid className = "landing-grid">
                            <Cell col={2}>
                                <img
                                    src = "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                    alt = "avatar"
                                    className = "avatar-img"
                                />
                            </Cell>
                            <Cell col={10}>
                                <div className = "banner-text">
                                    <h1> O que quer comprar? </h1>
                                    <h2> Utilize a barra de busca acima ou confira os melhores produtos abaixo! :D </h2>
                                </div>
                            </Cell>
                        </Grid>

                        
                    </div>
                </div>

                <div>
                    <Products productList = {this.props.productList} ref={this.Products} />
                </div>
              
            </div>
            
        )
    }
}

export default Landing;