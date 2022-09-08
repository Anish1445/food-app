import React, { useState } from "react";
import Card from "../UI/Card/Card";
import data from "../../data";
import "./FoodItem.css";

function FoodItem(props) {
  const { product, onAdd, setQuantity } = props;

  const [foodQuantity, setFoodQuantity] = useState(product.quantity);

  const handleQuantityClick = (event) => {
    console.log("Here--> ", data);
    setFoodQuantity(event.target.value);
    
    setQuantity(product.id, event.target.value);
    // console.log("food-quentity",foodQuantity)
  };

  return (
    <Card>
      <div className="outer-div">
        
      
      <div className="food-details">
        <div className="food-title">
          <h5>{product.food_title}</h5>
        </div>

        <div className="food-desc">
          <h5>{product.food_description}</h5>
        </div>

        <div className="food-amount">
          <h3>&#8377;{product.price}</h3>
        </div>
      </div>
      <div className="food-right">
        <div className="food-right-top">
          <div className="food-amount food-inline">
            <h5>Quantity</h5>
          </div>
          <div className="food-amount food-inline">
            <input
              type="number"
              min="1"
              max="5"
              value={foodQuantity}
              onChange={handleQuantityClick}
            />
           
          </div>
        </div>
        <div className="food-right-bottom">
          <div>
            <button onClick={() => {onAdd(product);}} className="food-add-button">
              {" "}
              +Add
            </button>
          </div>
        </div>
      </div>
      </div>
    </Card>
  );
}

export default FoodItem;
