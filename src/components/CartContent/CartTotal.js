import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const {cart} = useContext(dataContext);
    const total = cart.reduce((acc, el) => acc + el.price*el.quantity, 0);
    const roundedTotal = total.toFixed(2);
  return (
    <div className="cartTotal">
        <h3>Total a pagar: ${roundedTotal}</h3>
    </div>
  );
};

export default CartTotal