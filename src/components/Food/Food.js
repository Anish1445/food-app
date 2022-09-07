import "./Food.css";
import FoodItem from "./FoodItem";
function Food(props) {

  const { products, onAdd, setQuantity } = props;
  return (
    <div className="foods card-wrapper">
      {products.map((product) => (
        <FoodItem
          key={product.id} 
          product={product}
          onAdd={onAdd} 
          setQuantity={setQuantity} 
          ></FoodItem>
      ))}
    </div>
  );
}

export default Food;
