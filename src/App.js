import './App.css';
import Food from './components/Food/Food';
import StaticHeader from './components/StaticHeader/StaticHeader';
import TextContainer from './components/UI/TextContainer/TextContainer';
import React, { useState } from "react";
import data from './data'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [products, setProducts] = useState(data.products)
  
  const setQuantity = (id, quantity) =>{
    const myFood = products.filter(food => food.id === id)[0]
    myFood.quantity = parseInt(quantity)
    console.log("my food",myFood)
    setProducts( products.map((x) => x.id === id ? myFood : x))
    console.log("product",products)
    }


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1 } : x));
    }else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

    const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x )
      );
    }
  };

  return (
    <div className="App">
      <StaticHeader countCartItems={cartItems.length} cartItems={cartItems} products={products} onRemove={onRemove} onAdd={onAdd}/>
      <TextContainer />
      <Food products={products} onAdd={onAdd} setQuantity={setQuantity}/>
    </div>
  );
}

export default App;
