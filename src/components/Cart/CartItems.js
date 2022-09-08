import React from 'react';
import Card from '../UI/Card/Card';
import './CartItems.css';

export default function CartItems(props) {
  const { cartItems, onAdd, onRemove} = props;

  const itemsPrice = cartItems.reduce((initial, final) => initial + final.qty * final.price, 0);

  return (
    <Card>
        {cartItems.length === 0 && <div>Cart is empty</div>}

        {cartItems.map((item) => (
          <div key={item.id} className="row section1">
            <div className="col-2">{item.food_title}</div>

            <div className="col-2 text-right">
              {item.qty} x &#8377;{item.price.toFixed(2)}
            </div>

            <div className="col-2 button-add-sub">
              <button onClick={() => onRemove(item)} className="remove">-</button>{' '}
              <button onClick={() => onAdd(item)} className="add"> +</button>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row ">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">&#8377;{itemsPrice.toFixed(2)}</div>
            </div>
          
          <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>&#8377;{itemsPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
           
          </>
        )}
    </Card>
    
  )
}
