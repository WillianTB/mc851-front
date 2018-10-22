import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import LoginPage from './loginpage';
import Cart from './cart';


class Main extends Component{


    constructor (props) {
        super(props);
        this.LandingPage = React.createRef();
        
    }

    submitForm(search){
        this.LandingPage.current.submitForm(search);
    }

    render(){
        return(
            <div> 
                <Switch>
                    {/* <Route exact path = "/" component = {LandingPage} /> */}
                    <Route 
                    exact path = "/" 
                    component = {(props) => <LandingPage {...props} productList = {this.props.productList} ref={this.LandingPage} />} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/loginpage" component = {LoginPage} />
                    <Route path = "/cart" component = {Cart} />
                </Switch>
            </div>
        )
    }
}

export default Main;