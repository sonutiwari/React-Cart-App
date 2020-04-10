import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
            price: 99,
            title: "Watch",
            qty: 1,
            img: "",
            id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState({
          products: products
      });
  }
  handleDecreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0) return;
      products[index].qty -= 1;
      this.setState({
          products: products
      });
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;
      const items = products.filter(item => item.id !== id);
      this.setState({
          products: items
      });
  }

  addTotalQuantity = () => {
    const { products } = this.state;
    let totalQty = 0;
    products.forEach(item=>{
      totalQty += item.qty;
    });
    return totalQty;
  }

  calculateTotalPrice = () => {
    const { products } = this.state;
    let totalPrice = 0;
    products.forEach(item=>{
      totalPrice += (item.qty*item.price);
    });
    return totalPrice;
  }

  render() {
    return (
      <div className="App">
        <Navbar totalQty={this.addTotalQuantity()}/>
        <Cart 
          products = {this.state.products}
          inc = {this.handleIncreaseQuantity}
          decr = {this.handleDecreaseQuantity}
          del  = {this.handleDeleteProduct}
        />
        <Footer totalPrice={this.calculateTotalPrice()} />
      </div>
    );
  }
}

export default App;
