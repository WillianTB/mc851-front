import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import ProductItem from './productitem';


const productList = [
    {
        name: 'Geladeria Brastemp', 
        price: 'R$ 4.599,00',
        image: 'https://a-static.mlcdn.com.br/618x463/geladeira-refrigerador-brastemp-frost-free-inox-duplex-462l-painel-touch-brm56akana/magazineluiza/013082800/3fe387d17a097934db991b130a998992.jpg',
        type: 'eletrodomestico'
    },
    {
        name: 'Microondas',
        price: 'R$ 300,00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjGnDx6DKZge2PXrcrWR3tdxizIepfcJf3lC5OdIaBvB4Hb3H',
        type: 'eletrodomestico'
    },
    {
        name: 'Liquidificador',
        price: 'R$ 80,00',
        image: '',
        type: 'eletrodomestico'
    },
    {
        name: 'tucha',
        price: 'R$ 80,00',
        image: '',
        type: 'eletrodomestico'
    },
    {
        name: 'tucha',
        price: 'R$ 80,00',
        image: '',
        type: 'eletrodomestico'
    },
    {
        name: 'tucha',
        price: 'R$ 80,00',
        image: '',
        type: 'eletrodomestico'
    },
    {
        name: 'tucha',
        price: 'R$ 80,00',
        image: '',
        type: 'eletrodomestico'
    },
    {
        name: 'tucha',
        price: 'R$ 80,00',
        image: '',
        type: 'eletrodomestico'
    },
];

const plist = [ {
    name: 'Geladeria Brastemp', 
    price: 'R$ 4.599,00',
    image: 'https://a-static.mlcdn.com.br/618x463/geladeira-refrigerador-brastemp-frost-free-inox-duplex-462l-painel-touch-brm56akana/magazineluiza/013082800/3fe387d17a097934db991b130a998992.jpg',
    type: 'eletrodomestico'
  },
  {
    name: 'Microondas',
    price: 'R$ 300,00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjGnDx6DKZge2PXrcrWR3tdxizIepfcJf3lC5OdIaBvB4Hb3H',
    type: 'eletrodomestico'
  },
  {
    name: 'Liquidificador',
    price: 'R$ 80,00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacGFQRO5AoaLiGcyxDYXDEBPzLCD0Jnq6sUKoNgACU5zhdSW3w',
    type: 'eletrodomestico'
  },
  {
    name: 'tucha',
    price: 'R$ 80,00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacGFQRO5AoaLiGcyxDYXDEBPzLCD0Jnq6sUKoNgACU5zhdSW3w',
    type: 'eletrodomestico'
  }]

class Products extends Component {

    constructor(props){
        super(props);
        this.state = {activeTab: 0,
            productList: [plist]};
    }

   submitForm(){

    console.log("ae3");
   }

   handleInputChange = (e) => {

    console.log(e.target.name);
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
    });
}

submitForm = async (search) => {

    const name = search;
//   const name = this.state.search;

  const api_call = await fetch(`http://ec2-18-218-218-216.us-east-2.compute.amazonaws.com:8080/api/products?page=0&itemsPerPage=10&category=${name}`,
  { 
      method: 'GET',
      credentials: 'same-origin',
      redirect: 'follow',
      agent: null,
      headers: {
          "Content-Type": "text/plain",
          'Authorization': 'Basic ' + btoa('test:senhatest'),
      },
      timeout: 1000
  }
  );

  const data = await api_call.json();

//   console.log(data.content.length);
  // console.log(data);
  var i;
  var list = [];
  for (i = 0; i < data.content.length && i<8; i++) {
  var item = {name:"",value:"",image:"",type:""};
  item.name = data.content[i].name;
  item.price = "R$ "+data.content[i].value.toFixed(2);
  item.image = data.content[i].images.url;
  //console.log(data.content[i].images[0]);
  item.type = data.content[i].type;
  list.push(item);
  }
  
  this.setState({
      activeTab: 5,
      productList: list,
  });
  
//   console.log(list);
//   console.log(this.state.productList);

}


    toggleCategories(){

        var plist = [];
        if(this.state.activeTab === 5){
            plist = this.state.productList
        }
        else{
            plist = productList;
        }
        //console.log(this.props.productList);
        return(
            <div className="products-grid">
                  {
                     // productList
                     plist
                      .filter((product) => {
                        if(this.state.activeTab === 0 && product.type === 'eletrodomestico')
                            return true;
                        else if(this.state.activeTab === 1 && product.type === 'moveis')
                            return true;
                        else if(this.state.activeTab === 2 && product.type === 'livros')
                            return true;
                        else if(this.state.activeTab === 3 && product.type === 'decoracoes')
                            return true;
                        else if(this.state.activeTab === 4 && product.type === 'carros')
                            return true;
                        else if(this.state.activeTab === 5)
                            return true;
                        return false;
                      })
                      .map((product, index) => {
                        return(
                            <ProductItem 
                                key={index}
                              product={product}
                            />
                        );
                    })  
                  }  
            </div> 
        )

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab> Eletrodomesticos </Tab>
                    <Tab> Moveis </Tab>
                    <Tab> Livros </Tab>
                    <Tab> Decorações </Tab>
                    <Tab> Carros </Tab>
                    <Tab> Busca </Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>          
            </div> 
        )
    }
}

export default Products;