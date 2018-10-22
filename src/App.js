import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
// import products from './components/products';
import {Link} from 'react-router-dom';
import { Textfield, Button } from 'react-mdl';


class App extends Component {

  constructor (props) {
    super(props);
    this.Main = React.createRef();
    this.state = {
         search: '',
     };
}

onClick = () => {
  this.Main.current.submitForm(this.state.search);
};

handleInputChange = (e) => {

    console.log(e.target.name);
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
    });
}

  render() {
    return (
      <div className="demo-big-content" >
        <Layout>
            <Header className='header-color' title={<Link style={{textDecoration:'none', color:'white'}} to="/">Grupo 3</Link>} waterfall>
              
                <div className = 'search-form'>
                  
                  <Textfield
                        value = {this.state.search}
                        name='search'
                        onChange = {(e) => this.handleInputChange(e)}
                        label= "Digite sua busca aqui"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                    <Button  onClick ={this.onClick} raised colored ripple>Buscar</Button>
                   
                </div>

                <Navigation> 
                  <Link to="/loginPage">Entrar</Link>
                  <Link to="/cart">Carrinho</Link>
                  <Link to="/contact">Fale Conosco</Link>
                </Navigation>         
            </Header>
            
            <Content>
                <div className="page-content" />
                <Main productList = {this.state.productList} ref = {this.Main}/>
            </Content>

        </Layout>
      </div>
    );
  }
}

export default App;