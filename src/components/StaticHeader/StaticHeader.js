import React, { useState } from "react";
import CartItems from "../Cart/CartItems";
import MyCartModal from "../MyCartModal/MyCartModal";
import "./StaticHeader.css";

function StaticHeader(props) {
  const {products} = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="blink-cover">
      <div className="blink2">
        <span>
          <p>FOOD APP</p>
        </span>
      </div>

      <div>
        <a href="#/cart">
          <div className="outer-cart">
            <div className="inner-cart">
              <div className="cart-text">
                <h4 onClick={() => {setIsOpen(true);}}>
                  Your Cart{" "}
                </h4>
              </div>

              {props.countCartItems ? (
                <div className="cart-counter">
                  <button className="cart-button">
                    {props.countCartItems}
                  </button>
                </div>
              ) : ("")}
            </div>
          </div>
        </a>{" "}
      </div>

      <MyCartModal open={isOpen} onClose={() => setIsOpen(false)}>
        Item in Your Cart
        <br/><br/>
        <CartItems
            cartItems={props.cartItems}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            products={products}
        ></CartItems> 
      </MyCartModal>
    </div>
  );
}

export default StaticHeader;
