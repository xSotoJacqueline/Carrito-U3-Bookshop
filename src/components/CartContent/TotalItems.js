import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
    const {cart} = useContext(dataContext);
    
    const itemsQuantity=cart.reduce((acc, el) => acc + el.quantity, 0);
  return <span className="cart-items-total">{itemsQuantity}</span>;
};

export default TotalItems