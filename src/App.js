import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
  }
  componentDidMount(){
    firebase
      .firestore()
      .collection('products')
      .onSnapshot(snapshot=>{
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        console.log(products[0]);
        this.setState({products: products});
      });
  }
  handleIncreaseQuantity = (product) => {
      // const { products } = this.state;
      // const index = products.indexOf(product);
      // products[index].qty += 1;
      // this.setState({
      //     products: products
      // });
    let docRef = firebase.firestore().collection('products').doc(product.id);
    docRef.update({
      qty: product.qty + 1
    }).then(()=>{
      console.log("Updated successfully");
    }).catch(err=>{
      console.log('Error', err);
    });
  }
  handleDecreaseQuantity = (product) => {
      // const { products } = this.state;
      // const index = products.indexOf(product);
      // if(products[index].qty === 0) return;
      // products[index].qty -= 1;
      // this.setState({
      //     products: products
      // });
      let docRef = firebase.firestore().collection('products').doc(product.id);
    docRef.update({
      qty: product.qty - 1
    }).then(()=>{
      console.log("Updated successfully");
    }).catch(err=>{
      console.log('Error', err);
    });
  }

  handleDeleteProduct = (id) => {
      // const { products } = this.state;
      // const items = products.filter(item => item.id !== id);
      // this.setState({
      //     products: items
      // });
      let docRef = firebase.firestore().collection('products').doc(id);
      docRef.delete().then(()=>{
        console.log('Deleted successfully');
      }).catch(err=>{
        console.log('Error', err);
      })
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

  addData = () => {
    firebase.firestore()
      .collection('products').add({
        price: 200,
        title: "Kuchh Bhi",
        qty: 2000,
        img: ''
    }).then(docRef=>{
      console.log(docRef);
    }).catch(err=>{
      console.log("Error", err);
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar totalQty={this.addTotalQuantity()}/>
        <button onClick={this.addData}  style={{margin: 5, padding: 5, fontSize: 20}}>Click Me To add new Product</button>
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


// {
//   price: 99,
//   title: "Watch",
//   qty: 1,
//   img: "",
//   id: 1
// },
// {
// price: 999,
// title: 'Mobile Phone',
// qty: 10,
// img: '',
// id: 2
// },
// {
// price: 999,
// title: 'Laptop',
// qty: 4,
// img: '',
// id: 3
// }